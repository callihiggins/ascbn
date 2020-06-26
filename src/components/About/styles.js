import { css } from '@emotion/core';
import { default as theme } from '../../theme';
import styled from 'styled-components';

export const aboutContainerClass = css`
  width: 100%;
  background: ${theme.colors.teal};
  padding-top: 80px;

  @media (min-width: ${theme.breakpoints.extraLarge}px) {
    max-height: calc(100vh - 135px);
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    height: auto;
    padding-bottom: 40px;
  }
`;

export const youtubeContainerClass = css`
  text-align: center;

`;

export const playerClass = css`
  width: 600px;
  height: 340px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 80vw;
    height: 45vw
  }
`;

export const aboutTextClass = css`
  column-count: 2;
  color: ${theme.colors.cream};
  width: 60%;
  margin: 0 auto;
  padding: 25px 0 40px;
  max-width: 1000px;

  @media (max-width: ${theme.breakpoints.large}px) {
    column-count: 1;
    width: calc(100% - 40px);
    margin 0 20px;
  }

  p {
    margin-bottom: 20px;
  }
`;