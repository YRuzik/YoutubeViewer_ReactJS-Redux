import {ContentContainer} from "../components/listItem/ListItem.style";
import {useParams} from "react-router";
import Player from "../components/player/Player";
import mainService from "../services/MainService";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {currentChannelFetched, currentVideoFetched, listFetching, listFetchingError} from "../actions/MainActions";
import VideoInfo from "../components/videoInfo/VideoInfo";
import Skeleton from "../components/skeleton/Skeleton";

const OverviewVideo = () => {
    const {currentVideo, listStatus}: any = useSelector(state => state)

    const {videoID} = useParams()
    const {getVideoId} = mainService()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listFetching())
        if (videoID) getVideoId(videoID).then(data => dispatch(currentVideoFetched(data.items[0])))
            .catch(() => dispatch(listFetchingError()))
    }, [])

    return (
        <ContentContainer>
            {listStatus === 'loading' ? <Skeleton big={true}/> : <Player videoID={videoID}/>}
            {currentVideo.snippet !== undefined ? <VideoInfo snippet={currentVideo.snippet} statistics={currentVideo.statistics} videoID={videoID}/> : null}
        </ContentContainer>
    )
}

export default OverviewVideo;
