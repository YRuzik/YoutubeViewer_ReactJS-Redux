import React, {useCallback, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {
    ChannelInfoBody,
    ChannelInfoHeader,
    ChannelInfoTitle,
    ChannelMainHeader,
    ChannelStatisticsAndVideos
} from "./ChannelInfo.style";
import {ChannelAvatarSkeleton} from "../searchListItem/SearchListItem.style";
import {viewsFormat} from "../../services/FormatService";
import {SubscribeButton} from "../videoInfo/VideoInfo.style";
import List from "../list/List";
import ListItem from "../listItem/ListItem";
import Modal from "../modal/Modal";
import Skeleton from "../skeleton/Skeleton";
import {ListItemContainer} from "../listItem/ListItem.style";
import SearchListItem from "../searchListItem/SearchListItem";
import ChannelStatistics from "../channelStatistics/ChannelStatistics";

const ChannelInfo = () => {
    const {currentChannel, videosChannel}: any = useSelector(state => state)
    const {snippet, statistics} = currentChannel

    const [isOpen, setIsOpen] = useState(false)

    const renderListItems = useCallback((arr: object[]) => {
        return arr.map(({...props}, id) => {
            return (
                <SearchListItem key={id} {...props} onOpen={() => setIsOpen(true)}/>
            )
        })
    }, [videosChannel])


    const listOfVideos = renderListItems(videosChannel!)

    console.log(statistics)
    return (
        <>
            {currentChannel.snippet ?
                <>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
                <ChannelInfoBody>
                    <ChannelInfoHeader>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <ChannelAvatarSkeleton>
                            </ChannelAvatarSkeleton>
                            <ChannelInfoTitle>
                                <h1>{snippet.title}</h1>
                                <p>{snippet.customUrl}</p>
                                <p>{viewsFormat(statistics.subscriberCount)} подписчиков</p>
                            </ChannelInfoTitle>
                        </div>
                        <SubscribeButton style={{padding: '1rem 2rem 1rem 2rem', fontSize: '1.2rem'}}>Подписаться</SubscribeButton>
                    </ChannelInfoHeader>

                    <ChannelMainHeader>
                        <h3>Видео и Статистика</h3>
                    </ChannelMainHeader>

                    {currentChannel.statistics ?
                        <ChannelStatisticsAndVideos>
                        <div>
                            {listOfVideos}
                        </div>
                        <ChannelStatistics statistics={statistics}/>
                    </ChannelStatisticsAndVideos>
                    : null}


                </ChannelInfoBody>
                    </>
                : null}
        </>
    )
}

export default ChannelInfo
