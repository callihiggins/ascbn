import { css } from '@emotion/core';
import styled from 'styled-components';
import { default as theme } from '../../theme';

export const rightArrowClass = css`
  position: absolute;
  right: 0;
  height: 100vh;
`;

export const RightArrowContainer = styled.div`
  opacity: ${props => props.isInView ? '1' : '0'};
  transition: opacity 100ms;
  pointer-events: none;
`

export const SectionTitle = styled.div`
  position: absolute;
  right: 50px;
  top: 45vh;
  color: ${theme.colors.red};
  text-transform: uppercase;
  font-size: 50px;
  font-family: proxima-nova-extra-condensed;
  font-weight: 700;
  opacity: ${props => props.isInView ? '1' : '0'};
  transition: opacity 100ms;
`;

export const textContainerClass = css`
  color: white;
  width: 60%;
  margin-left: 80px;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  top: 35vh;
  position: relative;
  height: 60vh;
`;

export const textItemClass = css`
  margin-bottom: 20px;
`;

