import { css } from '@emotion/core';
import { default as theme } from '../../theme';
import styled from 'styled-components';

const duration = '.2s';
const distance = '8px';
const easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';

export const HeaderContainer = styled.div`
  display: flex;
  background:  ${theme.colors.cream};
  z-index: 120;
  position: fixed;
  width: 100%;
  justify-content: center;
  align-items: top;
  padding: 10px 0;

  @media (max-width: ${theme.breakpoints.large}px) {
    padding: 0;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  text-transform: uppercase;
  list-style: none;
  align-items: center;
  height: 30px;
  text-align: center;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.large}px) {
      width: ${props => props.fixedNav ? `calc(100% - 62px)` : `100%`};
      margin-left: ${props => props.fixedNav ? `62px` : `0`};
      justify-content: space-around;
      align-items: center;
      padding: 10px 0;
    };
  }
  
`;

export const NavEl = styled.nav`
  width: 50%;
  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
  }
`;

export const NavItem = styled.li`
  width: 135px;
  margin: 0 20px;
  list-decoration: none;
  font-weight: 900;
  font-size: 12px;
  color: ${theme.colors.navy};
  cursor: pointer;
  position: relative;
  border-bottom: ${props => props.active ? `1px solid ${theme.colors.navy}` : '0'};

  a {
    color: ${theme.colors.navy};
    text-decoration: none;
    cursor: pointer;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    margin:  ${props => props.fixedNav ? `0 6px` : `0 15px`};
    text-align: center;
    border-bottom: none;
    a {
      color: ${theme.colors.navy};
    }

    &:before,
    &:after {
      display: none;
    }
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0; right: 0;
    height: 2px;
    background-color: ${theme.colors.navy};
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

export const socialMediaIconsClass = css`
  display: inline-flex;
  justify-content: space-between;
  width: 25%;
  text-align: right;
  padding-left: 15%;
  width: calc(10% - 20px);
  padding-right: 20px;
`;

export const iconClass = css`
  color: ${theme.colors.navy};
  font-size: 20px;
  font-weight: 700;
`;

export const logoClass = css`
  width: 100px;
  height: auto;
`;

export const logoContainerClass = css`
  width: calc(25% - 25px);
  margin-left: 25px;

  @media (max-width: ${theme.breakpoints.large}px) {
    display: none;
  } 
`;