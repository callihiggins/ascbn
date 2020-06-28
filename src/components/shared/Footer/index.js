import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../../assets/images/ASCBN-TITLE-SQUARE-LIGHT-TRANSPARENT.png';
import * as styles from  './styles';
import * as sharedstyles from  '../styles';
import { default as theme } from '../../../theme';

const Footer = props => (
  <div css={styles.containerClass}>
    <div css={styles.horizontalLineClass} />
    <div css={styles.bottomContainerClass}>
      <div css={styles.leftSideClass}>
        <img src={logo} css={styles.logoClass} alt="And she could be next"/>
        <div css={sharedstyles.hideMobile}>&copy; And She Could Be Next 2020</div>
      </div>
      <div css={styles.rightSideClass}>
        Follow us:
        <div css={styles.socialMediaIconsClass}>
          <a href="https://www.youtube.com/channel/UC2yVbXsWPtmAmOd7gUHa7_g/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
          <a href="https://www.facebook.com/andshecouldbenext/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
          <a href="https://twitter.com/shecouldbenext" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
          <a href="https://www.instagram.com/andshecouldbenext/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
        </div>
        <a href="mailto:info@andshecouldbenext.com">info@andshecouldbenext.com</a>
      </div>
    </div>
  </div>
)

export default Footer;