import { css } from '@emotion/core';
import { default as theme } from '../../../theme';
import styled from 'styled-components';

export const halfClass = css`
  width: 50%;
  color: ${theme.colors.navy};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    margin-bottom: 20px;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    padding: 0 15px;
  }
`;

export const votingBannerClass = css`
  height: 50px;
  background: ${theme.colors.teal};
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
  position: sticky;
  top: 40px;
  z-index: 5;
`;

export const voteImageClass = css`
  height: 75vh;
  width: auto;

  @media (max-width: ${theme.breakpoints.large}px) {
    padding-top: 20px;
  }
`;

export const voteTextBlockClass = css`
  background: ${theme.colors.teal};
  color: ${theme.colors.cream};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  width: calc(50% - 80px);
  font-size: 18px;

  p {
    line-height: 22px;
  }
  @media (max-width: ${theme.breakpoints.large}px) {
    background: ${theme.colors.cream};
    color: ${theme.colors.navy};
    padding: 40px;
  }
`;

export const voteReigstrationBlockClass = css`
  background: ${theme.colors.navy};
  color: ${theme.colors.cream};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 18px;
  line-height: 22px;
  marg-bottom: 20px;
  height: auto;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    height: calc(100vh - 50px);
  }
`;

export const voteButtonClass = css`
  background-color: ${theme.colors.cream};
  border-radius: 3px;
  color: ${theme.colors.teal};
  padding: 10px 15px;
  border-color: ${theme.colors.cream};
  font-size: 18px;
  text-transform: uppercase;
  border-style: none;
  font-weight: 900;
  margin-top: 30px;
  cursor: pointer;
  margin: 20px 0 40px 0;
  @media (max-width: ${theme.breakpoints.large}px) {
    background-color: ${theme.colors.navy};
    color: ${theme.colors.cream};
  }
`;

export const voteBlockClass = css`
  display: flex;
  flex-wrap: wrap;
`;

export const voteImageBlockClass = css`
  width: 50%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    padding: 0 15px;

    img {
      margin: 0 auto;
    }
  }
`;