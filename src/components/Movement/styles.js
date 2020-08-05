import { css } from '@emotion/core';
import { default as theme } from '../../theme';
import styled from 'styled-components';

export const containerClass = css`
  background: ${theme.colors.cream};

`;

export const organizerImageClass = css`
  width: 75%;
  margin-bottom: 15px;
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
  flex-direction: column;

  p {
    margin-bottom: 20px;
    line-height: 22px;
  }

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
  margin: 40px 0 0 0;
  position: sticky;
  top: 40px;
  z-index: 5;

  @media (max-width: ${theme.breakpoints.large}px) {
    top: 75px;
  }
`;

export const screeningTextClass = css`
  color: ${theme.colors.navy};
  width: 600px;
  margin: 0 auto;
  padding-top: 40px;
  p {
    line-height: 22px;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    padding: 20px 15px;
    width: 90%;
  }
`;

export const voteButtonClass = css`
  background-color: ${theme.colors.navy};
  border-radius: 3px;
  color: ${theme.colors.cream};
  padding: 10px 15px;
  border-color: ${theme.colors.navy};
  font-size: 18px;
  text-transform: uppercase;
  border-style: none;
  font-weight: 900;
  margin-top: 30px;
  cursor: pointer;
  margin: 20px 0;
`;

