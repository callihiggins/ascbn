import { css } from '@emotion/core';
import { default as theme } from '../../theme';
import styled from 'styled-components';

const duration = '.2s';
const distance = '8px';
const easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';

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
  padding-top: 3px;
  position: relative;
  border-bottom: ${props => props.active ? `1px solid ${theme.colors.red}` : '0'};

  a {
    color: ${theme.colors.grey};
    text-decoration: none;
    cursor: pointer;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0; right: 0;
    height: 2px;
    background-color: ${theme.colors.red};
  }
  &:before {
    opacity: 0;
    transform: translateY(- ${distance});
    transition: transform 0s ${easeOutBack}, opacity 0s;
  }
  &:after {
    opacity: 0;
    transform: translateY($distance/2);
    transition: transform ${duration} ${easeOutBack}, opacity ${duration};
  }
  &.active,
  &:hover {
    &:before,
    &:after {
      opacity: 1;
      transform: translateY(0);
    }
    &:before {
      transition: transform ${duration} ${easeOutBack}, opacity ${duration};
    }
    &:after {
      transition: transform 0s ${duration} ${easeOutBack}, opacity 0s ${duration};
    }
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
  font-size: 18px;
`

export const socialMediaIconsClass = css`
  display: inline-flex;
  justify-content: space-between;
  width: 100px;
  margin-right: 140px;
`;

export const iconClass = css`
  color: ${theme.colors.navy};
  font-size: 20px;
  font-weight: 700;
`;

export const logoClass = css`
  position: absolute;
  top: 10px;
  left: calc(50% - 35px);
  height: 40px;
  margin-left: 15px;
  margin-top: -7px;
`;