import { css } from '@emotion/core';
import { default as theme } from '../../theme';
import styled from 'styled-components';

export const containerClass = css`
  background: ${theme.colors.cream};
`;

export const storeContainerClass = css`
  padding-top: 80px;
  width: 80%;
  margin: 0 auto;
`;

export const mainTextClass = css`
  font-family: 'Changa One';
  font-size: 85px;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: -4px;
  line-height: 72px;
  color: ${theme.colors.navy};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.large}px) {
    font-size: 65px;
    margin: 0 auto 20px auto;
    line-height: 50px;
  }
`;

export const mainTextContainerClass = css`
  max-width: 800px;
  width: 80%;
  margin-bottom: 50px;
  @media (max-width: ${theme.breakpoints.large}px) {
    margin: 0 auto;
    width: calc(100% - 40px);
  }
`;
