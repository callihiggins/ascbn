import { css } from '@emotion/core';
import { default as theme } from '../../theme';

export const textContainerClass = css`
  width: 50%;
  margin: 35vh auto 0 auto;
`;

export const textBlockClass = css`
  scroll-snap-align: start;
  scroll-snap-stop: always;
  margin: 35vh 0;
  color: white;
  font-size: 28px;
  text-align: center;
  font-weight: 700;
  line-height: 36px;
`;

export const highlightClass = css`
  color: ${theme.colors.lightBlue};
`;