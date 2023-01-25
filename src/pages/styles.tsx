import styled from "styled-components";


export const PageNumbersCustom = styled.ul`
    display: flex;
  justify-content: center;
  
  li {
    margin: 0.5rem;
    padding: 0.5rem 0.9rem 0.5rem 0.9rem;
    border-radius: 50px;
    background: mediumpurple;
    cursor: pointer;
    transition: opacity 0.2s ease;
    box-shadow: none;

    &:hover {
      opacity: 0.75;
    }
  }
`
