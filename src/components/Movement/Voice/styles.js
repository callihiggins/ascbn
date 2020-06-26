import { css } from '@emotion/core';
import { default as theme } from '../../../theme';
import styled from 'styled-components';


export const bannerClass = css`
  height: 50px;
  background: ${theme.colors.teal};
  text-align: center;
  font-family: 'ChangaOne';
  text-transform: uppercase;
  color: ${theme.colors.cream};
  letter-spacing: normal;
  font-size: 22px;
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

