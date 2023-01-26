import {
    SidebarContainer,
    SideBarIcon,
    SideBarItem,
    SidebarItemHeader,
    SidebarLogo,
    SidebarWrapper
} from "./Sidebar.style";
import {NavLink} from "react-router-dom";
import React from "react";


const Sidebar = () => {
    const on = {
        opacity: '1',
        color: 'white'
    }

    return (
        <SidebarWrapper>
            <SidebarContainer>

                <SidebarLogo>
                    <i className='fas fa-shekel-sign fa-4x' style={{color: '#A187C5'}}></i>
                    <h2>Now.Vid</h2>
                </SidebarLogo>

                <SidebarItemHeader> <h5>Меню</h5>
                    <NavLink style={({isActive}) => isActive ? on : {color: 'white'}} to={'/'}>
                    <SideBarItem>
                        <SideBarIcon><i className='fa-solid fa-house'></i></SideBarIcon> Главная
                    </SideBarItem>
                    </NavLink>
                </SidebarItemHeader>

                <SidebarItemHeader> <h5>Закладки</h5>
                    <NavLink to={'/watchLater'}>
                        <SideBarItem >
                             <SideBarIcon><i className="fa-regular fa-clock"></i></SideBarIcon> Смотреть позже
                        </SideBarItem>
                    </NavLink>

                    <NavLink style={{color: "white"}} to={'/favorite'}>
                        <SideBarItem>
                             <SideBarIcon><i className="fa-regular fa-bookmark"></i></SideBarIcon> Избранное
                        </SideBarItem>
                    </NavLink>
                </SidebarItemHeader>

                <SidebarItemHeader> <h5>Основное</h5>
                    <SideBarItem>
                         <SideBarIcon><i className='fa fa-sign-out'></i></SideBarIcon> Выйти
                    </SideBarItem>
                </SidebarItemHeader>

            </SidebarContainer>
        </SidebarWrapper>
    )
}

export default Sidebar;
