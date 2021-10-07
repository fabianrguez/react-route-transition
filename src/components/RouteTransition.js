import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px)
  }
  100% {
    opacity: 1;
    transform: translateY(0)
  }
`;

const StyledTransition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100vw;
  animation: ${fadeIn} 0.5s;
`;

export default function RouteTransition({ children }) {
  return (<StyledTransition>{children}</StyledTransition>);
}