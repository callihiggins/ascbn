import { css } from '@emotion/core';
import { default as theme } from '../../theme';
import styled from 'styled-components';

export const festivalBannerClass = css`
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
  top: 40px;
  z-index: 5;
`;

export const festivalsContainerClass = css`
  display: flex;
  padding: 40px;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
  background: ${theme.colors.cream};

  @media (max-width: ${theme.breakpoints.large}px) {
    flex-wrap: wrap;
    width: calc(100% - 80px);
  }
`;

export const festivalContainerClass = css`
  display: flex;
  flex-direction: column;
  width: 300px;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 80%;
    margin: 20px auto;
  }

  a {
    text-decoration: none;
  }

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
    margin: 0 auto 20px auto;
  }
`;

export const introTextClass = css`
  color: ${theme.colors.navy};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 530px;
  font-size: 18px;
  line-height: 22px;
  justify-content: center;

  a {
    color: ${theme.colors.navy};
    text-decoration: none;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    padding: 0 15px;
    align-items: center;
  }
`;

export const introContainerClass = css`
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin: 50px auto;

  @media (max-width: ${theme.breakpoints.large}px) {
    flex-wrap: wrap;
  }
`;

export const mainTextContainerClass = css`
  width: 300px;
  @media (max-width: ${theme.breakpoints.large}px) {
    margin: 0 auto;
  }
`;

export const imageClass = css`
  width: 300px;
  height: auto;
  filter: grayscale(1);
`;

export const nameClass = css`
  color: ${theme.colors.cream};
  margin: 7px 0;
  font-weight: 900;
`;

export const datesClass = css`
  color: ${theme.colors.cream};
  font-weight: 900;
`;

export const bottomBlockClass = css`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.navy};
  height: 60px;
  padding-left: 10px;
  width: 290px;
`;

export const buttonClass = css`
  background-color: ${theme.colors.navy};
  border-radius: 3px;
  color: ${theme.colors.cream};
  padding: 10px 15px;
  border-color: ${theme.colors.navy};
  font-size: 18px;
  text-transform: uppercase;
  border-style: none;
  font-weight: 900;
  cursor: pointer;
  margin-top: 20px;

`;