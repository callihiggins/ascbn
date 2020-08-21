import { css } from '@emotion/core';
import { default as theme } from '../../../theme';
import styled from 'styled-components';


export const textItemClass = css`
  margin-bottom: 10px;
`;

export const titleClass = css`
  font-family: 'Changa One';
  text-transform: uppercase;
  color: ${theme.colors.cream};
  letter-spacing: normal;
  font-size: 28px;
  margin-right: 20px;
  letter-spacing: 1.5px;
  font-weight: 500;


  @media (max-width: ${theme.breakpoints.large}px) {
    flex-basis: 100%;
    margin-right: 0;
    text-align: center;
    font-size: 22px;
  }
`;

export const containerClass = css`
  width: 100%;
  height: 70px;
  background: ${theme.colors.teal};
  color: ${theme.colors.cream};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 500;
  position: fixed;
  bottom: 0;

  @media (max-width: ${theme.breakpoints.large}px) {
    height: 125px;

  }
`;

export const signupContainerClass = css`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  align-items: center;


  @media (max-width: ${theme.breakpoints.large}px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const inputItemClass = css`
  background: ${theme.colors.cream};
  width: 250px;
  padding: 7px 10px;
  margin-right: 10px;
  height: 20px;
  color: ${theme.colors.navy};

  ::placeholder {
    color: color: ${theme.colors.navy};
    font-weight: 900;
    font-size: 14px;
    text-transform: uppercase;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    margin: 10px 5px 10px 0;
    width: 200px;
  }
`;

export const buttonClass = css`
  background-color: ${theme.colors.navy};
  border-radius: 3px;
  color: ${theme.colors.cream};
  padding: 10px 25px;
  border-color: ${theme.colors.navy};
  font-size: 14px;
  text-transform: uppercase;
  border-style: none;
  font-weight: 900;
  cursor: pointer;
  @media (max-width: ${theme.breakpoints.large}px) {
    margin-top: 20px;
  }

  text-decoration: none;
`;

export const emailMessageClass = css`
  color: ${theme.colors.cream};
  margin-top: 10px;
  padding: 20px;
  font-size: 14px;
  letter-spacing: normal;

  a {
    color: ${theme.colors.navy};
  }
`;

export const shortInputItemClass = css`
  ${inputItemClass};
  width: 80px;

  @media (max-width: ${theme.breakpoints.large}px) {
    margin-bottom: 0;
    width: 80px;
    margin-top: 0;
    margin-right: 0;
  }
`;

export const spinClass = css`
  color: ${theme.colors.cream};
  font-size: 20px;
  margin-left: 15px;
`;

export const thankyouClass = css`
  font-size: 18px;
  color: #${theme.colors.cream};
  text-transform: uppercase;
  font-weight: 700;
  font-style: italic;
  margin: 20px 0 10px 0;
  letter-spacing: normal;
`;