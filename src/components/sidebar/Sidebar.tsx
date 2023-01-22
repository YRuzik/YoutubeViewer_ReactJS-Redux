import {SidebarContainer, SideBarItem, SidebarItemHeader, SidebarLogo, SidebarWrapper} from "./Sidebar.style";


const Sidebar = () => {
    return (
        <SidebarWrapper>
            <SidebarContainer>
                <SidebarLogo>
                    <i className='fas fa-shekel-sign fa-4x' style={{color: '#A187C5'}}></i>
                    <h2>Now.Vid</h2>
                </SidebarLogo>
                <SidebarItemHeader> <h5>Меню</h5>
                    <SideBarItem>
                        <i className='fa-solid fa-house'></i> Главная
                    </SideBarItem>
                    <SideBarItem>
                        <i className='fa-solid fa-arrow-trend-up'></i> Тренды
                    </SideBarItem>
                </SidebarItemHeader>
                <SidebarItemHeader> <h5>Основное</h5>
                    <SideBarItem>
                        <i className='fa fa-sign-out'></i> Выйти
                    </SideBarItem>
                </SidebarItemHeader>
            </SidebarContainer>
        </SidebarWrapper>
    )
}

export default Sidebar;
