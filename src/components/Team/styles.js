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
  width: calc(100% - 300px);
  margin-left: 300px;
  padding-top: 60px;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: calc(100% - 30px);
    margin: 0 15px;
  }
`;

export const personContainerClass = css`
  display: flex;
  min-height: calc(50vh - 140px);
  width: 95%;
  align-items: space-around;
  border-bottom: 1px solid ${theme.colors.red};
  padding: 40px 0;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    flex-direction: column;
    min-height: 0;

  }
`;

export const columnClass = css`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
  }
`;

export const Bio = styled.div`
  width: 70%;
  line-height: 22px;
  font-size: 15px;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    overflow: hidden;
    max-height: 0;
    transition: max-height 200ms;
  }
`;

export const headshotClass = css`
  width: 150px;
  margin-bottom: 20px;
`;

export const nameClass = css`
  color: ${theme.colors.grey};
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const titleClass = css`
  font-style: italic;
  font-size: 14px;
  text-transform: uppercase;
`;

export const plusIconClass = css`
  color: ${theme.colors.red};
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