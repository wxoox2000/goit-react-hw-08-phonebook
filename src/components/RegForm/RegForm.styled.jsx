import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const ErrMessage = styled.p`
  color: red;
  animation: ${appear} 800ms 1 normal forwards;
`;
