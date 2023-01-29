import {
    ChannelInfo, Comments, CommentsContainer,
    Description, DescriptionContent, DescriptionTitle, LeaveComment,
    LikeButton,
    SubscribeButton,
    VideoInfoActions,
    VideoInfoContainer
} from "./VideoInfo.style";
import {AvatarSkeleton} from "../listItem/ListItem.style";
import mainService from "../../services/MainService";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    addFavorites, addLiked, addSubscribers,
    addWatchLaterVideo,
    currentChannelFetched,
    currentCommentsFetched,
    listFetching,
    listFetchingError, removeLiked, removeSubscribers, setToaster
} from "../../actions/MainActions";
import {descriptionFormat, publishedFormat, viewsFormat} from "../../services/FormatService";
import CommentsItem from "../commentsItem/CommentsItem";
import React from "react";
import {comment} from "../../interfaces/interfaces";

const VideoInfo = ({statistics, snippet, videoID}: any) => {
    const {currentChannel, currentComments, currentVideo, subscribes}: any = useSelector(state => state)
    const [subButton, setSubButton] = useState(false)
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

    useEffect(() => {
        const exists = subscribes.find((obj: any) => obj.id === currentChannel.id) || ''
        if (exists !== '') setSubButton(true)
    }, [currentVideo])

    const renderComments = (arr: comment[]) => {
        return arr.map(({...props}, id: number) => {
            return <CommentsItem {...props} key={id}/>
        })
    }

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
                        {subButton ?
                            <SubscribeButton onClick={(event) => {
                                event.preventDefault()
                                dispatch(removeSubscribers(currentChannel.id))
                                setSubButton(false)
                            }
                            }>Отписаться</SubscribeButton>
                            :
                            <SubscribeButton onClick={(event) => {
                                event.preventDefault()
                                dispatch(addSubscribers(Array(currentChannel)))
                                dispatch(setToaster(currentChannel.snippet.title, true))
                                setSubButton(true)
                            }
                            }>Подписаться</SubscribeButton>
                        }
                    </div>
                    <div>
                        <LikeButton onClick={() => {
                            dispatch(addWatchLaterVideo(Array(currentVideo)))
                            dispatch(setToaster('Смотреть позже'))
                        }
                        }><i className="fa-regular fa-clock fa-lg"></i></LikeButton>
                        <LikeButton onClick={() => {
                            dispatch(addFavorites(Array(currentVideo)))
                            dispatch(setToaster('Избранное'))
                        }
                        }><i className="fa-regular fa-bookmark fa-lg"></i></LikeButton>
                        <LikeButton onClick={() => {
                            dispatch(addLiked(Array(currentVideo)))
                            dispatch(setToaster('Понравившиеся'))
                        }
                        }><i className="fa-regular fa-heart fa-lg"></i> {viewsFormat(statistics.likeCount)}</LikeButton>
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
