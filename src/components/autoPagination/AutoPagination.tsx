import React, {useCallback, useState} from "react";
import FavoriteAndWatchLater from "../favoriteAndWatchlater/FavoriteAndWatchLater";
import {useDispatch} from "react-redux";
import Modal from "../modal/Modal";
import {ContentContainer} from "../listItem/ListItem.style";
import {PageNumbersCustom} from "../../pages/styles";

const AutoPagination = ({arr, method, label}: any) => {

    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const renderListItems = useCallback((arr: object[]) => {
        return arr.map(({...props}, id) => {
            return (
                <FavoriteAndWatchLater key={id+5} {...props} onOpen={() => setIsOpen(true)} onDelete={() => onDeleteVideo(id)}/>
            )
        })
    }, [])

    const onDeleteVideo = useCallback ((id: number | string) => {
        dispatch(method(id))
    }, [])

    function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
        setCurPage(Number(event.currentTarget.id))
    }

    const [curPage, setCurPage] = useState(1)
    const [videosPerPage] = useState(4)

    const LastVideoID = curPage * videosPerPage;
    const FirstVideoID = LastVideoID - videosPerPage;

    const content = renderListItems(arr!)

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
                <h1>{label}</h1>
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

export default AutoPagination
