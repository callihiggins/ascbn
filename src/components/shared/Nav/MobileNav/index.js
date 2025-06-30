import React, { useState } from 'react';
import { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { slide as MobileMenu } from 'react-burger-menu'
import logo from '../../../../assets/images/ASCBN-TITLE-HORIZONTAL-LIGHT-TRANSPARENT.png';
import * as styles from  './styles';
import * as sharedstyles from  '../../../shared/styles';
import { NavItem } from './styles';
import hamburger from '../../../../assets/images/hamburger.svg';
import './menuStyle.scss';

const Nav = props => {
  const [open, setState] = useState(false);

  const closeMenu = () => {
    setState(false);
  };

	return (
    <div css={[sharedstyles.hideDesktop, styles.navClass]}>
      <a href="/">
        <img src={logo} alt="and she could be next" css={styles.logoClass}/>
      </a>
      <MobileMenu isOpen={open} customBurgerIcon={ <img src={hamburger} /> } right width={ '70%' } >
        <nav>
          <ul >
            <NavItem onClick={closeMenu} active={props.active === 'about'}>
              <a href="/about">About</a>
            </NavItem>
            <NavItem onClick={closeMenu} active={props.active === 'watch'}>
              <a href="/watch">How to Watch</a>
            </NavItem>
            <NavItem onClick={closeMenu} active={props.active === 'movement'}>
              <a href="/movement">Join the Movement</a>
            </NavItem>
          </ul>
        </nav>
        <div css={styles.socialMediaIconsClass}>
          <a href=" https://www.youtube.com/channel/UC2yVbXsWPtmAmOd7gUHa7_g/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
          <a href="https://www.facebook.com/andshecouldbenext/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
          <a href="https://www.instagram.com/andshecouldbenext/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
        </div>
      </MobileMenu>
      
    </div>
  )}

Nav.defaultProps = {
  activeLink: 'trailer',
  fadeIn: false,
}

export default withTheme(Nav);