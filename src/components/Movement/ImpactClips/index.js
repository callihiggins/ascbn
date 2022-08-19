import React from 'react';
import hostScreeningImage from '../../../assets/images/impactClips.png';
import { HalfSection } from './styles';
import { default as theme } from '../../../theme';
import * as styles from './styles';
import * as sharedstyles from  '../../shared/styles';

export const ImpactClips = () => 
  <div >
    <div css={styles.impactBannerClass} id="newsletter">USE OUR IMPACT CLIPS</div>
    <div css={styles.containerClass}>
      <HalfSection css={sharedstyles.hideMobile}>
        <img src={hostScreeningImage} alt="Use Our Impact Clips" />
      </HalfSection>
      <HalfSection backgroundColor={theme.colors.navy}>
      <div css={styles.textContainerClass}>
        <div css={[sharedstyles.hideDesktop, styles.mobileImageContainerClass]}>
          <img src={hostScreeningImage} alt="Host a Screening" />
        </div>
        <p>We welcome you to use our free library of clips in your own organizing, trainings, community building, and education work around elections. Request access using the form below!.</p>
        <div css={styles.buttonGroupClass}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScTVojSHuqwZc1XY6V-ywlWttKWMyS2NFvJxo6Q_xA_uoRMIQ/viewform" target="_blank"><button css={styles.buttonClass}>Use Our Impact Clips</button></a>
        </div>
      </div>
      </HalfSection>      
    </div>
  </div>
     

export default ImpactClips;
