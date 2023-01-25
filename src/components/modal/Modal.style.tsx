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
/*  & .modal-content {
    transform: translateY(100px);
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }

  &.active {
    transition-duration: 250ms;
    transition-delay: 0ms;
    opacity: 1;

    & .modal-content {
      transform: translateY(0);
      opacity: 1;
      transition-delay: 150ms;
      transition-duration: 350ms;
    }
  }*/
`

export const Content = styled.div`
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  background-color: #362A65;
  z-index: 10000;
`

export const ModalExit = styled.div`
  position: absolute;
  font-size: 3rem;
  line-height: 0;
  cursor: pointer;
  user-select: none;
  top: 11%;
  right: 10%;
`

export const WrapperModal = styled.div`
  min-height: 50px;
  width: 90rem;
  max-height: 80%;
  overflow-y: scroll;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.30);
`
