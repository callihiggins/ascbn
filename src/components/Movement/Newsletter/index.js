import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Form from './Form';
import voteImage from '../../../assets/images/vote.png';
import PPGlogo from '../../../assets/images/PPGlogo.png';
import * as styles from './styles';

export const Newsletter = ({voteText}) => 
  <div >
    <div css={styles.newsletterBannerClass}>NEWSLETTER</div>
    <div css={styles.newsletterBlockClass}>
      <div css={styles.newsletterImageBlockClass}>
        <img src={voteImage} alt="Vote" css={styles.newsletterImageClass} />
      </div>
      <div css={[styles.halfClass, styles.newsletterTextBlockClass]}>
        <div>
          <div css={styles.headerClass}>Sign up for our Newsletter</div>
        </div>
        <Form />
      </div>
    </div>
  </div>
     

export default Newsletter;
