import { css } from '@emotion/core';
import { default as theme } from '../../theme';
import styled from 'styled-components';

export const textContainerClass = css`
  width: 70%;
  column-count: 2;
  column-gap: 40px;
  margin-left: 50px;
  padding-top: 150px;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: calc(100% - 30px);
    margin: 20px 15px;
    padding: 20px 0;
    column-count: auto;
  }
`;

export const textBlockClass = css`
  color: white;
  font-size: calc(100vh * 0.027);
  line-height: calc(100vh * .04);
  font-weight: 600;
  margin-bottom: 20px;
  @media (max-width: ${theme.breakpoints.large}px) {
    margin-top: 40px;
    font-size: 18px;
    line-height: 25px;
  }
    
`;

export const highlightClass = css`
  color: ${theme.colors.lightBlue};
  font-weight: 700;
`;

export const RightArrowContainer = styled.div`
  pointer-events: none;
  top: 0;
  right: 0;
  position: absolute;
  height: 100vh;
`

export const SectionTitle = styled.div`
  position: absolute;
  right: ${props  => !props.left ? '50px' : 'auto'};
  left: ${props  => props.left ? '50px' : 'auto'};
  top: 45vh;
  color: ${props  => props.color ? props.color : `${theme.colors.red}`};
  text-transform: uppercase;
  font-size: 50px;
  font-family: proxima-nova-extra-condensed;
  font-weight: 700;
`;

export const stickyClass = css`
  position: sticky;
  top: 0;
  height: 0;
  overflow: visible;
  width: 300px;
`;

export const arrowClass = css`
  height: 100vh;
`;

export const LeftArrowContainer = styled.div`
  position: absolute;
  top: 0;
  height: 98vh;
`;

export const hideDesktop = css`
  display: none;
  @media (max-width: ${theme.breakpoints.large}px) {
    display: block;
  }
`;

export const hideMobile = css`
  @media (max-width: ${theme.breakpoints.large}px) {
    display: none;
  }
`;