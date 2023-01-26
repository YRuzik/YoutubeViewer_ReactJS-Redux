import Player from "../components/player/Player";
import mainService from "../services/MainService";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {currentVideoFetched, listFetchingError} from "../actions/MainActions";
import VideoInfo from "../components/videoInfo/VideoInfo";
import Skeleton from "../components/skeleton/Skeleton";
import React from "react";

const OverviewVideo = () => {
    const {currentVideo, listStatus, videoID}: any = useSelector(state => state)

    const {getVideoId} = mainService()
    const dispatch = useDispatch()

    useEffect(() => {
        if (videoID) getVideoId(videoID).then(data => dispatch(currentVideoFetched(data.items[0])))
            .catch(() => dispatch(listFetchingError()))
    }, [])

    return (
        <>
            {listStatus === 'loading' ? <Skeleton big={true}/> : <Player videoID={videoID}/>}
            {currentVideo.snippet !== undefined ? <VideoInfo snippet={currentVideo.snippet} statistics={currentVideo.statistics} videoID={videoID}/> : null}
        </>
    )
}

export default OverviewVideo;
