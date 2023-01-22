import styled from "styled-components";
import {Link} from "react-router-dom";

export const ListItemContainer = styled.div`
  width: 100%;
  height: auto;
  display: inline-grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  justify-content: flex-start;
`

export const ItemContainer = styled.div`
  width: 20.15rem;
  display: inline-block;
  padding: 0 0 2rem 0;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.025);
    box-shadow: 0 0 15px rgba(153, 50, 204,.3);
    border-radius: 10px
  }
`

export const MainText = styled.h4`
  padding: 0;
  margin: 0;
  text-align: start;
  width: 80%;
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

export const ToVideo = styled(Link)`
  color: white;
`
