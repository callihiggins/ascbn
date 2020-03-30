import React from 'react';
import aboutImage from '../../assets/aboutImage.png';
import { ReactComponent as RightArrow } from '../../assets/rightArrow.svg';
// import * as styles from './styles';
import * as sharedstyles from './../shared/styles';
import { RightArrowContainer, SectionTitle } from './../shared/styles';
import Page from '../shared/Page';


const About = props => {
  return (
    <Page name="about" backgroundImage={aboutImage} updateActive={props.updateActive}>
      <RightArrowContainer isInView={props.isInView}> 
        <RightArrow css={sharedstyles.arrowClass} />
      </RightArrowContainer>
      <SectionTitle isInView={props.isInView}>About</SectionTitle>
      <div css={sharedstyles.textContainerClass}>
        <p css={sharedstyles.textBlockClass}>
          <em>And She Could Be Next</em>, POV’s first broadcast miniseries, asks whether democracy itself can be preserved—and made stronger—by those most marginalized.
        </p>
        <p css={sharedstyles.textBlockClass}>
          Filmed throughout 2018 and into 2019, by a team of women filmmakers of color, the two-night special features dynamic slate of history-makers including: Stacey Abrams (GA), Rashida Tlaib (MI), Lucy McBath (GA), Veronica Escobar (TX), Maria Elena Durazo (CA), and Bushra Amiwala (IL).
        </p>
        <p css={sharedstyles.textBlockClass}>
          The docuseries premieres June 29-30 2020 on POV as part of PBS’ Female Trailblazers programming pillar, celebrating 100 years of women’s suffrage. 
        </p>
      </div>
    </Page>
  )
}

export default About;