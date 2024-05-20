import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import * as styles from  './styles';
import * as sharedstyles from  '../../shared/styles';
import Page from '../../shared/Page';
import hostScreeningImage from '../../../assets/images/hostscreening.png';
import { HalfSection } from './styles';
import { default as theme } from '../../../theme';



const Watch = props => (
  <Page shallowZIndex={props.shallowZIndex} updateActive={props.updateActive} name="watch">
    <div css={styles.containerClass} id="screening">
      <HalfSection backgroundColor={theme.colors.navy}>
      <div css={styles.textContainerClass}>
        <div css={[sharedstyles.hideDesktop, styles.mobileImageContainerClass]}>
          <img src={hostScreeningImage} alt="Host a Screening" />
        </div>
        <p>Drop up an email to sign up to host a screening or discussion of And She Could Be Next for your friends, neighbors, or community! Our team will follow-up to share resources and details with you on how to make it happen or help you spread the word. <br /><br /> Email <a href="mailto:info@andshecouldbenext.com">info@andshecouldbenext.com</a>.</p>   
      </div>
      </HalfSection>      
      <HalfSection css={sharedstyles.hideMobile}>
        <img src={hostScreeningImage} alt="Host a Screening" />
      </HalfSection>
    </div>
  </Page>
)

export default Watch;