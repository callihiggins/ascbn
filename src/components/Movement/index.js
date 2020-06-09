import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Query } from 'react-contentful';
import Form from './Form';
import organizerImage from '../../assets/images/OrganizerinAllofUs.png';
import voteImage from '../../assets/images/vote.jpg';
import Nav from '../shared/Nav';
import * as styles from './styles';

const Movement = () => {
  return (
    <Query contentType="organizerText">
      {({data}) => {
        
        const text = data?.items[0]?.fields?.description;
        const virtualScreeningText = data?.items[0]?.fields?.screeningText;
        const voteText = data?.items[0]?.fields?.voteText;
        return (
          <div css={styles.containerClass}>
            <Nav></Nav>
            <div css={styles.organizerContainerClass} >
              <div css={[styles.centerClass, styles.halfClass]}>
                <img src={organizerImage} alt="There's an organizer in all of us" css={styles.organizerImageClass}/>
              </div>
              <div css={styles.halfClass}>
                {documentToReactComponents(text)}
              </div>
            </div>
            <div css={styles.hostingBannerClass}>Host a Virtual Screening</div>
            <div css={styles.screeningTextClass}>{documentToReactComponents(virtualScreeningText)}</div>
            < Form />
            <div css={styles.votingBannerClass}>VOTE</div>
            <div css={styles.voteBlockClass}>
              <div css={styles.halfClass}>
                <img src={voteImage} alt="Vote" css={styles.voteImageClass} />
              </div>
              <div css={[styles.halfClass, styles.voteTextBlockClass]}>
                {documentToReactComponents(voteText)}
                <a href="https://www.usa.gov/register-to-vote" target="_blank">
                  <button css={styles.voteButtonClass}>Register to Vote</button>
                </a>
              </div>
            </div>
          </div>
        )
      }}
    </Query>
  )
}

export default Movement;
