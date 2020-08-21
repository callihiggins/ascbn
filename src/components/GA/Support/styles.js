import { css } from '@emotion/core';
import { default as theme } from '../../../theme';
import styled from 'styled-components';

export const bannerImageClass = css`
  text-align: center;
  img {
    width: 50%;
  }
  margin: 20px auto;

  @media (max-width: ${theme.breakpoints.large}px) {
    img {
      width: 100%;
    }
  }
`;

export const mainTextClass = css`
  font-family: 'Changa One';
  font-size: 85px;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: -4px;
  line-height: 72px;
  color: ${theme.colors.navy};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;

  @media (max-width: ${theme.breakpoints.large}px) {
    font-size: 65px;
    line-height: 50px;
  }
`;

export const organizerTextClass = css`
  color: ${theme.colors.navy};
  max-width: 800px;
  margin: 0 auto;
  font-size: 18px;
  text-align: center;
  @media (max-width: ${theme.breakpoints.large}px) {
    width: 90%;
  }
`;

export const organizationsContainerClass = css`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export const organizationContainerClass = css`
  display: flex;
  justify-content: space-between;
  width: 35%;
  margin-bottom: 20px;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 90%;
  }
`;

export const nameClass = css`
  text-transform: uppercase;
  color: ${theme.colors.navy};
  font-size: 16px;
  margin-bottom: 7px;
`;

export const descriptionClass = css`
  color: ${theme.colors.navy};
`;

export const infoClass = css`
  display: flex;
  flex-direction: column;
`;

export const imageContainerClass = css`
  margin-right: 15px;
  padding: 10px;
  border: 1px solid ${theme.colors.navy};
  // background: ${theme.colors.aqua};
  border-radius: 3px;
`;

export const imageClass = css`
  width: 100px;
`;