import { css } from '@emotion/core';
import { default as theme } from '../../theme';

export const containerClass = css`
  display: flex;
`;

export const logoBlockClass = css`
  width: 40%;
  height: calc(100vh - 60px);
  margin-top: 60px;
  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    margin: 40px auto 0 auto;
  }
`;

export const trailerBlockClass = css`
  width: 60%;
  height: 100vh;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.large}px) {
    display: none;
  }
`;

export const logoContainerClass = css`
  width: 60%;
  margin: 0 auto;
  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    text-align: center;
  }
`;

export const logoClass = css`
  @media (max-width: ${theme.breakpoints.large}px) {
    width: auto;
    height: 40vh;
  }
`;

export const laurelClass = css`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 150px;

  @media (max-width: ${theme.breakpoints.large}px) {
    bottom: 30vh;
    width: 100%;
    text-align: center;
    right: initial;

    svg {
      height: 10vh;
      stroke: ${theme.colors.grey};
      fill: ${theme.colors.grey};
        path {
          stroke: ${theme.colors.grey};
          fill: ${theme.colors.grey};
        }
        text {
          stroke: ${theme.colors.grey};
          fill: ${theme.colors.grey};
        }
      }
    }
  }    
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

  @media (max-width: ${theme.breakpoints.large}px) {
    color: #3D3838;
    position: absolute;
    left: initial;
    bottom: 15vh;
    width: 100%;
    justify-content: center;
  }
`;

export const playerButtonClass = css`
  width: 40px;
  display: inline-block;
  margin-right: 15px;

  @media (max-width: ${theme.breakpoints.large}px) {
    svg {
      stroke: ${theme.colors.grey};
      fill: ${theme.colors.grey};

      path {
        stroke: ${theme.colors.grey};
        fill: ${theme.colors.grey};
      }
    }
  }
`;

export const modalClass = css`
  height: 88vh;
  background: black;
`;