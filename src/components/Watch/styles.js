import { css } from '@emotion/core';
import { default as theme } from '../../theme';
import styled from 'styled-components';

export const watchContainerClass = css`
  background: ${theme.colors.navy};
  padding-top: 100px;
  text-align: center;
`;

export const watchImageClass = css`
  text-align: center;
  img {
    width: 50%;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    img {
      width: 70%;
    }
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
    padding: 0 15px;
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
  width: calc(50% - 40px);
  text-align: left;
  color: ${theme.colors.cream};
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  
  img {
    width: 90%;
    height: auto;
    margin-bottom: 20px;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    flex-wrap: wrap;
    width: 90%;
    padding-bottom: 40px;
    margin: 0 auto;
  }
`;

export const BonusEpisodeContainer = styled.div`
  order: ${props => props.order};
  padding: 0 20px;
  width: calc(50% - 40px);
  text-align: left;
  color: ${theme.colors.cream};
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  
  img {
    width: 90%;
    height: auto;
    margin-bottom: 20px;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    flex-wrap: wrap;
    width: 90%;
    padding: 20px;
    margin: 0 auto;
  }
`;


export const episodeSummaryClass = css`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: 50px auto 0 auto;
  padding-bottom: 40px;
  line-height: 22px;
  flex-wrap: wrap;
  

  @media (max-width: ${theme.breakpoints.large}px) {
    flex-wrap: wrap;
  }
`;

export const headerClass = css`
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 24px;
`;

export const watchInfoClass = css`
  width: 80%;
  color: ${theme.colors.cream};
  margin: 20px auto;

  a {
    text-decoration: none;
    color: ${theme.colors.cream};
    border-bottom: 1px solid ${theme.colors.pink};
  }

  p {
    margin: 25px 0;
    line-height: 22px;
    white-space: normal;

    @media (max-width: ${theme.breakpoints.large}px) {
      text-align: left;
    }
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 90%;
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

export const iFrameWrapperClass = css`
  max-width: 953px;
`;

export const iFrameInnerClass = css`
  left: 0;
  width: 100%;
  height: 0;
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 43px;
  overflow: hidden;
`;

export const iFrameStyleClass = css`
  border: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const videoContainerClass = css`
  width: 80%;

  @media (max-width: ${theme.breakpoints.large}px) {
    margin-bottom: 40px;
    width: 100%;
  } 
`;


export const bonusVideoContainerClass = css`
  width: 80%;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
  } 
`;

export const descriptionClass = css`
  line-height: 22px;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
  } 
`;

export const containerClass = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0 40px 0;
  display: flex;
  flex-wrap: wrap;
  min-height: 60vh;
  align-items: center;

  @media (max-width: ${theme.breakpoints.large}px) {
    padding-top: 10px;
    padding-bottom: 0;
  }
`;

export const episodesContainerClass = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0 40px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: ${theme.breakpoints.large}px) {
    padding-top: 10px;
    padding-bottom: 0;
  }
`;

export const placeholderImageClass = css`
  margin-top: -43px;
`;

export const dateClass = css`
  font-sie: 16px;
  margin-bottom: 7px;
  text-transform: uppercase;
`;

export const countdownContainerClass = css`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.4);
  height: 105%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const countdownTextClass = css`
  width: 100%;
  font-size: 18px;
  line-height: 30px;
  bottom: 50%;
  text-align: center;
  text-transform: uppercase;
  color: ${theme.colors.cream};
`;

export const watchLinksClass = css`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0 60px 0;
  width: 90%;
  margin: 0 auto;
  max-width: 1200px;
  justify-content: center;
`;

export const sectionClass = css`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  color: ${theme.colors.cream};

  a {
    color: ${theme.colors.cream};
    padding: 10px 0;
    font-size: 20px;
  }

  p {
    color: ${theme.colors.cream};
    font-size: 20px;
    margin-top: 10px;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
  }

  :last-child {
    margin-bottom: 25px;
  }
`;

export const titleClass = css`
  font-family: 'Changa One';
  text-transform: uppercase;
  color: ${theme.colors.pink};
  letter-spacing: 1.5px;
  font-size: 35px;
`;

export const titleClassWithMargin= css`
font-family: 'Changa One';
text-transform: uppercase;
color: ${theme.colors.pink};
letter-spacing: 1.5px;
font-size: 35px;
margin-top: 50px;
`;

export const streamingLinks = css`
  display: flex;
  justify-content: space-around;
  width: 300px;
  margin: 0 auto;
`;

export const screeningClass = css`
  width: 60%;
  margin: 0 auto;
  color: ${theme.colors.cream};

  img {
    max-width: 300px;
  }

  p {
    margin-top: 10px;
  }
`;

export const buttonGroupClass = css`
  display: flex;
  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    justify-content: center;

  }

  a {
    margin: 0 auto;
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
  margin-top: 10px;
  cursor: pointer;
`;

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
  @media (max-width: ${theme.breakpoints.large}px) {
    top: 75px;
  }
`;
