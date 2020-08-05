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
  justify-content: center;
  position: relative;

  @media (max-width: ${theme.breakpoints.large}px) {
    display: none;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  list-style: none;
  align-items: center;
  text-align: center;
  justify-content: flex-start;

  @media (max-width: ${theme.breakpoints.large}px) {
      width: 100%;
      margin-left: ${props => props.fixedNav ? `62px` : `0`};
      justify-content: space-around;
      align-items: center;
    };
  }

  li {
    width: 120px;
    padding: 5px 20px;
    list-decoration: none;
    font-weight: 900;
    font-size: 12px;
    color: ${theme.colors.cream};
    cursor: pointer;
    position: relative;

    a {
      &:hover {
        color: ${theme.colors.teal};
      }
    }
  
    a {
      color: ${theme.colors.cream};
      text-decoration: none;
      cursor: pointer;
      position: relative;
      width: auto;
    }
  }
  
`;

export const NavEl = styled.nav`
  width: 60%;
  display: flex;
  height: 30px;
  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
  }
`;

export const NavItem = styled.li`
  a {
    &:hover {
      color: ${theme.colors.cream} !important;
    }
  }
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
  text-align: right;
  padding-left: 15%;
  width: calc(15% - 20px);
  padding-right: 20px;
  align-items: center;
`;

export const iconClass = css`
  color: ${theme.colors.cream};
  font-size: 18px;
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
  width: calc(15% - 25px);
  margin-left: 25px;

  @media (max-width: ${theme.breakpoints.large}px) {
    display: none;
  }
`;