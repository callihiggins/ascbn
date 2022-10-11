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

export const newsletterBannerClass = css`
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
  position: sticky;
  top: 50px;
  z-index: 5;

  @media (max-width: ${theme.breakpoints.large}px) {
    top: 75px;
  }
`;

export const newsletterImageClass = css`
  height: 75vh;
  width: auto;

  @media (max-width: ${theme.breakpoints.large}px) {
    padding-top: 20px;
  }
`;

export const newsletterTextBlockClass = css`
  background: ${theme.colors.navy};
  color: ${theme.colors.cream};
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 40px;
  width: calc(50% - 80px);
  font-size: 18px;

  p {
    line-height: 22px;
  }
  @media (max-width: ${theme.breakpoints.large}px) {
    padding: 40px;
  }
`;

export const newsletterReigstrationBlockClass = css`
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
    min-height: calc(100vh - 50px);
  }
`;

export const newsletterButtonClass = css`
  background-color: ${theme.colors.cream};
  border-radius: 3px;
  color: ${theme.colors.teal};
  padding: 10px 15px;
  border-color: ${theme.colors.cream};
  font-size: 18px;
  text-transform: uppercase;
  border-style: none;
  font-weight: 900;
  cursor: pointer;
  margin: 0 0 15px 0;
  @media (max-width: ${theme.breakpoints.large}px) {
    background-color: ${theme.colors.navy};
    color: ${theme.colors.cream};
  }
`;

export const newsletterBlockClass = css`
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 175px);

  @media (max-width: ${theme.breakpoints.large}px) {
    height: auto;
  }
`;

export const newsletterImageBlockClass = css`
  width: 50%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: calc(100% - 60px);
    padding: 0 15px;
    justify-content: center;

    img {
      margin: 0 auto;
    }
  }
`;

export const headerClass = css`
  font-family: 'Changa One';
  font-size: 40px;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: -4px;
  line-height: 52px;
  color: ${theme.colors.pink};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  letter-spacing: .7px;
  text-align: center;
  margin-top: 25px;

  @media (max-width: ${theme.breakpoints.large}px) {
    margin: 0 auto 20px auto;
    line-height: 50px;
  }
`;

export const newsletterPlanSubClass = css`
  font-size: 18px;

  @media (max-width: ${theme.breakpoints.large}px) {
    text-align: center;
  }
`;

export const newsletterPlanButtonClass = css`

  a {
    display: block;
  }
`;

export const poweredByClass = css`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 8px;
  justify-content: center;

  img {
    width: 50px;
    margin-left: 10px;
  }
`;

export const buttonGroupClass = css`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;

  a {
    background: ${theme.colors.cream};
    color: ${theme.colors.navy};
    font-size: 14px;
    padding: 10px 15px;
    border-radius: 3px;
    text-decoration: none;
    text-transform: uppercase;
    margin-top: 20px;
    width: 250px;
  }
`;

export const questionsBlockClass = css`
  margin-top: 40px;
  font-size: 14px;
  p {
    line-height: 16px;
  }
`;