import { css } from '@emotion/core';
import styled from 'styled-components';
import { default as theme } from '../../theme';

export const rightArrowClass = css`
  position: absolute;
  right: 0;
  height: 98vh;
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
  width: 50%;
  margin: 80px auto 0 200px;
  display: flex;
  height: calc(100vh - 80px);
  justify-content: center;
  flex-direction: column;
`;

export const textItemClass = css`
  color: white;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  margin: 20px 0;
`;

