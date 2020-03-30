import { css } from '@emotion/core';
import styled from 'styled-components';
import { default as theme } from '../../theme';

export const rightArrowClass = css`
  position: absolute;
  right: 0;
  height: 98vh;
`;

export const textContainerClass = css`
  width: 50%;
  margin: 80px auto 0 200px;
  display: flex;
  height: calc(100vh - 80px);
  justify-content: center;
  flex-direction: column;
`;

export const textItemClass = css`
  color: white;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  margin: 20px 0;
`;

