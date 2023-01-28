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
                    <i className='fas fa-shekel-sign fa-4x' style={{color: '#A187C1'}}></i>
                    <h2>Now.Vid</h2>
                </SidebarLogo>

                <SidebarItemHeader>
                    <NavLink style={({isActive}) => isActive ? on : {color: 'white'}} to={'/'}>
                    <SideBarItem>
                        <SideBarIcon><i className='fa-solid fa-house'></i></SideBarIcon> Главная
                    </SideBarItem>
                    </NavLink>
                </SidebarItemHeader>

                <SidebarItemHeader>
                    <NavLink to={'/watchLater'}>
                        <SideBarItem >
                             <SideBarIcon><i className="fa-regular fa-clock"></i></SideBarIcon> Смотреть позже
                        </SideBarItem>
                    </NavLink>

                    <NavLink style={{color: "white"}} to={'/liked'}>
                        <SideBarItem>
                            <SideBarIcon><i className="fa-regular fa-heart"></i></SideBarIcon> Понравившиеся
                        </SideBarItem>
                    </NavLink>

                    <NavLink style={{color: "white"}} to={'/favorite'}>
                        <SideBarItem>
                             <SideBarIcon><i className="fa-regular fa-bookmark"></i></SideBarIcon> Избранное
                        </SideBarItem>
                    </NavLink>

                    <NavLink style={{color: "white"}} to={'/subscribes'}>
                        <SideBarItem>
                            <SideBarIcon><i className="fa-regular fa-user"></i></SideBarIcon> Подписки
                        </SideBarItem>
                    </NavLink>
                </SidebarItemHeader>

                <SidebarItemHeader>
                    <SideBarItem>
                         <SideBarIcon><i className='fa fa-sign-out'></i></SideBarIcon> Выйти
                    </SideBarItem>
                </SidebarItemHeader>

            </SidebarContainer>
        </SidebarWrapper>
    )
}

export default Sidebar;
