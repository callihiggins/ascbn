import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import IframeResizer from 'iframe-resizer-react'
import voteImage from '../../../assets/images/vote.png';
import * as styles from './styles';

export const Vote = ({voteText}) => 
  <div id="vote">
    <div css={styles.votingBannerClass}>VOTE</div>
    <div css={styles.voteBlockClass}>
      <div css={styles.voteImageBlockClass}>
        <img src={voteImage} alt="Vote" css={styles.voteImageClass} />
      </div>
      <div css={[styles.halfClass, styles.voteTextBlockClass]}>
      <IframeResizer
          log
          src="https://register.rockthevote.com/registrants/new?partner=38527"
          style={{ width: '1px', minWidth: '100%'}}
        />
      </div>
    </div>
  </div>
     

export default Vote;
