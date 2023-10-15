import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const dropDown = keyframes`
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
    transform-origin: top;}
`;

export const Wrap = styled.div`
  width: 1200px;
  margin: 0 auto;

`;

export const SiteNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const RegLoginWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const Head = styled.header`
  padding: 20px 10px;
  background-color: ${p => {
    return p.theme.buttonColor
  }};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom: 3px solid #0a433e5e;
      animation: ${dropDown} 1500ms 1 normal forwards;
      box-shadow: 0px 26px 30px -19px rgba(10,67,62,0.57);
`;

export const NavItem = styled(Link)`
    color: ${p => {
    return p.theme.mainColor;
  }};
  font-size: 24px;
  padding: 10px 5px;
  border-radius: 12px;
  text-decoration: none;
  background-color: ${p => {
    return p.theme.buttonColor
  }};
  transition: background-color ${p => p.theme.trans}, color ${p => p.theme.trans};
  cursor: pointer;
  &:hover {
    background-color: ${p => {
    return p.theme.khakiGreen
  }};
  color: ${p => {
    return p.theme.lightText
  }};

  }
`;

export const Greeting = styled.p`
      color: ${p => {
    return p.theme.mainColor;
  }};
  font-size: 26px;

`;