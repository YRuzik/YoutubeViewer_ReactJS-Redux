import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import mainService from "../../services/MainService";
import {listFetched, listFetchingError} from "../../actions/MainActions";
import ListItem from "../listItem/ListItem";
import {ContentContainer, ListItemContainer} from "../listItem/ListItem.style";


const List = () => {
    const {list}: any = useSelector(state => state)
    const {getList} = mainService()
    const dispatch = useDispatch()

    useEffect(() => {
        getList().then(data => dispatch(listFetched(data.items)))
            .catch(() => dispatch(listFetchingError()))
    }, [])

    const renderListItems = (arr: object[]) => {
        return arr.map(({...props}, id) => {
            return (
                <ListItem key={id} {...props}/>
            )
        })
    }

    const listOfVideos = renderListItems(list)

    return (
        <ContentContainer>
            <h1 style={{textAlign: "start", paddingBottom: '1rem'}}>Рекомендации</h1>
            <ListItemContainer>
                {listOfVideos}
            </ListItemContainer>
        </ContentContainer>
    )
}

export default List
