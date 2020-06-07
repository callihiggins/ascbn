import React from 'react';
import EmailSignup from './emailSignup';
import * as styles from  './styles';
import * as sharedstyles from  '../styles';
import { default as theme } from '../../../theme';



const Newsletter = props => (
  <div css={styles.containerClass}>
   < EmailSignup />
  </div>
)

export default Newsletter;