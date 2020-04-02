import { css } from '@emotion/core';
import styled from 'styled-components';
import { default as theme } from '../../theme';

export const SectionTitle = styled.div`
  position: fixed;
  left: 20px;
  top:  47vh;
  color: #FFFFFF;
  text-transform: uppercase;
  font-size: 50px;
  font-family: "proxima-nova-extra-condensed";
  font-weight: 700;
  opacity: ${props => props.isInView ? '1' : '0'};
  transition: opacity 100ms;
`;

export const peopleContainerClass = css`
  width: calc(60% - 305px);
  display: inline-flex;
  justify-content: space-around;
  margin: 95px 40px 40px 305px;
  flex-wrap: wrap;
  height: calc(100vh - 140px);
  vertical-align: top;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: calc(100% - 30px);
    margin: 0 15px;
    display: block;
    padding-top: 60px;
    height: auto;
  }
`;



export const PersonContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: calc(25vh - 55px);
  cursor: pointer;
  background-color: #FFFFFF;
  color: ${theme.colors.red};
  font-size: 18px;
  width: 75%;
  display: flex;

  ${({ dimMe }) => dimMe && `
    color: #ccc;
  `};

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    height: auto;
    min-height: 0;
    border-bottom: 1px solid ${theme.colors.red};
    align-items: center;
    padding: 20px 0;
    ${({ dimMe }) => dimMe && `
      color: ${theme.colors.red};
    `};
  }
`;

export const bioContainerClass = css`
  width: 30%;
  display: inline-flex;
  flex-direction: column;
  margin-top: 95px;
  max-height: calc(100vh - 95px);
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.large}px) {
    display: none;
  }
`;

export const Bio = styled.div`
  line-height: 22px;
  font-size: 15px;
  height: auto;
  text-align: left;
  max-height: calc(100vh - 325px);
  overflow-y: scroll;
  padding-right: 17px;
  box-sizing: content-box;
  width: 100%;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 200ms;
    color: ${theme.colors.grey};
  }
`;

export const headshotImageClass = css`
  width: 150px;
  height: auto;
  margin: 0 auto 40px auto;

  @media (max-width: ${theme.breakpoints.large}px) {
    margin-bottom: 20px;
  }

`;

export const PersonName = styled.div`
  font-size: 6vh;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1vh;
  @media (max-width: ${theme.breakpoints.large}px) {
    font-size: 16px;
  }
`;

export const PersonTitle = styled.div`
  font-style: italic;
  font-size: 3vh;
  text-transform: uppercase;
  @media (max-width: ${theme.breakpoints.large}px) {
    font-size: 16px;
  }
`;

export const plusIconClass = css`
  color: ${theme.colors.grey};
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  margin: 10px 0;

  svg {
    margin-left: 5px;
    font-size: 12px;
  }
`;