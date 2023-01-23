import styled from "styled-components";

export const CommentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0 0.5rem 0;
`

export const AuthorThumbnail = styled.div`
  flex: none
`

export const CommentContent = styled.div`
  min-width: 0;
  flex: 1;
  flex-basis: (1e-9px);
  display: flex;
  flex-direction: column;
`

export const CommentHeader = styled.div`
  padding-left: 3rem;
  display: flex;
  align-items: center;
`

export const CommentText = styled.div`
  display: inline-flex;
  padding-left: 3rem;
  width: 100%;
`

export const LikeCounter = styled.div`
  padding-left: 3rem;
`

export const CommentsLikeButton = styled.button`
  border: none;
  background: none;
  color: #A187C5;
  cursor: pointer;
  transition: opacity 0.2s ease;
  margin-right: 1rem;
  
  &:hover {
    opacity: 0.75;
  }
`
