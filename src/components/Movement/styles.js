import { css } from '@emotion/core';
import { default as theme } from '../../theme';

export const pageContainerClass = css`
  height: calc(10vh - 125px);
  padding: 125px 40px 0 40px;
  position: relative;

  @media (max-width: ${theme.breakpoints.large}px) {
    padding: 100px 0 60px 0;
    margin: 0 15px 0 15px;
    height: auto;
  }
`;

export const ctaClass = css`
  font-size: 60px;
  color: #FFFFFF;
  font-family: "proxima-nova-extra-condensed";
  text-transform: uppercase;
  font-weight: 700;
  flex-basis: 90%;

  @media (max-width: ${theme.breakpoints.large}px) {
    font-size: 28px;
    flex-basis: 100%;
  }
`;

export const containerClass = css`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const aboutContainerClass = css`
  width: 45%;
  color: white;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  margin-right: 5%;
  margin-top: 20px;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    margin-bottom: 40px;
    margin-right: 0;
  }
`;

export const actionContainerClass = css`
 width: 30%;

 @media (max-width: ${theme.breakpoints.large}px) {
  width: 100%;
}
`;

export const textItemClass = css`
  margin-bottom: 20px;
`;

export const signupContainerClass = css`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-family: proxima-nova-condensed;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: .2em;
  max-width: 400px;
`;

export const inputItemClass = css`
  background: transparent;
  border: 1px solid white;
  width: 50%;
  padding: 7px 10px;
  margin-right: 10px;
  color: white;

  ::placeholder {
    color: white;
    font-weight: 700;
    text-transform: uppercase;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 60%;
  }
`;

export const shortInputItemClass = css`
  ${inputItemClass};
  width: 20%;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 20%;
  }
`;

export const buttonClass = css`
  background: white;
  color: ${theme.colors.grey};
  margin-top: 20px;
  border: 0;
  padding: 12px 15px 7px 15px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: proxima-nova-condensed;
`

export const socialHeaderClass = css`
  font-size: 24px;
  color: #FFFFFF;
  font-family: proxima-nova-extra-condensed;
  text-transform: uppercase;
  font-weight: 700;
  margin: 20px 0;
`;

export const socialMediaIconsClass = css`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

export const iconClass = css`
  color: white;
  font-size: 32px;
  font-weight: 700;
`;

export const emailLinkClass = css`
  font-size: 20px;
  font-weight: 500;
  color: white;
  text-decoration: none;
`;

export const spacerClass = css`
  height: 40px;
`;

export const emailMessageClass=css`
  color: ${theme.colors.grey};
  margin-top: 10px;
  background: white;
  padding: 20px;
  font-size: 14px;
  letter-spacing: normal;

  a {
    color: ${theme.colors.grey};
  }
`

export const spinClass = css`
  color: white;
  font-size: 18px;
  flex-basis: 100%;
  margin-top: 20px;
`;

export const thankyouClass = css`
  font-size: 18px;
  color: #FFFFFF;
  font-family: proxima-nova-extra-condensed;
  text-transform: uppercase;
  font-weight: 700;
  font-style: italic;
  margin: 20px 0 10px 0;
  letter-spacing: normal;
`;