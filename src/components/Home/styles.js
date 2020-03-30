import { css } from '@emotion/core';
import { default as theme } from '../../theme';

export const containerClass = css`
  display: flex;
`;

export const logoBlockClass = css`
  width: 40%;
  height: calc(100vh - 60px);
  margin-top: 60px;
`;

export const trailerBlockClass = css`
  width: 60%;
  height: 100vh;
  overflow: hidden;
`;

export const logoClass = css`
  width: 60%;
  margin: 0 auto;
`;

export const laurelClass = css`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 150px;
`;

export const videoPlayerClass = css`
  height: 100vh;
  width: auto;
  margin-left: -28%
`;

export const taglineClass = css`
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 40px;
  color: ${theme.colors.grey};
`;

export const navClass = css`
  position: absolute;
  bottom: 40px;
  text-align: center;
  width: 40%;
`;

export const trailerCTAClass = css`
  font-weight: 700;
  color: #FFFFFF;
  position: absolute;
  bottom: 40px;
  left: 45%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: none;
  border: 0;
  z-index: 10;
  outline: 0;
`;

export const playerButtonClass = css`
  width: 40px;
  display: inline-block;
  margin-right: 15px;
`;

export const modalClass = css`
  height: 88vh;
  background: black;
`;