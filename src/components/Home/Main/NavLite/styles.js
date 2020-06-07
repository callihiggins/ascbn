import { css } from '@emotion/core';
import { default as theme } from '../../../../theme';
import styled from 'styled-components';

const duration = '.2s';
const distance = '8px';
const easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';

export const HeaderContainer = styled.div`
  display: flex;
  background:  ${props => props.backgroundColor || 'transparent'};
  z-index: 120;
  width: 100%;
  margin-top: 20px;
  justify-content: space-around;
  position: relative;

  @media (max-width: ${theme.breakpoints.large}px) {
    background: ${theme.colors.navy};
    padding-top: 20px;
    margin-top: 0;
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
      width: 100%;
      margin-left: ${props => props.fixedNav ? `62px` : `0`};
      justify-content: space-around;
      align-items: center;
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
  font-weight: ${props => props.active ? '700' : '600'};
  font-size: 12px;
  font-weight: 900;
  color: ${theme.colors.cream};
  cursor: pointer;
  position: relative;
  border-bottom: ${props => props.active ? `1px solid ${theme.colors.cream}` : '0'};

  a {
    color: ${theme.colors.cream};
    text-decoration: none;
    cursor: pointer;
    position: relative;
    width: auto;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    margin:  ${props => props.fixedNav ? `0 6px` : `0 15px`};
    text-align: center;
    border-bottom: none;
    a {
      color: ${theme.colors.cream};
      &:before,
      &:after {
        display: none;
      }
    }
  }
  a {
    &:before,
    &:after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0; right: 0;
      height: 2px;
      background-color: ${theme.colors.cream};
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
  color: ${theme.colors.cream};
  font-size: 20px;
  font-weight: 700;
`;

export const logoClass = css`
  position: absolute;
  top: 10px;
  left: calc(50% - 50px);
  height: 40px;
  width: 100px;

  @media (max-width: ${theme.breakpoints.large}px) {
    position: absolute;
    top: 15px;
    left: 0;
    width: 33px;
    margin-top: -7px;
    margin-left: 15px;
  }
`;

export const emptySpacerClass = css`
  width: 25%;

  @media (max-width: ${theme.breakpoints.large}px) {
    display: none;
  }
`;