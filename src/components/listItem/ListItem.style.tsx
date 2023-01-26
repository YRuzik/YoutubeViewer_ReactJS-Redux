import styled from "styled-components";
import {Link} from "react-router-dom";

export const ListItemContainer = styled.div`
  width: 100%;
  height: auto;
  display: inline-grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  justify-content: flex-start;
`

export const ItemContainer = styled.div`
  width: 20.16rem;
  display: inline-block;
  padding: 0 0 2rem 0;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.025);
    box-shadow: 0 0 15px rgba(153, 50, 204,.3);
    border-radius: 10px;
    z-index: 10000;
  }
`

export const MainText = styled.h4`
  padding: 0;
  margin: 0;
  text-align: start;
  width: 75%;
  margin-left: 3rem;
`

export const AvatarSkeleton = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: dimgrey;
  border-radius: 50px;
  position: absolute;
`

export const InformationContainer = styled.div`
  padding: 0.5rem;
  display: block;
`

export const AdditionalText = styled.div`
  text-align: start;
  margin-left: 3rem;
  opacity: 1;
  display: grid;
`

export const ChannelTitle = styled(Link)`
  cursor: pointer;
  color: white;
  transition: all 0.2s ease-in-out;
  opacity: 0.5;
  
  &:hover {
    opacity: 1;
  }
`

export const ContentContainer = styled.div`
  width: 90%;
  padding-left: 20%;
  margin-left: 2.5%;
  padding-top: 5rem;
`

export const ToVideo = styled.div`
  color: white;
`

export const MoreActions = styled.div`
  position: absolute;
  margin-left: 17.4rem;
  margin-top: 11.75rem;
`

export const ActionsWrapper = styled.div`
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 50px;
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    background: rgba(100, 55, 204,.25);
  }
`

export const AdditionalContent = styled.div`
  position: absolute;
  z-index: 10000;
  width: 15rem;
  height: auto;
  background: rebeccapurple;
  border-radius: 10px;
  margin: 0rem 0 0 -12rem;
`

export const AdditionalLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 2rem;
  padding: 0.5rem 0 0.5rem 2rem;
  user-select: none;
  
  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  
  &:hover {
    background: mediumpurple;
  }
`
