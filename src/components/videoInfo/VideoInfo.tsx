import {
    ChannelInfo, Comments, CommentsContainer,
    Description, DescriptionContent, DescriptionTitle, LeaveComment,
    LikeButton, OpenButton,
    SubscribeButton,
    VideoInfoActions,
    VideoInfoContainer
} from "./VideoInfo.style";
import {AvatarSkeleton} from "../listItem/ListItem.style";
import mainService from "../../services/MainService";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    currentChannelFetched,
    currentCommentsFetched,
    listFetching,
    listFetchingError
} from "../../actions/MainActions";
import {descriptionFormat, publishedFormat, viewsFormat} from "../../services/FormatService";
import CommentsItem from "../commentsItem/CommentsItem";
import React from "react";
import {comment} from "../../interfaces/interfaces";

const VideoInfo = ({statistics, snippet, videoID}: any) => {
    const {currentChannel, currentComments}: any = useSelector(state => state)
    const {getChannelId, getAllCommentsOnVideo} = mainService()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listFetching())
        getChannelId(snippet.channelId).then(data => dispatch(currentChannelFetched(data.items[0])))
            .catch(() => dispatch(listFetchingError()))
    }, [snippet.channelId])

    useEffect(() => {
        getAllCommentsOnVideo(videoID).then(data => dispatch(currentCommentsFetched(data.items)))
    }, [])

    const renderComments = (arr: comment[]) => {
        return arr.map(({...props}, id: number) => {
            return <CommentsItem {...props} key={id}/>
        })
    }

    console.log(currentComments)

    const comments = renderComments(currentComments)

    return (
        <>
            {currentChannel.statistics !== undefined ? <VideoInfoContainer>
                <h2>{snippet.title}</h2>

                <VideoInfoActions>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <ChannelInfo>
                            <AvatarSkeleton></AvatarSkeleton>
                            <div style={{paddingLeft: '3rem', display: "inline-grid"}}>
                                <span>{snippet.channelTitle}</span>
                                <span style={{opacity: 0.5}}>{viewsFormat(currentChannel.statistics.subscriberCount)} подписчиков</span>
                            </div>
                        </ChannelInfo>
                        <SubscribeButton>Подписаться</SubscribeButton>
                    </div>
                    <div>
                        <LikeButton><i className="fa-regular fa-heart fa-lg"></i> {viewsFormat(statistics.likeCount)}</LikeButton>
                        <LikeButton><i className="fa-solid fa-heart-crack fa-lg"></i></LikeButton>
                    </div>
                </VideoInfoActions>

                <Description>
                    <DescriptionTitle>
                        {viewsFormat(statistics.viewCount)}. просмотров | {publishedFormat(snippet.publishedAt)}
                    </DescriptionTitle>
                    <DescriptionContent>
                        {snippet.description.length > 0 ? descriptionFormat(snippet.description) : 'Описание отсутствует :('}
                    </DescriptionContent>
                </Description>

                <Comments>
                    <h3 style={{paddingBottom: '1rem'}}>{currentComments.length > 0 ? currentComments.length : null} комментариев</h3>
                    <AvatarSkeleton></AvatarSkeleton>
                    <LeaveComment placeholder={'Оставить комментарий...'}/>
                    <CommentsContainer>
                        {currentComments.length > 0 ? comments : null}
                    </CommentsContainer>
                </Comments>
            </VideoInfoContainer> : null}
        </>
    )
}

export default VideoInfo
