import {useSelector} from "react-redux";
import {removeWatchLaterVideo} from "../actions/MainActions";
import AutoPagination from "../components/autoPagination/AutoPagination";


const WatchLaterPage = () => {
    const {watchLater}: any = useSelector(state => state)

    return (
        <>
            <AutoPagination arr={watchLater} method={removeWatchLaterVideo} label={'Смотреть позже'}/>
        </>
    )
}

export default WatchLaterPage
