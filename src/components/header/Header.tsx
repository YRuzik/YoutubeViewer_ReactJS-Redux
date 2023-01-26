import {HeaderContainer, LogoHandler, SearchPanel} from "./Header.style";
import {useState} from "react";
import {useNavigate} from "react-router";
import React from "react";
import authService from "../../services/AuthService";
import {_clientID} from "../../environment";
import {Link} from "react-router-dom";

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
