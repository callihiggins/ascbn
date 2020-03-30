import React from 'react';
import styled, { css } from 'styled-components';
import { useInView } from 'react-intersection-observer'

const PageComponent = styled.section`
  position: relative;
  width: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  padding: 0;
  height: 100vh;
  margin: 0 auto;
  background: ${props => props.backgroundColor ? props.backgroundColor : '#FFFFFF'};
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: scroll;
  z-index: ${props => props.shallowZIndex ? '1' : '100'};
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y proximity;

  ${props => props.backgroundImage && css`
    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 30, 0.7) ), url(${props => props.backgroundImage});
  `};
`;

const Page = props => {
  const [ref, inView] = useInView({
    threshold: .5,
  })

  if (inView) {
   props.updateActive(props.name)
  }

  return (
    <PageComponent id={props.name} ref={ref} {...props}>{props.children}</PageComponent>
  )
};
  

export default Page;

