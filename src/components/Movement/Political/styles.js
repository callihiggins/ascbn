import { css } from '@emotion/core';
import { default as theme } from '../../../theme';
import styled from 'styled-components';

export const highZClass = css`
  z-index: 100;
  position: relative;
`;

export const bannerClass = css`
  height: 50px;
  background: ${theme.colors.teal};
  text-align: center;
  font-family: 'Changa One';
  text-transform: uppercase;
  color: ${theme.colors.cream};
  letter-spacing: normal;
  font-size: 22px;
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

export const imageBlockClass = css`
  text-align: center;
  z-index: 5;
`;

export const imageClass = css`
  height: 75vh;
  width: auto;
  pointer: cursor;

  @media (max-width: ${theme.breakpoints.large}px) {
    padding-top: 20px;
    width: 80%;
    height: auto;
  }
`;

export const textBlockClass = css`
  color: ${theme.colors.navy};
  padding: 0 40px;
  width: 70%;
  margin: 40px auto;
  font-size: 18px;
  line-height: 22px;
`;

