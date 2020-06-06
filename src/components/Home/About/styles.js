import { css } from '@emotion/core';
import { default as theme } from '../../../theme';
import styled from 'styled-components';

export const containerClass = css`
  display: flex;
  height: 100vh;
`;

export const HalfSection = styled.div`
  background-color: ${props => props.backgroundColor || theme.colors.cream};
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }

`;