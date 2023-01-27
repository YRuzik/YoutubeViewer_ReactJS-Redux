import styled from "styled-components";


export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(1px);
  opacity: 1;
  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 200ms;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100000000;
`

export const Content = styled.div`
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  background-color: #362A65;
  z-index: 10000;
  border-radius: 25px;
`

export const WrapperModal = styled.div`
  min-height: 50px;
  width: 90rem;
  max-height: 90%;
  border-radius: 25px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.30);
`
