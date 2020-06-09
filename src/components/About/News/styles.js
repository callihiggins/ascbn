import { css } from '@emotion/core';
import { default as theme } from '../../../theme';
import styled from 'styled-components';

export const pressBannerClass = css`
  height: 50px;
  background: ${theme.colors.navy};
  text-align: center;
  font-family: 'ChangaOne';
  text-transform: uppercase;
  color: ${theme.colors.cream};
  letter-spacing: normal;
  font-size: 22px;
  margin-right: 20px;
  letter-spacing: 1.5px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  position: sticky;
  top: 40px;
`;

export const pressContainerClass = css`
  display: flex;

  @media (max-width: ${theme.breakpoints.large}px) {
    flex-wrap: wrap;
  }
`;

export const leftSideClass = css`
  width: 50%;
  color: ${theme.colors.cream};
  background: ${theme.colors.teal};
  display: flex;
  flex-direction: column;
  min-height: 400px;
  padding 0 40px;
  justify-content: space-evenly;
  line-height: 24px;
  font-size: 18px;

  a {
    color: ${theme.colors.cream};
    text-decoration: none;
    line-height: 24px;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
  }
`;

export const pressLinkClass = css`
  display: block;
`;

export const rightSideClass = css`
  background: ${theme.colors.cream};
  width: 50%;
  display: flex;
  flex-drection: column;
  align-items: center;
  text-align: center;

  img {
    cursor: pointer;
    width: 50%;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    img {
      width: 40%;
    padding: 40px 0;
    }
  }
`;