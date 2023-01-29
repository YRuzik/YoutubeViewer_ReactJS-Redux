import {ContentContainer} from "../components/listItem/ListItem.style";
import React from "react";
import {useSelector} from "react-redux";
import {removeLiked} from "../actions/MainActions";
import AutoPagination from "../components/autoPagination/AutoPagination";

const LikedPage = () => {
    const {liked}: any = useSelector(state => state)

    return (
            <AutoPagination arr={liked} method={removeLiked} label={'Понравившиеся'}/>
    )
}

export default LikedPage
