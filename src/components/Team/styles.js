import { css } from '@emotion/core';
import styled from 'styled-components';
import { default as theme } from '../../theme';

export const leftArrowClass = css`
  height: 96vh;
`;

export const LeftArrowContainer = styled.div`
  position: fixed;
  left: 0;
  height: 98vh;
  top: 2vh;
  opacity: ${props => props.isInView ? '1' : '0'};
  transition: opacity 100ms;
  pointer-events: none;
`;

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
`;

export const personContainerClass = css`
  display: flex;
  min-height: calc(50vh - 140px);
  width: 95%;
  align-items: space-around;
  border-bottom: 1px solid ${theme.colors.red};
  padding: 40px 0;
`;

export const columnClass = css`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const bioClass = css`
  width: 70%;
  line-height: 22px;
  font-size: 15px;
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