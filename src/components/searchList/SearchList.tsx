import {ContentContainer} from "../listItem/ListItem.style";
import {useParams} from "react-router";
import ListItem from "../listItem/ListItem";
import Skeleton from "../skeleton/Skeleton";
import React, {useCallback, useEffect, useState} from "react";
import mainService from "../../services/MainService";
import {useDispatch, useSelector} from "react-redux";
import {listFetching, searchListFetched} from "../../actions/MainActions";
import SearchListItem from "../searchListItem/SearchListItem";
import Modal from "../modal/Modal";


const SearchList = () => {
    const {searchList, listStatus}: any = useSelector(state => state)
    const {searchParams} = useParams()
    const {getSearchList} = mainService()
    const dispatch = useDispatch()

    const [myNextPageToken, setMyNextPageToken] = useState()
    const [loadingNew, setLoadingNew] = useState(false)
    const [first, setFirst] = useState(true)

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        dispatch(listFetching())
        if (searchParams) getSearchList(searchParams)
            .then(data => {
                dispatch(searchListFetched(data.items))
                setMyNextPageToken(data.nextPageToken)
            })

        return () => {
            dispatch(searchListFetched([]))
            setFirst(true)
            window.removeEventListener('scroll', infinityScroll)
        }
    }, [searchParams])

    useEffect(() => {
        window.addEventListener('scroll', infinityScroll)
        setLoadingNew(false)
    }, [myNextPageToken])

    const infinityScroll = () => {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.body.scrollHeight - 300) {
            if (searchParams) getSearchList(searchParams, myNextPageToken!)
                .then(data => {
                    dispatch(searchListFetched([...searchList, ...data.items]))
                    setMyNextPageToken(data.nextPageToken)
                })
            setLoadingNew(true)
            window.removeEventListener('scroll', infinityScroll)
        }
    }

    const renderListItems = useCallback((arr: object[]) => {
        return arr.map(({...props}, id) => {
            return (
                <SearchListItem key={id} {...props} onOpen={() => setIsOpen(true)}/>
            )
        })
    }, [searchParams])

    const renderSkeletons = (numberOfSkeletons: number ) => {
        const newArr = Array.from(Array(numberOfSkeletons).keys())
        return newArr.map((id) => {
            return (
                <Skeleton key={id + 's'}/>
            )
        })
    }

    const videosList = renderListItems(searchList)
    const skeletons = renderSkeletons(8)

    return (
        <ContentContainer>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
            <h1>Результаты поиска по запросу {searchParams}</h1>
            {listStatus === 'loading' && first ? skeletons : videosList}
            {loadingNew ? renderSkeletons(8) : null}
        </ContentContainer>
    )
}

export default SearchList
