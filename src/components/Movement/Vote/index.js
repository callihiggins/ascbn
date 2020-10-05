import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import voteImage from '../../../assets/images/vote.png';
import PPGlogo from '../../../assets/images/PPGlogo.png';
import * as styles from './styles';

export const Vote = ({voteText}) => 
  <div id="vote">
    <div css={styles.votingBannerClass}>VOTE</div>
    <div css={styles.voteBlockClass}>
      <div css={styles.voteImageBlockClass}>
        <img src={voteImage} alt="Vote" css={styles.voteImageClass} />
      </div>
      <div css={[styles.halfClass, styles.voteTextBlockClass]}>
        <div>
          <div css={styles.votePlanClass}>Make a Vote Plan</div>
          <div css={styles.votePlanSubClass}>Know when, where and how you’ll cast your ballot this fall.</div>
        </div>
        <div css={styles.buttonGroupClass}>
          <div css={styles.votePlanButtonClass}>
            <a href="https://www.bymaskormail.org/?utm_source=ascbn&utm_medium=direct&utm_campaign=maskormail" target="_blank">Make Your Vote Plan</a>
            <div css={styles.poweredByClass}>Powered by Culture Surge</div>
          </div>
          <a href="https://www.aclu.org/know-your-rights/voting-rights/" target="_blank" >Know Your Voting Rights</a>
          <a href="https://866ourvote.org/" target="_blank" >Protect Your Vote</a>
        </div>
        <div css={styles.questionsBlockClass}>
            <p>Have a question about how to vote in your state? Are you experiencing difficulties voting in person? Call the free Election Protection hotline to talk to an expert who can help you.</p>
            <p><strong>English: 1-866-OUR VOTE | Spanish: 1-888-VE-Y-VOTA | Arabic: 1-844-YALLA-US</strong></p>
            <p>For Bengali, Cantonese, Hindi, Urdu, Korean, Mandarin, Tagalog, or Vietnamese: 1-888-274-8683</p>
        </div>
      </div>
    </div>
  </div>
     

export default Vote;
