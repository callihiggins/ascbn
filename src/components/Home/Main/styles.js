import { css } from '@emotion/core';
import { default as theme } from '../../../theme';

export const containerClass = css`
  display: flex;
`;

export const logoBlockClass = css`
  z-index: 5;
`;

export const trailerBlockClass = css`
  width: 55%;
  height: 100vh;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.large}px) {
    display: none;
  }
`;

export const logoContainerClass = css`
  text-align: center;
  margin-top: 25vh;
  position: relative;
`;

export const logoClass = css`
 width: 60%;
`;

export const taglineClass = css`
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 7vh;
  color: ${theme.colors.cream};
  line-height: 26px;
`;

export const navClass = css`
  position: absolute;
  text-align: center;
  width: 40%;
  bottom: 20px;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    bottom: 15vh;
  }
`;

export const trailerCTAClass = css`
  font-weight: 700;
  color: ${theme.colors.cream};
  width: 100%;
  justify-content: center;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: none;
  border: 0;
  z-index: 10;
  outline: 0;
  margin-top: 7vh; 
  font-size: 16px;
`;

export const playerButtonClass = css`
  width: 40px;
  display: inline-block;
  margin-right: 15px;

  @media (max-width: ${theme.breakpoints.large}px) {
    svg {
      stroke: ${theme.colors.cream};
      fill: ${theme.colors.cream};

      path {
        stroke: ${theme.colors.cream};
        fill: ${theme.colors.cream};
      }
    }
  }
`;

export const modalClass = css`
  height: 88vh;
  background: black;
`;

export const videoOverlayClass = css`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.65);
  position: absolute;
  top: 0;
  z-index: 3;
`;

export const videoPlayerClass = css`
  position: absolute;
  top: 0;
  z-index: 2;

  @media (min-aspect-ratio: 16/9) {
    width:100%;
    height: auto;
  }

  @media (max-aspect-ratio: 16/9) {
    width: auto;
    height: calc(100% - 40px);
  }
`;

export const arrowUpClass = css`
  position: absolute;
  bottom: 40px;
  left: calc(50% - 20px);
  width: 0; 
  height: 0; 
  border-color: ${theme.colors.cream} transparent;
	border-style: solid;
	border-width: 0px 20px 20px 20px;
	height: 0px;
	width: 0px;
  z-index: 5;
`;

export const bottomBarClass = css`
  background: ${theme.colors.cream};
  height: 40px;
  position: absolute;
  bottom: 0px;
  z-index: 5;
  width: 100%;
`;