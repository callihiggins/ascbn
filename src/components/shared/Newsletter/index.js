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
      <a href="https://www.bymaskormail.org/?utm_source=ascbn&utm_medium=direct&utm_campaign=maskormail" css={styles.buttonClass}>Make a Vote Plan</a>
    </div>
  </div>
)

export default Newsletter;