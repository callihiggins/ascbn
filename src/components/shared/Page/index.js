import React from 'react';
import { default as theme } from '../../../theme';
import styled, { css } from 'styled-components';
import { useInView } from 'react-intersection-observer'

const PageComponent = styled.section`
  // position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  scroll-snap-coordinate: 50% 50%;
  padding: 0;
  height: 100vh;
  margin: 0 auto;
  background: ${props => props.backgroundColor};
  background-repeat: no-repeat;
  background-size: cover;
  z-index: ${props => props.shallowZIndex ? '1' : '100'};

  @media (max-width: ${theme.breakpoints.large}px) {
    height: auto;
    min-height: 100vh;
  } 



`;

const Page = props => {
  // const [ref, inView] = useInView({
  //   threshold: .5,
  // })

  // if (inView) {
  //  props.updateActive(props.name)
  // }

  return (
    <PageComponent id={props.name} {...props}>{props.children}</PageComponent>
  )
};
  

export default Page;

