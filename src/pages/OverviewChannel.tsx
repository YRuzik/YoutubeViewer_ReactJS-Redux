import React, {useEffect, useState} from "react";
import {ContentContainer} from "../components/listItem/ListItem.style";
import mainService from "../services/MainService";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {currentChannelFetched, currentVideoFetched, listFetching, videosChannelFetched} from "../actions/MainActions";
import ChannelInfo from "../components/channelInfo/ChannelInfo";
import Skeleton from "../components/skeleton/Skeleton";

const OverviewChannel = () => {
    const {listStatus}: any = useSelector(state => state)

    const {getChannelId, getVideosChannel} = mainService()
    const {channelID} = useParams()
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getVideosChannel(channelID!).then(data => dispatch(videosChannelFetched(data.items)))
            .then(() => getChannelId(channelID!).then(data => dispatch(currentChannelFetched(data.items[0]))))
            .then(() => setLoading(true))

        return () => {
            dispatch(currentChannelFetched(JSON.parse('{}')))
            dispatch(videosChannelFetched([]))
            setLoading(false)
        }
    }, [channelID])

    const renderSkeletons = (numberOfSkeletons: number ) => {
        const newArr = Array.from(Array(numberOfSkeletons).keys())
        return newArr.map((id) => {
            return (
                <Skeleton key={id + 's'}/>
            )
        })
    }

    const skeletons = renderSkeletons(8)

    return (
        <ContentContainer>
            {loading ? <ChannelInfo/> : skeletons}
        </ContentContainer>
    )
}

export default OverviewChannel;
