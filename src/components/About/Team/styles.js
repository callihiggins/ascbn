import { css } from '@emotion/core';
import { default as theme } from '../../../theme';
import styled from 'styled-components';

export const teamContainerClass = css`
  background: ${theme.colors.cream};
`;

export const peopleContainerClass = css`
  display: flex;
  flex-wrap: wrap;
  padding: 40px;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  background: ${theme.colors.cream};

  @media (max-width: ${theme.breakpoints.large}px) {
    justify-content: center;
  }
`;

export const teamBannerClass = css`
  height: 50px;
  background: ${theme.colors.aqua};
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
  margin: 0;
`;