import {useDispatch, useSelector} from "react-redux";
import React, {useCallback, useEffect, useRef, useState} from "react";
import mainService from "../../services/MainService";
import {listFetched, listFetchingError} from "../../actions/MainActions";
import ListItem from "../listItem/ListItem";
import {ContentContainer, ListItemContainer} from "../listItem/ListItem.style";
import Skeleton from "../skeleton/Skeleton";


const List = () => {
    const {list}: any = useSelector(state => state)
    const {getList} = mainService()
    const dispatch = useDispatch()
    const [myNextPageToken, setMyNextPageToken] = useState()
    const [first, setFirst] = useState(false)

    const listPagination = async () => {
        await getList('50', myNextPageToken).then(data => {
                dispatch(listFetched([...list, ...data.items]))
                setMyNextPageToken(data.nextPageToken)
            })
                .catch(() => dispatch(listFetchingError()))
    }

    useEffect(() => {
        listPagination().then()
        return () => {
            window.removeEventListener('scroll', infinityScroll)
        }
    }, [])

    useEffect(() => {
            window.addEventListener('scroll', infinityScroll)
    }, [myNextPageToken])

    const renderListItems = (arr: object[]) => {
        return arr.map(({...props}, id) => {
            return (
                <ListItem key={id} {...props}/>
            )
        })
    }

    const infinityScroll =() => {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.body.scrollHeight - 300) {
                console.log('last element!')
                listPagination().then()
                window.removeEventListener('scroll', infinityScroll)
            }
    }

    const listOfVideos = renderListItems(list)

    return (
        <ContentContainer>
            <h1 style={{textAlign: "start", paddingBottom: '1rem'}}>Рекомендации</h1>
            <ListItemContainer>
                <Skeleton/>
                <Skeleton/>
                {listOfVideos}
            </ListItemContainer>
        </ContentContainer>
    )
}

export default List
