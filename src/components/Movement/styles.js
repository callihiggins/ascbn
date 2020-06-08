import { css } from '@emotion/core';
import { default as theme } from '../../theme';
import styled from 'styled-components';

export const containerClass = css`
  background: ${theme.colors.cream};

`;

export const organizerImageClass = css`
  width: 85%;
`;

export const organizerContainerClass = css`
  padding-top: 80px;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.large}px) {
    flex-wrap: wrap;
  }
`;

export const halfClass = css`
  width: 50%;
  color: ${theme.colors.navy};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    padding: 0 15px;
  }
`;

export const centerClass = css`
  text-align: center;
`;

export const hostingBannerClass = css`
  height: 50px;
  background: ${theme.colors.pink};
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
  margin: 40px 0 0 0;
`;

export const screeningTextClass = css`
  color: ${theme.colors.navy};
  width: 600px;
  margin: 0 auto;
  padding-top: 40px;
`;