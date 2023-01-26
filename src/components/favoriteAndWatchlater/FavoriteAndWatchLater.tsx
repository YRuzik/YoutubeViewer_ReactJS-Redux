import {
    FavoriteAndWatchLaterItemContainer, FAWLDeleteButton,
    FAWLIBody,
    FAWLIThumbnail,
    FAWLITitle,
    FAWLOtherInformation, FAWLWrapper
} from "./FavoriteAndWatchLater.style";
import {publishedFormat, viewsFormat} from "../../services/FormatService";
import {videoIDFetched} from "../../actions/MainActions";
import {useDispatch} from "react-redux";
import React from "react";

const FavoriteAndWatchLater = ({props, snippet, statistics, onDelete, onOpen, id}: any) => {
    const dispatch = useDispatch()

    return (
        <FavoriteAndWatchLaterItemContainer>
            <FAWLDeleteButton onClick={() => onDelete()}><i className="fa-solid fa-trash fa-21"></i></FAWLDeleteButton>
            <FAWLWrapper onClick={() => {
                dispatch(videoIDFetched(id))
                onOpen()
            }}>
                <FAWLIThumbnail>
                    <img src={snippet.thumbnails.medium.url} width={'70%'}/>
                </FAWLIThumbnail>

                <FAWLIBody>
                    <FAWLITitle>
                        {snippet.title}
                    </FAWLITitle>
                    <FAWLOtherInformation>
                        {snippet.channelTitle} | {publishedFormat(snippet.publishedAt)} | {viewsFormat(statistics.viewCount)} просмотров
                    </FAWLOtherInformation>
                </FAWLIBody>
            </FAWLWrapper>
        </FavoriteAndWatchLaterItemContainer>
    )
}

export default FavoriteAndWatchLater
