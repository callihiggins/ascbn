import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import IframeResizer from 'iframe-resizer-react'
import voteImage from '../../../assets/images/vote.png';
import * as styles from './styles';

export const Vote = ({voteText}) => 
  <>
    <div css={styles.votingBannerClass}>VOTE</div>
    <div css={styles.voteBlockClass}>
      <div css={styles.voteImageBlockClass}>
        <img src={voteImage} alt="Vote" css={styles.voteImageClass} />
      </div>
      <div css={[styles.halfClass, styles.voteTextBlockClass]}>
        {documentToReactComponents(voteText)}
        <a href="https://docs.google.com/document/d/1ZMS2BJufTVgTz31JvnRkSSdnF85dkQfIiBCE8u5tp7c/edit" target="_blank">
          <button css={styles.voteButtonClass}>Step into your power action plan</button>
        </a>
      </div>
      <div css={styles.voteReigstrationBlockClass}>
        <IframeResizer
          log
          src="https://register.rockthevote.com/registrants/new?partner=38527"
          style={{ width: '1px', minWidth: '100%'}}
        />
      </div>
    </div>
  </>
     

export default Vote;
