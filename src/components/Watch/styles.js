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

export const festivalBannerClass = css`
  height: 50px;
  background: ${theme.colors.teal};
  text-align: center;
  font-family: 'Changa One';
  text-transform: uppercase;
  color: ${theme.colors.cream};
  letter-spacing: normal;
  font-size: 22px;
  letter-spacing: 1.5px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  top: 40px;
  z-index: 5;
`;

export const festivalsContainerClass = css`
  display: flex;
  padding: 40px;
  justify-content: space-around;
  width: calc(100% - 150px);
  background: ${theme.colors.cream};
`;

export const festivalContainerClass = css`
  display: flex;
  flex-direction: column;
  width: 300px;

  a {
    text-decoration: none;
  }

`;

export const imageClass = css`
  width: 300px;
  height: auto;
  filter: grayscale(1);
`;

export const nameClass = css`
  color: ${theme.colors.cream};
  margin: 7px 0;
  font-weight: 900;
`;

export const datesClass = css`
  color: ${theme.colors.cream};
  font-weight: 900;
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