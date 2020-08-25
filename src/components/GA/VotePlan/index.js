import React from 'react';
import * as styles from  './styles';
import * as sharedstyles from  '../styles';
import { default as theme } from '../../../theme';

const VotePlan = props => (
  <div css={styles.containerClass}>
    <div
      css={styles.signupContainerClass}
    > 
      <div css={styles.titleClass}>Make Your Vote Plan</div>
      <a href="https://peoplespowergrab.org/?o=ASCBN" target="_blank" css={styles.buttonClass}>Learn More</a>
    </div>
  </div>
)

export default VotePlan;