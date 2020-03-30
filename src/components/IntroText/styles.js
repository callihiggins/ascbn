import { css } from '@emotion/core';
import { default as theme } from '../../theme';

export const textContainerClass = css`
  width: 50%;
  margin: 80px auto 0 200px;
  display: flex;
  height: calc(100vh - 80px);
  justify-content: center;
  flex-direction: column;
`;

export const textBlockClass = css`
  color: white;
  font-size: 23px;
  font-weight: 700;
  line-height: 28px;
  margin: 20px 0;
`;

export const highlightClass = css`
  color: ${theme.colors.lightBlue};
`;