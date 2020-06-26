import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Query } from 'react-contentful';
import Form from './Form';
import Vote from './Vote';
import Voice from './Voice';
import Political from './Political';
import organizerImage from '../../assets/images/OrganizerinAllofUs.png';
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
          <Vote voteText={voteText}/>
          <Political />
          <Voice />
      </div>
      )
    }}
  </Query>

export default Movement;
