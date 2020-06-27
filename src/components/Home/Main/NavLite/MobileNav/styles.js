import { css } from '@emotion/core';
import { default as theme } from '../../../../../theme';
import styled from 'styled-components';

export const NavItem = styled.li`
  text-transform: uppercase;
  margin: 20px 0;
  a {
    color: ${theme.colors.cream};
    text-decoration: none;
    font-size: 16px;
  }

  ${props => props.active && `
  a {
    border-bottom: 2px solid ${theme.colors.pink};
  }
  `}
`;

export const socialMediaIconsClass = css`
  width: 60%;
  margin-top: 50px;
  display: flex !important;
  justify-content: space-between;
`;

export const iconClass = css`
  color: ${theme.colors.cream};
  font-size: 22px;
  font-weight: 700;
`;

export const logoClass = css`
  width: 100px;
  height: auto;
  margin-left: 25px;
  margin-top: 25px;
`;

export const navClass = css`
  position: absolute;
  top: 0;
  z-index: 300;
  height: 80px;;
  background: ${theme.colors.navy};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  display: none;

  @media (max-width: ${theme.breakpoints.large}px) {
    display: block;
  }
`;
