import React from 'react';
import { withTheme } from 'styled-components';
// import aboutImage from '../../assets/aboutImage.png';
import { ReactComponent as RightArrow } from '../../assets/rightArrow.svg';
// import * as styles from './styles';
import * as sharedstyles from './../shared/styles';
import { RightArrowContainer, SectionTitle } from './../shared/styles';
import Page from '../shared/Page';


const About = props => {
  return (
    <Page name="about" backgroundColor={props.theme.default.colors.red} updateActive={props.updateActive}>
      <RightArrowContainer css={sharedstyles.hideMobile} isInView={props.isInView}> 
        <RightArrow css={sharedstyles.arrowClass} />
      </RightArrowContainer>
      <SectionTitle css={sharedstyles.hideMobile} isInView={props.isInView}>About</SectionTitle>
      <div css={sharedstyles.textContainerClass}>
        <p css={sharedstyles.textBlockClass}>
          In a polarized America, where the dual forces of white supremacy and patriarchy threaten to further erode our democracy, a game-changing transformation is happening at the grassroots.
          As demographics shift toward a non-white majority, elections will be decided by Americans inspired to vote for the first time. Many of these voters, who are often poor, and largely immigrant, are ignored by politicians and journalists alike.          
          But a <span css={sharedstyles.highlightClass}>defiant</span> group of <span css={sharedstyles.highlightClass}>women of color</span>—as candidates and organizers—are harnessing the political power of this <span css={sharedstyles.highlightClass}>New American Majority</span>.
        </p>
        <p css={sharedstyles.textBlockClass}>
        <span css={sharedstyles.highlightClass}>And She Could Be Next</span>, POV’s first broadcast miniseries, asks whether democracy itself can be preserved—and made stronger—by those most marginalized.
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

export default withTheme(About);