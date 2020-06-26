import React from 'react';
import { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../../assets/images/ASCBN-TITLE-HORIZONTAL-LIGHT-TRANSPARENT.png';
import * as styles from  './styles';
import * as sharedstyles from  '../../shared/styles';
import { NavUl, NavItem, NavEl, HeaderContainer } from './styles';


const Nav = props => {
	return (
    <HeaderContainer>
      <div css={styles.logoContainerClass}>
        <a href="/">
          <img src={logo} alt="and she could be next" css={styles.logoClass}/>
        </a>
      </div>
      <NavEl>
        <NavUl >
          <NavItem active={props.active === 'about'}>
            <a href="/about">About</a>
          </NavItem>
          <NavItem active={props.active === 'watch'}>
            <a href="/watch">How to Watch</a>
          </NavItem>
          <NavItem active={props.active === 'movement'}>
            <a href="/movement">Join the Movement</a>
          </NavItem>
          <NavItem active={props.active === 'events'}>
            <a href="/events">Events</a>
          </NavItem>
          <NavItem active={props.active === 'store'}>
            <a href="/store">Store</a>
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