import styled from "styled-components";


export const HeaderContainer = styled.div`
  width: 85%;
  min-height: 5rem;
  margin-left: 15%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 6rem 0 6rem;
  position: fixed;
  background: #362A66;
  z-index: 99999;
`

export const SearchPanel = styled.input`
  height: 4rem;
  width: 35rem;
  background-color: unset;
  font-size: 1.5rem;
  border-radius: 25px;
  border: 2px solid rebeccapurple;
  padding: 1rem 1rem 1rem 4.5rem;
  transition: all 0.2s ease-in-out;
  color: white;
  background-image: url('https://svgsilh.com/png-1024/1093183-673ab7.png');
  background-repeat: no-repeat;
  background-size: 2rem;
  background-position: 1rem;
  outline: none;
  
  
  &:focus {
    border: 2px solid #A187C5;
  }
`

export const LogoHandler = styled.div`
  background: mediumpurple;
  padding: 1.6rem;
  margin-left: 1rem;
  border-radius: 50px;
  border: 0.2rem solid white;
  cursor: pointer;
`
