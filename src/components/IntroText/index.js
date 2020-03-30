import React from 'react';
import { withTheme } from 'styled-components';
// import * as styles from './styles';
import * as sharedstyles from './../shared/styles';
import Page from '../shared/Page';

const IntroText = props => {
  const theme =  props.theme.default;
  return (
    <Page backgroundColor={theme.colors.red} updateActive={props.updateActive} name="introText">
        <div css={sharedstyles.textContainerClass}>
          <div css={sharedstyles.textBlockClass}>
            In a polarized America, where the dual forces of white supremacy and patriarchy threaten to further erode our democracy, a game-changing transformation is happening at the grassroots.
          </div>
          <div css={sharedstyles.textBlockClass}>
            As demographics shift toward a non-white majority, elections will be decided by Americans inspired to vote for the first time. Many of these voters, who are often poor, and largely immigrant, are ignored by politicians and journalists alike. 
          </div>
          <div css={sharedstyles.textBlockClass}>
            But a <span css={sharedstyles.highlightClass}>defiant</span> group of <span css={sharedstyles.highlightClass}>women of color</span>—as candidates and organizers—are harnessing the political power of this <span css={sharedstyles.highlightClass}>New American Majority</span>.
          </div>
        </div>
    </Page>
  )
}

export default withTheme(IntroText);