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
  width: calc(100% - 315px);
  display: inline-flex;
  justify-content: space-around;
  margin: 55px 20px 20px 295px;
  flex-wrap: wrap;
  height: calc(100vh - 110px);
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
  align-items: center;
  height: calc(50vh - 55px);
  cursor: pointer;
  background-color: #FFFFFF;
  color: ${theme.colors.red};
  font-size: 18px;
  width: 50%;
  display: flex;
  transition: color 500ms;
  overflow-y: hidden;

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

export const BioContainer = styled.div`
  width: calc(100% - 30px);
  transition: max-height 500ms;
  max-height: 0; 
  overflow-y: scroll;

  @media (max-width: ${theme.breakpoints.large}px) {
    display: none;
  }

    /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #ccc;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.red};
    height: 10px;
  }
`;

export const Bio = styled.div`
  line-height: 22px;
  font-size: 15px;
  height: auto;
  text-align: left;
  padding: 15px;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 500ms;
    color: ${theme.colors.grey};
    padding: 0;
  }
`;

export const headshotImageClass = css`
  width: 30%;
  height: auto;
  float: right;
  margin: 10px 20px;

  @media (max-width: ${theme.breakpoints.large}px) {
    margin: 0 auto 20px auto;
    clear: right;
    width: 150px;
  }

`;

export const PersonName = styled.div`
  font-size: 6vh;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1vh;
  text-align: center;
  margin-top: 20px;
  @media (max-width: ${theme.breakpoints.large}px) {
    font-size: 16px;
    margin-top: 0;
  }
  
`;

export const PersonTitle = styled.div`
  font-style: italic;
  font-size: 3vh;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;

  @media (max-width: ${theme.breakpoints.large}px) {
    font-size: 16px;
    margin-bottom: 0;
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