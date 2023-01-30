import {
    SidebarContainer,
    SideBarIcon,
    SideBarItem,
    SidebarItemHeader,
    SidebarLogo, SideBarSubsMore,
    SidebarWrapper, SubsContainer
} from "./Sidebar.style";
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import {channel} from "../../interfaces/interfaces";
import SidebarSubsItem from "./SidebarSubsItem";


const Sidebar = () => {
    const {subscribes}: any = useSelector(state => state)
    const [showSubs, setShowSubs] = useState(false)

    const renderSubs = (arr: channel[]) => {
        return arr.map(({...props}, id: number) => {
            return <SidebarSubsItem {...props} key={id}/>
        })
    }

    const subs = renderSubs(subscribes || [])

    return (
        <SidebarWrapper>
            <SidebarContainer>

                <SidebarLogo>
                    <i className='fas fa-shekel-sign fa-4x' style={{color: '#A187C1'}}></i>
                    <h2>Now.Vid</h2>
                </SidebarLogo>

                <SidebarItemHeader>
                    <NavLink to={'/'}>
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

                </SidebarItemHeader>

                <SidebarItemHeader>
                    <a style={showSubs ? {color: "white", opacity: 1} : {color: "white"}} onClick={() => setShowSubs(!showSubs)}>
                        <SideBarItem style={showSubs ? {color: "white", opacity: 1} : {color: "white"}}>
                            <SideBarIcon><i className="fa-regular fa-user"></i></SideBarIcon> Подписки
                            <SideBarSubsMore style={showSubs ? {transform: 'rotate(0)', margin: '0.25rem 0 0 0.5rem'} : {}}><i className="fa-sharp fa-solid fa-angle-right"></i></SideBarSubsMore>
                        </SideBarItem>
                    </a>
                    {showSubs ?
                        <SubsContainer>
                            {subs.length > 0 ? subs : 'Пусто :('}
                        </SubsContainer>
                    : null}
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
