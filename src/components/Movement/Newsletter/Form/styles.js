import { css } from '@emotion/core';
import { default as theme } from '../../../../theme';
import styled from 'styled-components';

export const inputsClass = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const formClass = css`
  padding: 40px;
  padding-top: 20px;
`;

export const InputGroup = styled.div`
  display: flex-inline;
  flex-direction: column;
  flex-basis: ${props => props.type === 'email' ?  '100%' : '40%'};
  input {
    border-color: ${props => props.hasError ?  theme.colors.pink : theme.colors.cream};
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    flex-basis: 100%;
  }
 
`;

export const labelClass = css`
  color: ${theme.colors.cream};
`;

export const inputItemClass = css`
  background: ${theme.colors.navy};
  color: #004564;
  display: block;
  border: 1px solid ${theme.colors.cream};
  font-size: 15px;
  font-weight: 700;
  height: 30px;
  margin: 15px 0;
  width: calc(100% - 20px);
  padding: 5px 10px;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: calc(100%  - 50px);
  }
`;

export const spinClass = css`
  color: ${theme.colors.cream};
  font-size: 20px;
  margin-left: 15px;
  margin: 20px 0 40px 0;
  height: 40px;
`;

export const formButtonClass = css`
  background-color: ${theme.colors.cream};
  border-radius: 3px;
  color: ${theme.colors.navy};
  padding: 10px 15px;
  border-color: ${theme.colors.cream};
  font-size: 18px;
  text-transform: uppercase;
  border-style: none;
  font-weight: 900;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const requiredErrorClass = css`
  font-size: 10px;
  color: ${theme.colors.pink};
  font-weight: 700;
  margin-bottom: 20px;
`;
export const checkBoxLabelClass = css`
  font-size: 14px;
  color: ${theme.colors.cream};
  margin: 20px 0;
  display: block;
`;

export const checkBoxClass = css`
  margin-right: 10px;
`;

export const successClass = css`
  color: ${theme.colors.cream};
  margin: 20px 0 40px 0;
  height: 40px;
`;

export const errorClass = css`
  color: ${theme.colors.error};
  margin: 20px 0 40px 0;
  height: 40px;
`;

export const headerClass = css`
  font-family: 'Changa One';
  text-transform: uppercase;
  color: ${theme.colors.cream};
  letter-spacing: normal;
  font-size: 30px;
  letter-spacing: 1.5px;
  font-weight: 400;
  text-align: center;
  padding-top: 40px;
`;

export const closeButtonClass = css`
  position: absolute;
  right: 20px;
  top: 10px;
  color: ${theme.colors.cream};
  font-size: 20px;
  cursor: pointer;
`;