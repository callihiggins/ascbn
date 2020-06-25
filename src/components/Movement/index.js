import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Query } from 'react-contentful';
import Iframe from 'react-iframe'
import Form from './Form';
import organizerImage from '../../assets/images/OrganizerinAllofUs.png';
import voteImage from '../../assets/images/vote.png';
import Nav from '../shared/Nav';
import * as styles from './styles';

export const Movement = () => 
  <Query contentType="organizerText">
    {({data}) => {
      const text = data?.items[0]?.fields?.description;
      const virtualScreeningText = data?.items[0]?.fields?.screeningText;
      const voteText = data?.items[0]?.fields?.voteText;
      return (
        <div css={styles.containerClass}>
          <Nav active="movement"></Nav>
          <div css={styles.organizerContainerClass} >
            <div css={[styles.centerClass, styles.halfClass]}>
              <img src={organizerImage} alt="There's an organizer in all of us" css={styles.organizerImageClass}/>
            </div>
            <div css={styles.halfClass}>
              {documentToReactComponents(text)}
            </div>
          </div>
          <div css={styles.hostingBannerClass} id="screening">Join the Action Squad</div>
          <div css={styles.screeningTextClass}>{documentToReactComponents(virtualScreeningText)}</div>
          < Form />
          <div css={styles.votingBannerClass}>VOTE</div>
          <div css={styles.voteBlockClass}>
            <div css={styles.voteImageBlockClass}>
              <img src={voteImage} alt="Vote" css={styles.voteImageClass} />
            </div>
            <div css={styles.voteTextBlockClass}>
              {/* {voteText} */}
              <Iframe url="https://register.rockthevote.com/registrants/new?partner=38527&preview_custom_assets="
                width="100%"
                height="100%"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
              />
            </div>
          </div>
        </div>
      )
    }}
  </Query>

export default Movement;
