import { css } from '@emotion/core';
import { default as theme } from '../../theme';
import styled from 'styled-components';

export const containerClass = css`
  padding-top: 75px;
  min-height: calc(100vh - 415px);
`;

export const mainTextClass = css`
  padding: 40px 0;
  font-family: 'Changa One';
  font-size: 60px;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: -2px;
  line-height: 50px;
  color: ${theme.colors.pink};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: 530px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: ${theme.breakpoints.large}px) {
    margin: 0 auto;
    max-width: 80%;
  }
`;

export const descriptionClass = css`
  max-width: 600px;
  color: ${theme.colors.cream};
  margin: 20px auto;

  a {
    text-decoration: none;
    color: ${theme.colors.cream};
    border-bottom: 1px solid ${theme.colors.pink};
  }

  p {
    margin: 25px 0;
    line-height: 22px;
    white-space: normal;

    @media (max-width: ${theme.breakpoints.large}px) {
      text-align: left;
    }
  }

  ul {
    p {
      margin: 0;
    }
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 80%;
    max-width: 80%;

  }
`;

export const clipsContainerClass = css`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 80%;
  margin: 0 auto;
  padding: 40px 0 0 40px;

  a {
    text-decoration: none;
  }
`;

export const clipClass = css`
  width: 30%;
  background: ${theme.colors.navy};

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
  }
`;

export const clipDescription = css`
  padidng-top: 7px;
  font-size: 12px;
  color: ${theme.colors.cream};
  text-decoration: none;
`;

export const clipName = css`
  padding-bottom: 7px;
  font-size: 18px;
  color: ${theme.colors.cream};
`;

export const playerWrapperClass = css`
  position: relative;
  padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
`;

export const reactPlayerClass = css`
  position: absolute;
  top: 0;
  left: 0;
`;

export const clipDetailsClass = css`
  padding: 10px 15px;
`;

export const dropdownContainerClass = css`
  width: 80%;
  color: ${theme.colors.navy};
  margin: 0 auto;
  padding-left: 40px;
  select {
    color: ${theme.colors.navy};
    margin-left: 7px;
    border: 1px solid ${theme.colors.navy};
    background: ${theme.colors.cream};
  }
`;