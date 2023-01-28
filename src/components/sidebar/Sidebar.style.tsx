import styled from "styled-components";

export const SidebarWrapper = styled.div`
  
`

export const SidebarContainer = styled.div`
  background: #2e2255fe;
  position: fixed;
  top: 0;
  left: 0;
  width: 15%;
  height: 100%;
`

export const SidebarLogo = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0 1rem 0;
  align-items: center;
  margin-left: 0.3rem;
  
  h2{
    font-size: 2.5rem;
    padding-left: 1rem;
  }
`

export const SidebarItemHeader = styled.ul`
  text-align: start;
  vertical-align: center;
  border-bottom: 1px solid rgba(255,255,255,.25);
  
  &:last-child {
    border: none;
  }

  
  h5{
    opacity: 0.5;
    padding: 0 0 0 2rem;
    font-size: 1rem;
  }
`

export const SideBarItem = styled.li`
  display: flex;
  text-align: start;
  padding: 1rem 0 1rem 2rem;
  color: rgb(241, 237, 237);
  font-size: 1.5rem;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0.5;
  align-items: center;
  
      i{
        padding-right: 1rem;
      }
  
    &:hover{
      color: white;
      opacity: 1;
      background: rgba(255,255,255,.025);
      border-left: 3px solid #A187C5;
    }
  
`

export const SideBarIcon = styled.div`
  width: 3rem;
  display: flex;
  justify-content: center;
`
