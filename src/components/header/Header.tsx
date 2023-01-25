import {HeaderContainer, LogoHandler, SearchPanel} from "./Header.style";
import {useState} from "react";
import {useNavigate} from "react-router";

const Header = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()

    return (
        <HeaderContainer>
            <form onSubmit={(event) => {
                event.preventDefault()
                console.log(value)
                event.currentTarget.reset()
                navigate(`/search/${value}`)
            }}>
                <SearchPanel placeholder={'Search'} onChange={(event) => setValue((event.currentTarget.value))}/>
            </form>
            <LogoHandler></LogoHandler>
        </HeaderContainer>
    )
}

export default Header;
