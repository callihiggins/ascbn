import { css } from '@emotion/core';
import { default as theme } from '../../../theme';
import styled from 'styled-components';

export const containerClass = css`
  background: ${theme.colors.cream};
  height: 300px;
  color: ${theme.colors.navy};
  font-size: 14px;
  position: relative;
  z-index: 100;

  a {
    text-decoration: none;
    color: ${theme.colors.navy};
  }
`;

export const horizontalLineClass = css`
  width: 95%;
  height: 100px;
  margin: 0 auto;
  border-bottom: 1px solid ${theme.colors.navy};
`;

export const bottomContainerClass = css`
  display: flex;
  width: 95%;
  margin: 0 auto;
  justify-content: space-between;
  padding: 25px 15px;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 90%;
  }
`;

export const logoClass = css`
  width: 75px;
  height: 70px;
`;

export const rightSideClass = css`
  display: flex;
  flex-wrap: wrap;
  width: 210px;
`;

export const leftSideClass = css`
  display: flex;
  justify-content: space-between;
  width: 315px;
`;

export const socialMediaIconsClass = css`
  display: flex;
  justify-content: space-between;
  width: 120px;
  margin-left: 20px;
`;

export const iconClass = css`
  color: ${theme.colors.navy};
  font-size: 18px;
  font-weight: 700;
`;
