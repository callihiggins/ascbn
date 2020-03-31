import React from 'react';
import { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MobileNav from './mobileNav';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as HorizontalLogo } from '../../assets/logo_horizontal.svg';
import * as styles from  './styles';
import * as sharedstyles from  '../shared/styles';
import { NavUl, HeaderContainer, NavItem } from './styles';


const Nav = props => {
  const { fixedNav } = props;
	return (
    <>
      <HeaderContainer show={props.activeLink !== 'trailer'}>
        <nav>
          <NavUl fixedNav={fixedNav}v>
            {fixedNav && (
              <NavItem css={sharedstyles.hideMobile} fixedNav={fixedNav} active={props.activeLink=== 'trailer'}>
                <a href="#trailer">Trailer</a>
              </NavItem>
            )}
            <NavItem fixedNav={fixedNav} active={props.activeLink=== 'about' || props.activeLink === 'introText'}>
              <a href="#about">About</a>
            </NavItem>
            <NavItem fixedNav={fixedNav} active={props.activeLink=== 'team'}>
              <a href="#team">The Team</a>
            </NavItem>
            <NavItem fixedNav={fixedNav} active={props.activeLink=== 'movement'}>
              <a href="#movement">Join The Movement</a>
            </NavItem>
          </NavUl>
        </nav>
        {fixedNav && (
          <div css={sharedstyles.hideMobile}>
            <div css={styles.socialMediaIconsClass}>
                <a href="https://www.facebook.com/andshecouldbenext/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                <a href="https://twitter.com/shecouldbenext" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                <a href="https://www.instagram.com/andshecouldbenext/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
              </div>
              <a href="https://www.documentary.org/project/and-she-could-be-next" target="_blank" rel="noopener noreferrer" css={styles.donateButtonClass}>
                Donate
              </a>
          </div>
        )}
        {fixedNav && (
          <>
            <a href="#trailer" css={styles.logoClass}>
              <Logo css={sharedstyles.hideDesktop}/>
              <HorizontalLogo  css={sharedstyles.hideMobile}/>
            </a>
          </>
        )}
      </HeaderContainer>
      {/* {fixedNav && (
       <MobileNav name={props.activeLink}/>
      )} */}
    </>
  )}

Nav.defaultProps = {
  activeLink: 'trailer',
  fadeIn: false,
}

export default withTheme(Nav);