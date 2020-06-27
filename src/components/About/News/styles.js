import { css } from '@emotion/core';
import { default as theme } from '../../../theme';
import styled from 'styled-components';

export const pressBannerClass = css`
  height: 50px;
  background: ${theme.colors.teal};
  text-align: center;
  font-family: 'Changa One';
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
  z-index: 5;
`;

export const pressContainerClass = css`
  display: flex;

  @media (max-width: ${theme.breakpoints.large}px) {
    flex-wrap: wrap;
  }
`;

export const leftSideClass = css`
  width: 50%;
  color: ${theme.colors.navy};
  background: ${theme.colors.cream};
  flex-direction: column;
  min-height: 400px;
  padding 40px;
  justify-content: space-evenly;
  line-height: 24px;
  font-size: 18px;

  a {
    color: ${theme.colors.navy};
    text-decoration: none;
    line-height: 24px;
    margin: 30px 0;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
  }
`;

export const pressLinkClass = css`
  display: block;
`;

export const rightSideClass = css`
  background: ${theme.colors.navy};
  width: 50%;
  display: flex;
  flex-drection: column;
  align-items: center;
  text-align: center;


  img {
    width: 50%;
    margin: 0 auto;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    img {
      width: 40%;
    }
  }
`;

export const bottomPosterClass = css`
  background: ${theme.colors.aqua};
  text-align: center;
  padding: 40px 0;
  img {
    width: 40%;
    cursor: pointer;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    img {
      width: 70%;
    }
  }
`;

export const showMoreClass = css`
  font-size: 14px;
  text-transform: uppercase;
  color: ${theme.colors.pink};
  width: auto;
  span {
    cursor: pointer;
  }
`;

export const publisherClass = css`
  color: ${theme.colors.teal};
`;