import { css } from '@emotion/core';
import { default as theme } from '../../theme';
import styled from 'styled-components';


export const rightArrowClass = css`
  position: absolute;
  right: 0;
  height: 98vh;
`;

export const containerClass = css`
  width: calc(100% - 400px);
  margin-left: 50px;
  padding-top: 150px;
  display: flex;
  justify-content: space-around;
  height: 70vh;
  flex-direction: column;

  a {
    text-decoration: none;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    width: calc(100% - 30px);
    margin: 20px 15px;
    padding: 20px 0;
    column-count: auto;
    height: auto;
  }
`;

export const festivalBlockClass = css`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${theme.breakpoints.large}px) {
    flex-direction: column;
    margin-bottom: 40px;
    img {
      margin-bottom: 15px;
    }
  }

  img {
    width: 150px;
    height: auto;
    margin-right: 30px;
  }

  a {
    text-decoration: none;
  }
`;

export const festivalDetailsClass = css`
  color: white;
  font-size: 18px;
  text-align: left;
  width: 60%;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    text-align: center;
    font-size: 20px;
  }
`;

export const titleClass = css`
  color: white;
  font-size: 26px;
  padding-bottom: 5px;

  @media (max-width: ${theme.breakpoints.large}px) {
    font-size: 22px;
  }
`;

export const dateClass = css`
  font-size: 22px;
  padding-bottom: 5px;

  @media (max-width: ${theme.breakpoints.large}px) {
    font-size: 18px;
  }
`;

export const SectionTitle = styled.div`
  position: absolute;
  right: 20px;
  left: auto;
  top: 45vh;
  color: ${props  => props.color ? props.color : `${theme.colors.red}`};
  text-transform: uppercase;
  font-size: 50px;
  font-family: proxima-nova-extra-condensed;
  font-weight: 700;
`;
