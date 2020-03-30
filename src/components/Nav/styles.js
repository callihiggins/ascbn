import { css } from '@emotion/core';
import { default as theme } from '../../theme';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display:  ${props => props.show ? 'flex' : 'block'};
  justify-content: space-between;
`;

export const navClass = css`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  list-style: none;
`;

export const navItemClass = css`
  margin: 0 20px;
  list-decoration: none;
  font-weight: 600;
  font-size: 14px;
  color: ${theme.colors.grey};
  cursor: pointer;
  padding-bottom: 7px;
`;

export const activeItemClass = css`
  font-weight: 700;
  border-bottom: 1px solid ${theme.colors.red};
`;

export const NavItem = styled.li`
  margin: 0 20px;
  list-decoration: none;
  font-weight: ${props => props.active ? '700' : '600'};
  font-size: 14px;
  color: ${theme.colors.grey};
  cursor: pointer;
  padding-bottom: 7px;
  border-bottom: ${props => props.active ? `1px solid ${theme.colors.red}` : '0'};

  a {
    color: ${theme.colors.grey};
    text-decoration: none;
    cursor: pointer;
  }
`;

export const donateButtonClass = css`
  display: inline-block;
  position: absolute;
  right: 40px;
  text-decoration: none;
  color: ${theme.colors.navy};
  text-transform: uppercase;
  padding-bottom: 7px;
  font-weight: 700;
  font-size: 14px;
`

export const socialMediaIconsClass = css`
  display: inlne-flex;
  justify-content: space-between;
  width: 20%;
`;

export const iconClass = css`
  color: ${theme.colors.grey};
  font-size: 16px;
  font-weight: 700;
`;