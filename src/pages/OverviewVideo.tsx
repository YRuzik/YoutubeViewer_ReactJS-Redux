import Player from "../components/player/Player";
import mainService from "../services/MainService";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {currentVideoFetched, listFetching, listFetchingError} from "../actions/MainActions";
import VideoInfo from "../components/videoInfo/VideoInfo";
import Skeleton from "../components/skeleton/Skeleton";
import React from "react";
import styled from "styled-components";

const MiniBody = styled.div`
  display: flex;
`

const OverviewVideo = () => {
    const {currentVideo, listStatus, videoID}: any = useSelector(state => state)

    const {getVideoId} = mainService()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listFetching())
        if (videoID) getVideoId(videoID).then(data => dispatch(currentVideoFetched(data.items[0])))
            .catch(() => dispatch(listFetchingError()))
    }, [])

    return (
        <>
            <MiniBody>
                {listStatus === 'loading' ? <Skeleton/> : <Player videoID={videoID}/>}
                {currentVideo.snippet !== undefined ? <VideoInfo snippet={currentVideo.snippet} statistics={currentVideo.statistics} videoID={videoID}/> : null}
            </MiniBody>
        </>
    )
}

export default OverviewVideo;
