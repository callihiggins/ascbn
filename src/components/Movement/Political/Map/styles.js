import { css } from '@emotion/core';
import { default as theme } from '../../../../theme';
import styled from 'styled-components';

export const mapContainerClass = css`
  text-align: center;
  margin: -20px auto 80px auto;
  svg {
    max-width: 90%;
    margin-left: 20px;
    max-height: 60vh;

    path {
      cursor: pointer;
    }
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    svg {
      max-width: calc(100% - 30px);
      max-height: 45vh;
      margin: 0 auto;
    }
  }
`;

export const tooltipClass = css`
  background: ${theme.colors.cream} !important;;
  color: ${theme.colors.cream};
  border: 2px solid ${theme.colors.pink} !important;
  padding: 15px 10px 15px 30px;
  text-align: left;
  font-size: 16px;
  line-height: 24px;
  opacity: 1 !important;

  li {
    list-style-type: circle;
    color: ${theme.colors.navy};
  }

  a {
    color: ${theme.colors.navy};
    text-decoration: none;
  }
`;
