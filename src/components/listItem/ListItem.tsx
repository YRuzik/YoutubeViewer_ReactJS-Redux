import {
    ActionsWrapper, AdditionalContent, AdditionalLine,
    AdditionalText,
    AvatarSkeleton,
    ChannelTitle,
    InformationContainer,
    ItemContainer,
    MainText, MoreActions, ToVideo
} from "./ListItem.style";
import {publishedFormat, viewsFormat} from "../../services/FormatService";
import {useDispatch} from "react-redux";
import {addFavorites, addWatchLaterVideo, videoIDFetched} from "../../actions/MainActions";
import {useRef, useState} from "react";
import {SideBarIcon} from "../sidebar/Sidebar.style";
import useOnClickOutside from "../../hooks/onClickOutside.hook";
import mainService from "../../services/MainService";
import React from "react";

const ListItem = ({props, snippet, statistics, id, onOpen}: any) => {

    const dispatch = useDispatch()
    const onClickOutside = useOnClickOutside
    const [additionalContent, setAdditionalContent] = useState(false)
    const additionalWindow = useRef() as React.MutableRefObject<HTMLInputElement>

    const {getVideoId} = mainService()

    if (snippet.title.length > 41) snippet.title = snippet.title.slice(0, 41) + '...'

    const additionalContentToggler = () => {
        setAdditionalContent(!additionalContent)
    }

    onClickOutside(additionalWindow, () => additionalContentToggler())

    const additionalBody = () => {
        return (
            <AdditionalContent ref={additionalWindow}>
                <AdditionalLine onClick={() => getVideoId(id).then(data => dispatch(addWatchLaterVideo(data.items)))}>
                    <SideBarIcon style={{width: '2rem'}}><i className="fa-regular fa-clock"></i></SideBarIcon> Смотреть позже
                </AdditionalLine>

                <AdditionalLine onClick={() => getVideoId(id).then(data => dispatch(addFavorites(data.items)))}>
                    <SideBarIcon style={{width: '2rem'}}><i className="fa-regular fa-bookmark"></i></SideBarIcon> Избранное
                </AdditionalLine>
            </AdditionalContent>
        )
    }

    return (
        <ItemContainer>
            <MoreActions onClick={() => additionalContentToggler()}>
                <ActionsWrapper>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </ActionsWrapper>
                {additionalContent ? additionalBody() : null}
            </MoreActions>
            <ToVideo onClick={() => {
                dispatch(videoIDFetched(id));
                onOpen();
            }}>
                <img alt={'thumbnail'} src={snippet.thumbnails.medium.url} style={{borderRadius: '10px'}}/>
                <InformationContainer>

                    <AvatarSkeleton></AvatarSkeleton>

                    <MainText>
                        {snippet.title}
                    </MainText>

                    <AdditionalText>
                        <ChannelTitle to={`channels/${snippet.channelId}`}>{snippet.channelTitle}</ChannelTitle>
                        <span style={{opacity: 0.5}}>{viewsFormat(statistics.viewCount)} просмотров | {publishedFormat(snippet.publishedAt)}</span>
                    </AdditionalText>

                </InformationContainer>
            </ToVideo>
        </ItemContainer>
    )
}

export default ListItem;
