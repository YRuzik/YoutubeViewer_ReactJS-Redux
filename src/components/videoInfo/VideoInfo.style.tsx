import styled from "styled-components";

export const VideoInfoContainer = styled.div`

`

export const VideoInfoActions = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1rem;
  justify-content: space-between;
`

export const ChannelInfo = styled.div`
`

export const SubscribeButton = styled.button`
  border: none;
  border-radius: 25px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  cursor: pointer;
  transition: opacity 0.2s ease;
  margin-left: 1rem;
  
  &:hover {
    opacity: 0.75;
  }
`

export const LikeButton = styled.button`
  border-radius: 25px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  background: none;
  color: #A187C5;
  border: 2px solid #A187C5;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-left: 1rem;
  
  &:hover {
    color: white;
    border: 2px solid #663399;
    background: #A187C5;;
  }
`

export const Description = styled.div`
  display: inline-grid;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 12px;
  background: #2E2255;
  padding: 0.5rem;
  margin-top: 1rem;
  white-space: pre-line;
  width: 100%;
  margin-bottom: 1rem;
  box-shadow: 0 0 15px rgba(0,0,0,.25);
`

export const DescriptionTitle = styled.div`
  display: flex;
`

export const OpenButton = styled.h4`
  padding-left: 1rem;
  cursor: pointer;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.75;
  }
`

export const DescriptionContent = styled.div`
  
`

export const Comments = styled.div`
  width: 100%;
`

export const LeaveComment = styled.input`
  outline: none;
  border: none;
  border-bottom: 2px solid rgba(255,255,255,.25);
  font-size: 1rem;
  height: 2.5rem;
  background: none;
  margin-bottom: 1rem;
  width: 96.5%;
  margin-left: 3rem;
  color: white;
`

export const CommentsContainer = styled.div`
  
`

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(1px);
  opacity: 0;
  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 200ms;
  display: flex;
  align-items: center;
  justify-content: center;

  & .modal-content {
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
  }
`

export const Content = styled.div`
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  min-height: 50px;
  min-width: 50px;
  max-height: 80%;
  max-width: 80%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  border-radius: 2px;
`
