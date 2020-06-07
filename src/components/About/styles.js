import { css } from '@emotion/core';
import { default as theme } from '../../theme';
import styled from 'styled-components';

export const youtubeContainerClass = css`
  margin-top: 80px;
  text-align: center;

`;

export const playerClass = css`
  width: 800px;
  height: 450px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 80%;
    height: 50vh
  }
`;

export const aboutTextClass = css`
  column-count: 2;
  color: ${theme.colors.cream};
  column-count: 2;
  width: 80%;
  margin: 0 auto;
  margin-top: 25px;

  p {

    margin-bottom: 20px;
  }
`;