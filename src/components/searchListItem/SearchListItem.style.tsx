import styled from "styled-components";


export const SearchListItemContainer = styled.div`
  width: 100%;
  min-height: 10rem;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.025);
    box-shadow: 0 0 15px rgba(153, 50, 204,.3);
    border-radius: 10px
  }
`

export const SearchListItemThumbnail = styled.div`
  border-radius: 25px;
`

export const SearchListItemBody = styled.div`
  padding-left: 1rem;
`

export const SearchListItemTitle = styled.div`
  font-size: 1.25rem;
`
export const SearchListItemStatistics = styled.div`
  opacity: 0.75;
`

export const SearchListItemChannel = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1rem;
`

export const SearchListItemDescription = styled.div`
  padding-top: 1rem;
  opacity: 0.75;
`

export const ChannelSearchListThumbNail = styled.div`
  width: 25%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChannelAvatarSkeleton = styled.div`
  background: mediumpurple;
  border-radius: 60px;
  width: 7rem;
  height: 7rem;
`
