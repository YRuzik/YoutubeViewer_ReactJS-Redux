import styled from "styled-components";

export const FavoriteAndWatchLaterItemContainer = styled.div`
  width: 100%;
  min-height: 7rem;
  position: relative;
  border-radius: 25px;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.025);
    box-shadow: 0 0 15px rgba(153, 50, 204,.3);
    border-radius: 10px;
    z-index: 10000;
  }
`

export const FAWLIThumbnail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  img{
    border-radius: 10px;
  }
`

export const FAWLIBody = styled.div`
`

export const FAWLITitle = styled.div`
  width: 100%;
  font-weight: bold;
`

export const FAWLOtherInformation = styled.div`
  opacity: 0.75;
`

export const FAWLWrapper = styled.div`
  display: flex;
  margin: 1rem;
  padding: 1rem;
  cursor: pointer;
`

export const FAWLDeleteButton = styled.div`
  position: absolute;
  right: 3%;
  top: 10%;
  cursor: pointer;
  padding: 0.5rem 0.75rem 0.5rem 0.75rem;
  border-radius: 50px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(100, 55, 204,.25);
  }
`
