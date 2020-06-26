import { css } from '@emotion/core';
import { default as theme } from '../../theme';
import styled from 'styled-components';

export const watchContainerClass = css`
  background: ${theme.colors.navy};
  padding-top: 100px;
  text-align: center;
`;

export const dateImageClass = css`
  text-align: center;
  img {
    width: 50%;
  }
`;

export const taglineClass = css`
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 40px;
  color: ${theme.colors.cream};
  line-height: 26px;

  @media (max-width: ${theme.breakpoints.large}px) {
    font-size: 17px;
  }
`;

export const linkClass = css`
  text-transform: uppercase;
  color: ${theme.colors.cream};
  margin-top: 40px;
  position: relative;
  display: block;
`;

export const EpisodeContainer = styled.div`
  order: ${props => props.order};
  padding: 0 20px;
  width: calc(45% - 40px);
  text-align: left;
  color: ${theme.colors.cream};
  
  img {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 90%;
    padding-bottom: 40px;
  }
`;


export const episodeSummaryClass = css`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: 50px auto 0 auto;
  padding-bottom: 40px;
  line-height: 22px;

  @media (max-width: ${theme.breakpoints.large}px) {
    flex-wrap: wrap;
  }
`;

export const headerClass = css`
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: 900;
`;

export const watchInfoClass = css`
  width: 50%;
  color: ${theme.colors.cream};
  margin: 20px auto;
  line-height: 18px;

  a {
    text-decoration: none;
    color: ${theme.colors.cream};
  }

  p {
    margin: 25px 0;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 80%;
  }
`;

export const bottomBlockClass = css`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.navy};
  height: 60px;
  padding-left: 10px;
  width: 290px;
  margin: 0 auto;
`;