import {
    ChannelAvatarSkeleton,
    ChannelSearchListThumbNail,
    SearchListItemBody, SearchListItemChannel,
    SearchListItemContainer, SearchListItemDescription, SearchListItemStatistics,
    SearchListItemThumbnail,
    SearchListItemTitle
} from "./SearchListItem.style";
import {publishedFormat, viewsFormat} from "../../services/FormatService";
import {AvatarSkeleton, ChannelTitle} from "../listItem/ListItem.style";
import {useEffect} from "react";
import {SubscribeButton} from "../videoInfo/VideoInfo.style";
import {videoIDFetched} from "../../actions/MainActions";
import {useDispatch} from "react-redux";


const SearchListItem = ({props, snippet, statistics, id, onOpen}: any) => {
    const dispatch = useDispatch()

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
                            <ChannelTitle style={{paddingLeft: '3rem'}} to={`channels/${snippet.channelId}`}>{snippet.channelTitle}</ChannelTitle>
                        </SearchListItemChannel>
                        <SearchListItemDescription>
                            {snippet.description.length > 0 ? snippet.description : 'Описание отсутствует :('}
                        </SearchListItemDescription>
                    </SearchListItemBody>
                </SearchListItemContainer>
                :
                <SearchListItemContainer>

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

                        <SubscribeButton style={{margin: '3rem 0 0 0'}}>Подписаться</SubscribeButton>
                    </SearchListItemBody>

                </SearchListItemContainer>
            }
        </>
    )
}

export default SearchListItem;
