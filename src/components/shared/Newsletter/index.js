import React from 'react';
import * as styles from  './styles';
import * as sharedstyles from  '../styles';
import { default as theme } from '../../../theme';



const Newsletter = props => (
  <div css={styles.containerClass}>
    <div
      css={styles.signupContainerClass}
    > 
      {/* <div css={styles.titleClass}>#AllEyesOnGA</div> */}
      <a href="mailto:info@andshecouldbenext.com" css={styles.buttonClass}>Host a Screening</a>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScTVojSHuqwZc1XY6V-ywlWttKWMyS2NFvJxo6Q_xA_uoRMIQ/viewform" target="_blank" css={styles.buttonClass}>Use our Impact Clips</a>
    </div>
  </div>
)

export default Newsletter;