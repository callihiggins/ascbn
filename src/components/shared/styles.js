import { css } from '@emotion/core';
import { default as theme } from '../../theme';
import styled from 'styled-components';

export const textContainerClass = css`
  width: 50%;
  margin: 80px auto 0 200px;
  display: flex;
  height: calc(100vh - 80px);
  justify-content: center;
  flex-direction: column;
`;

export const textBlockClass = css`
  color: white;
  font-size: 23px;
  font-weight: 700;
  line-height: 28px;
  margin: 20px 0;
`;

export const highlightClass = css`
  color: ${theme.colors.lightBlue};
`;

export const RightArrowContainer = styled.div`
  opacity: ${props => props.isInView ? '1' : '0'};
  transition: opacity 100ms;
  pointer-events: none;
  top: 0;
  right: 0;
  position: fixed;
`

export const SectionTitle = styled.div`
  position: fixed;
  right: ${props  => !props.left ? '50px' : 'auto'};
  left: ${props  => props.left ? '50px' : 'auto'};
  top: 45vh;
  color: ${props  => props.color ? props.color : `${theme.colors.red}`};
  text-transform: uppercase;
  font-size: 50px;
  font-family: proxima-nova-extra-condensed;
  font-weight: 700;
  opacity: ${props => props.isInView ? '1' : '0'};
  transition: opacity 100ms;
`;

export const arrowClass = css`
  height: 98vh;
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