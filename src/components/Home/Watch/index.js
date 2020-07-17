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
  <Page updateActive={props.updateActive} name="watch">
    <div css={styles.containerClass}>
      <HalfSection backgroundColor={theme.colors.navy}>
      <div css={styles.textContainerClass}>
        <div css={[sharedstyles.hideDesktop, styles.mobileImageContainerClass]}>
          <img src={hostScreeningImage} alt="Host a Screening" />
        </div>
        <p>Sign up to host a screening or discussion of And She Could Be Next for your friends, neighbors, or community! After signing up, our team will follow-up to share resources and details with you on how to make it happen or help you spread the word. <br /><br />Questions? Email <a href="mailto:stepintopower@andshecouldbenext.com">stepintopower@andshecouldbenext.com</a>.</p>
        <div css={styles.buttonGroupClass}>
          <a href="https://airtable.com/shrPwxSFaSKYrKPq5"><button css={styles.buttonClass}>Sign Up</button></a>
        </div>
      </div>
      </HalfSection>      
      <HalfSection css={sharedstyles.hideMobile}>
        <img src={hostScreeningImage} alt="Host a Screening" />
      </HalfSection>
    </div>
  </Page>
)

export default Watch;