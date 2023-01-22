import {HeaderContainer, LogoHandler, SearchPanel} from "./Header.style";

const Header = () => {
    return (
        <HeaderContainer>
            <SearchPanel placeholder={'Search'}/>
            <LogoHandler></LogoHandler>
        </HeaderContainer>
    )
}

export default Header;
