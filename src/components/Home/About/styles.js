import { css } from '@emotion/core';
import { default as theme } from '../../../theme';
import styled from 'styled-components';

export const containerClass = css`
  display: flex;
  height: 100vh;
`;

export const HalfSection = styled.div`
  background-color: ${props => props.backgroundColor || theme.colors.cream};
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
  }

`;

export const textContainerClass = css`
  padding: 40px;
  font-size: 20px;
  line-height: 24px;
  color: ${theme.colors.cream};

  p {
    margin-bottom: 20px;
  }

  a {
    color:  ${theme.colors.cream};
    text-decoration: none;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    padding: 20px;
  }
`;

export const buttonGroupClass = css`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 350px;
  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    max-width: 400px;
  }
`;

export const buttonClass = css`
  background-color: ${theme.colors.cream};
  border-radius: 3px;
  color: ${theme.colors.navy};
  padding: 10px 15px;
  border-color: ${theme.colors.cream};
  font-size: 14px;
  text-transform: uppercase;
  border-style: none;
  font-weight: 900;
  margin-top: 30px;
  cursor: pointer;
`;