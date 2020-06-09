import { css } from '@emotion/core';
import { default as theme } from '../../../../theme';
import styled from 'styled-components';

export const PersonContainer = styled.div`
  order: ${props => props.order};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 40px;
  flex-basis: 21%;
  width: 200px;
  text-align: center;

  @media (max-width: ${theme.breakpoints.large}px) {
    flex-basis: 100%;
  }
`;

export const photoClass = css`
  height: 200px;
  img {
    width: 200px;
  }
`;

export const titleClass = css`
  padding-top: 10px;
  padding-bottom: 5px;
  font-size: 12px;
  color: ${theme.colors.cream};
  border-bottom: 1px solid ${theme.colors.cream};
  text-align: right;
`;

export const nameClass = css`
  font-size: 14px;
  padding-top: 10px;
  color: ${theme.colors.cream};
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: right;
`;

export const modalNameClass = css`
  padding-top: 10px;
  padding-bottom: 5px;
  font-size: 14px;
  color: ${theme.colors.cream};
  border-bottom: 1px solid ${theme.colors.cream};
  width: 300px;
  text-transform: uppercase;
  
`;

export const modalTitleClass = css`
  font-size: 12px;
  padding-top: 10px;
  color: ${theme.colors.cream};
  margin-bottom: 20px;
`;

export const bottomBlockClass = css`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.pink};
  height: 60px;
  padding-right: 10px;
  width: 190px;
  margin: 0 auto
`;

export const modalContainerClass = css`
  color: ${theme.colors.cream};
  font-weight: 700;
  display: flex;
  padding-top: 50px;
  justify-content: space-evenly;

`;

export const bioClass = css`
  width: 60%;
  padding-top: 70px;
  max-width: 600px;
  line-height: 20px;
`;

export const modalPhotoClass = css`
  img {
    width: 300px;
  }
`;

export const leftSideClass = css `
  width: 300px;
`;