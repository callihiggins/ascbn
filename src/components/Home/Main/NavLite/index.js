import React from 'react';
import { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { ReactComponent as Logo } from '../../assets/logo.svg';
// import { ReactComponent as HorizontalLogo } from '../../assets/logo_horizontal.svg';
import * as styles from  './styles';
import * as sharedstyles from  '../../../shared/styles';
import { NavUl, NavItem, NavEl, HeaderContainer } from './styles';


const Nav = props => {
	return (
    <HeaderContainer>
      <div css={styles.emptySpacerClass}/>
      <NavEl>
        <NavUl >
          <NavItem>
            <a href="/about">About</a>
          </NavItem>
          <NavItem>
            <a href="/team">How to Watch</a>
          </NavItem>
          <NavItem>
            <a href="/festivals">Join the Movement</a>
          </NavItem>
        </NavUl>
      </NavEl>
      <div css={[styles.socialMediaIconsClass, sharedstyles.hideMobile]}>
        <a href="https://www.facebook.com/andshecouldbenext/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
        <a href="https://twitter.com/shecouldbenext" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
        <a href="https://www.instagram.com/andshecouldbenext/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
      </div>
    </HeaderContainer>
  )}

Nav.defaultProps = {
  activeLink: 'trailer',
  fadeIn: false,
}

export default withTheme(Nav);