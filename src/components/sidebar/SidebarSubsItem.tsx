import {SubsItem, SubsItemTitle} from "./Sidebar.style";
import React from "react";
import {AvatarSkeleton} from "../listItem/ListItem.style";

const SidebarSubsItem = ({snippet, id}: any) => {
    return (
        <SubsItem to={`/channels/${id}`}>
            <AvatarSkeleton>
            </AvatarSkeleton>
            <SubsItemTitle>
                {snippet.title}
            </SubsItemTitle>
        </SubsItem>
    )
}

export default SidebarSubsItem
