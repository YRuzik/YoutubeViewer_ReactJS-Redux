import {ContentContainer} from "../components/listItem/ListItem.style";
import {useDispatch, useSelector} from "react-redux";
import React, {useCallback, useState} from "react";
import FavoriteAndWatchLater from "../components/favoriteAndWatchlater/FavoriteAndWatchLater";
import {removeFavorites, removeWatchLaterVideo} from "../actions/MainActions";
import {loadState} from "../store/BrowserStorage";
import Skeleton from "../components/skeleton/Skeleton";
import Modal from "../components/modal/Modal";
import {PageNumbersCustom} from "./styles";


const FavoritePage = () => {
    const {favorites}: any = useSelector(state => state)
    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(false)

    const renderListItems = useCallback((arr: object[]) => {
        return arr.map(({...props}, id) => {
            return (
                <FavoriteAndWatchLater key={id+5} {...props} onOpen={() => setIsOpen(true)} onDelete={() => onDeleteVideo(id)}/>
            )
        })
    }, [])

    const onDeleteVideo = useCallback ((id: number | string) => {
        dispatch(removeFavorites(id))
    }, [])

    function handleClick(event: any) {
        setCurPage(Number(event.target.id))
    }

    const [curPage, setCurPage] = useState(1)
    const [videosPerPage, setVideosPerPage] = useState(4)

    const LastVideoID = curPage * videosPerPage;
    const FirstVideoID = LastVideoID - videosPerPage;

    const content = renderListItems(favorites!)

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
                <h1>Избранное</h1>
                {content.length > 0 ?
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

export default FavoritePage
