import {useDispatch, useSelector} from "react-redux";
import React, {useCallback, useEffect, useRef, useState} from "react";
import mainService from "../../services/MainService";
import {listFetched, listFetching, listFetchingError} from "../../actions/MainActions";
import ListItem from "../listItem/ListItem";
import {ContentContainer, ListItemContainer} from "../listItem/ListItem.style";
import Skeleton from "../skeleton/Skeleton";
import Modal from "../modal/Modal";


const List = () => {
    const {list, listStatus}: any = useSelector(state => state)
    const {getList} = mainService()
    const dispatch = useDispatch()
    const [myNextPageToken, setMyNextPageToken] = useState()
    const [first, setFirst] = useState(true)
    const [loadingNew, setLoadingNew] = useState(false)

    const [isOpen, setIsOpen] = useState(false)

    const listPagination = async () => {
        await getList('50', myNextPageToken).then(data => {
                dispatch(listFetched([...list, ...data.items]))
                setMyNextPageToken(data.nextPageToken)
                setFirst(false)
            })
                .catch(() => dispatch(listFetchingError()))
    }

    useEffect(() => {
        dispatch(listFetching())
        listPagination().then()
        return () => {
            setFirst(true)
            window.removeEventListener('scroll', infinityScroll)
        }
    }, [])

    useEffect(() => {
            window.addEventListener('scroll', infinityScroll)
            setLoadingNew(false)
    }, [myNextPageToken])

    const renderListItems = (arr: object[]) => {
        return arr.map(({...props}, id) => {
            return (
                <ListItem key={id} {...props} onOpen={() => setIsOpen(true)}/>
            )
        })
    }

    const renderSkeletons = (numberOfSkeletons: number ) => {
        const newArr = Array.from(Array(numberOfSkeletons).keys())
        return newArr.map((id) => {
            return (
                <Skeleton key={id + 's'}/>
            )
        })
    }

    const infinityScroll = () => {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.body.scrollHeight - 300) {
                listPagination().then()
                setLoadingNew(true)
                window.removeEventListener('scroll', infinityScroll)
            }
    }

    const listOfVideos = renderListItems(list)
    const skeletons = renderSkeletons(50)

    return (
        <ContentContainer>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
            <h1 style={{textAlign: "start", paddingBottom: '1rem'}}>Рекомендации</h1>
            <ListItemContainer>
                {listStatus === 'loading' && first ? skeletons : listOfVideos}
                {loadingNew ? renderSkeletons(8) : null}
            </ListItemContainer>
        </ContentContainer>
    )
}

export default List
