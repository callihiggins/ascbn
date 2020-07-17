import React from 'react';
import Form from './Form';
import * as styles from  './styles';
import * as sharedstyles from  '../styles';
import { default as theme } from '../../../theme';



const Newsletter = props => (
  <div css={styles.containerClass}>
    <div
      css={styles.signupContainerClass}
    > 
      <div css={styles.titleClass}>Join our Action Squad</div>
      <a href="/movement" css={styles.buttonClass}>Learn More</a>
    </div>
  </div>
)

export default Newsletter;