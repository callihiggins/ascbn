import { css } from '@emotion/core';
import { default as theme } from '../../theme';
import styled from 'styled-components';

export const containerClass = css`
  background: ${theme.colors.navy};
  padding-top: 75px;
`;

export const mainTextClass = css`
  padding-top: 40px;
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
    margin: 0 auto 20px auto;
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

export const formContainerClass = css`
  padding-bottom: 20px;
`;