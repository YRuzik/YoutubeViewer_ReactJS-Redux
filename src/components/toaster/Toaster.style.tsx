import styled from "styled-components";

export const ToasterBody = styled.div`
  background: mediumpurple;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  border-radius: 10px;
  padding: 1rem;

  animation: toast-slide-up 0.3s;

  @keyframes toast-slide-up {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`

export const ToasterLabel = styled.div`
  
`
