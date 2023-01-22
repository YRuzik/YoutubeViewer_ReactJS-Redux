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
  display: inline-block;
  padding: 0 1rem 2rem 1rem;
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
  opacity: 0.5;
  display: grid;
`

export const ChannelTitle = styled.a`
  cursor: pointer;
`

export const ContentContainer = styled.div`
  width: 90%;
  padding-left: 20%;
  padding-top: 5rem;
`
