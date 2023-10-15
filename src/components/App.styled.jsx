import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  0% {
    transform: scaleY(1);
  }
  90% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
  100% {
    display: none;
  }
`;
const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Wrap = styled.div`
  position: relative;
  width: 600px;
  margin: 50px auto 0;
  padding: 20px;
  border: 3px solid
    ${p => {
      return p.theme.khakiGreen;
    }};
  border-radius: 20px;
  background-color: ${p => {
    return p.theme.accentGreen;
  }};
  animation: ${appear} 500ms 1 normal forwards;
`;

export const Heading = styled.h2`
  color: ${p => {
    return p.theme.mainColor;
  }};
`;

export const Decoration = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 580px;
  height: 560px;
  background-color: ${p => {
    return p.theme.accentGreen;
  }};
  animation: ${fade} 1500ms 500ms 1 normal forwards;
`;
