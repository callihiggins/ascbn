import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from '@emotion/core';
import EmailSignup from './emailSignup'
import movementImage from '../../assets/movementImage.png';
import * as styles from './styles';
import * as sharedstyles from '../shared/styles';
import Page from '../shared/Page';

const Movement = props => {
  return (
    <Page name="movement" backgroundImage={movementImage} updateActive={props.updateActive}>
      <div css={styles.pageContainerClass}>
        <div css={styles.containerClass}>
          <div css={styles.ctaClass}>Join the movement</div>
          <div css={styles.aboutContainerClass}>
            <p css={styles.textItemClass}>
              While we have seen a rise in attention surrounding the work of organizers, for many, the work itself is still shrouded in mystery. And yet, we are all organizers in our everyday lives without realizing it: from the seasoned politico who’s a longtime canvasser or running for office for the first time, to the uninitiated civic rockstar who’s in charge of the company potluck, gathering friends together for a game night, or directing the chorus in their house of worship, you are in fact an organizer. 
            </p>
            <p css={styles.textItemClass}>
              Connect with us to learn more!
            </p>
          </div>
          <div css={styles.actionContainerClass}>
            <div css={styles.socialHeaderClass}>Sign Up for our Newsletter</div>
            <EmailSignup />
            <div css={styles.spacerClass} />
            <div css={styles.socialHeaderClass}>Connect on Social Media</div>
            <div css={styles.socialMediaIconsClass}>
              <a href="https://www.facebook.com/andshecouldbenext/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
              <a href="https://twitter.com/shecouldbenext" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
              <a href="https://www.instagram.com/andshecouldbenext/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
            </div>
            <div css={styles.spacerClass} />
            <div css={styles.socialHeaderClass}>Drop us a note</div>
            <a href="mailto:info@andshecouldbenext.com" css={styles.emailLinkClass}>
              info@andshecouldbenext.com
            </a>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Movement;