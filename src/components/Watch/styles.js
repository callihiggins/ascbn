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
    width: 60%;
  }
`;

export const taglineClass = css`
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
  margin-top: 50px;
  color: ${theme.colors.cream};
  line-height: 26px;

  @media (max-width: ${theme.breakpoints.large}px) {
    font-size: 17px;
  }
`;

export const linkClass = css`
  text-transform: uppercase;
  color: ${theme.colors.cream};
  margin-top: 50px;
  position: relative;
  display: block;
`;

export const EpisodeContainer = styled.div`
  order: ${props => props.order};
  padding: 0 20px;
  width: calc(45% - 40px);
  text-align: left;
  color: ${theme.colors.cream};

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

  @media (max-width: ${theme.breakpoints.large}px) {
    flex-wrap: wrap;
  }
`;

export const festivalBannerClass = css`
  height: 50px;
  background: ${theme.colors.teal};
  text-align: center;
  font-family: 'ChangaOne';
  text-transform: uppercase;
  color: ${theme.colors.cream};
  letter-spacing: normal;
  font-size: 22px;
  letter-spacing: 1.5px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const festivalsContainerClass = css`
  display: flex;
  padding: 40px;
  justify-content: center;
  width: calc(100% - 80px);
`;

export const festivalContainerClass = css`
  display: flex;
  flex-direction: column;
  width: 300px;

`;

export const imageClass = css`
  width: 300px;
  height: auto;
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
  margin: 0 auto
`;