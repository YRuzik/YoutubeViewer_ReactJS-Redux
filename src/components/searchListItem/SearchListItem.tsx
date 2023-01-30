import {
    ChannelAvatarSkeleton,
    ChannelSearchListThumbNail,
    SearchListItemBody, SearchListItemChannel,
    SearchListItemContainer, SearchListItemDescription, SearchListItemStatistics,
    SearchListItemThumbnail,
    SearchListItemTitle
} from "./SearchListItem.style";
import {publishedFormat} from "../../services/FormatService";
import {AvatarSkeleton, ChannelTitle} from "../listItem/ListItem.style";
import {videoIDFetched} from "../../actions/MainActions";
import {useDispatch} from "react-redux";
import React from "react";
import {useNavigate} from "react-router";


const SearchListItem = ({snippet, id, onOpen}: any) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <>
            {id.kind == "youtube#video" ?
                <SearchListItemContainer onClick={() => {
                    dispatch(videoIDFetched(id.videoId));
                    onOpen()
                }}>
                    <SearchListItemThumbnail>
                        <img src={snippet.thumbnails.medium.url}/>
                    </SearchListItemThumbnail>
                    <SearchListItemBody>
                        <SearchListItemTitle>
                            {snippet.title}
                        </SearchListItemTitle>
                        <SearchListItemStatistics>
                            {publishedFormat(snippet.publishedAt)}
                        </SearchListItemStatistics>
                        <SearchListItemChannel>
                            <AvatarSkeleton></AvatarSkeleton>
                            <ChannelTitle style={{paddingLeft: '3rem'}} to={`/channels/${snippet.channelId}`}>{snippet.channelTitle}</ChannelTitle>
                        </SearchListItemChannel>
                        <SearchListItemDescription>
                            {snippet.description.length > 0 ? snippet.description : 'Описание отсутствует :('}
                        </SearchListItemDescription>
                    </SearchListItemBody>
                </SearchListItemContainer>
                :
                <SearchListItemContainer onClick={() => navigate(`/channels/${id.channelId}`)}>

                    <ChannelSearchListThumbNail>
                        <ChannelAvatarSkeleton>
                        </ChannelAvatarSkeleton>
                    </ChannelSearchListThumbNail>

                    <SearchListItemBody>
                        <SearchListItemTitle>
                            {snippet.title}
                        </SearchListItemTitle>

                        <SearchListItemDescription>
                            {snippet.description.length > 0 ? snippet.description : 'Описание отсутствует :('}
                        </SearchListItemDescription>

                    </SearchListItemBody>

                </SearchListItemContainer>
            }
        </>
    )
}

export default SearchListItem;
