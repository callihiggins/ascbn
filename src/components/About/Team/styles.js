import { css } from '@emotion/core';
import { default as theme } from '../../../theme';
import styled from 'styled-components';

export const teamContainerClass = css`
  background: ${theme.colors.cream};
`;

export const peopleContainerClass = css`
  display: flex;
  flex-wrap: wrap;
  padding: 40px 40px 0 40px;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  background: ${theme.colors.cream};

  @media (max-width: ${theme.breakpoints.large}px) {
    justify-content: center;
  }

  i {
    flex-basis: 21%;
    width: 200px;
    order: 17;
  }
`;

export const teamBannerClass = css`
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
  margin: 0;
  position: sticky;
  top: 40px;
  z-index: 5;
`;

export const imdbClass = css`
  font-size: 14px;
  color: ${theme.colors.navy};
  width: 80%;
  margin: 0 auto 40px auto;
  text-align: center;

  a {
    color: ${theme.colors.teal};
  }
`;