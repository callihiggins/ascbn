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
      <a href="https://airtable.com/shrPwxSFaSKYrKPq5" target="_blank" css={styles.buttonClass}>Host a Screening</a>
    </div>
  </div>
)

export default Newsletter;