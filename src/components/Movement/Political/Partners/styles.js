import { css } from '@emotion/core';
import { default as theme } from '../../../../theme';
import styled from 'styled-components';

export const bannerClass = css`
  height: 50px;
  background: ${theme.colors.teal};
  text-align: center;
  font-family: 'Changa One';
  text-transform: uppercase;
  color: ${theme.colors.cream};
  letter-spacing: normal;
  font-size: 22px;
  margin-right: 20px;
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

export const partnersContainerClass = css`
  width: 80%;
  padding: 0 20px 40px 20px;
  display: flex;
  background: ${theme.colors.cream};
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
`;

export const PartnerContainer = styled.div`
  order: ${props => props.order};
  width: 20%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer: cursor;
  img {
    max-width: 175px;
    max-height: 125px;
    // filter: grayscale(100%);
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 50%;
    height: 100px;
    img {
      max-width: 80%;
      max-height: 80px;
    }
  }
`;