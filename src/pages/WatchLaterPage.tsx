import {ContentContainer} from "../components/listItem/ListItem.style";
import {useDispatch, useSelector} from "react-redux";
import FavoriteAndWatchLater from "../components/favoriteAndWatchlater/FavoriteAndWatchLater";
import React, {useCallback, useEffect, useRef, useState} from "react";
import SearchListItem from "../components/searchListItem/SearchListItem";
import {addWatchLaterVideo, removeWatchLaterVideo} from "../actions/MainActions";
import Modal from "../components/modal/Modal";
import {PageNumbersCustom} from "./styles";


const WatchLaterPage = () => {
    const {watchLater}: any = useSelector(state => state)
    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(false)

    const renderListItems = useCallback((arr: object[]) => {
        return arr.map(({...props}, id) => {
            return (
                <FavoriteAndWatchLater key={id} {...props} onOpen={() => setIsOpen(true)} onDelete={() => onDeleteVideo(id)}/>
            )
        })
    }, [])

    const onDeleteVideo = useCallback ((id: number | string) => {
        dispatch(removeWatchLaterVideo(id))
    }, [watchLater])

    function handleClick(event: any) {
        setCurPage(Number(event.target.id))
    }

    const [curPage, setCurPage] = useState(1)
    const [videosPerPage, setVideosPerPage] = useState(4)

    const LastVideoID = curPage * videosPerPage;
    const FirstVideoID = LastVideoID - videosPerPage;

    const content = renderListItems(watchLater)

    const currentVideos = content.slice(FirstVideoID, LastVideoID);

    const renderCurrentVideos = currentVideos.map((video, id) => {
        return <li key={id}>{video}</li>
    })

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(content.length / videosPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <li
                key={number}
                id={number.toString()}
                onClick={(event) => {
                    handleClick(event)
                }}

            >
                {number}
            </li>
        );
    });

    return (
        <>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
            <ContentContainer>
                <h1>Смотреть позже</h1>
                {watchLater.length > 0 ?
                    <>
                        <div>
                        <ul>
                            {renderCurrentVideos}
                        </ul>
                        <PageNumbersCustom id="page-numbers">
                            {renderPageNumbers}
                        </PageNumbersCustom>
                        </div>
                    </>
                    :
                    <h2>Пусто</h2>}
            </ContentContainer>
        </>
    )
}

export default WatchLaterPage
