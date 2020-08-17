import React, { useState } from 'react';
import { withTheme } from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MobileNav from './MobileNav';
import * as styles from  './styles';
import * as sharedstyles from  '../../../shared/styles';
import { NavUl, NavItem, NavEl, HeaderContainer } from './styles';

const scrollIntoView = el => {
  setTimeout(() => {
    el.scrollIntoView({ behavior: 'smooth' });
   }, 500);
}


const Nav = props => {
  const [showAbout, setShowAbout] = useState(false);
  const [showMovement, setshowMovement] = useState(false);
	return (
    <>
      <HeaderContainer>
        <div css={styles.emptySpacerClass}/>
        <NavEl>
          <NavUl onMouseEnter={() => setShowAbout(true)} onMouseLeave={() => setShowAbout(false)}>
            <NavItem active={props.active === 'about'} >
              <a href="/about">About</a>
            </NavItem>
            {showAbout && (
              <>
                <li>
                  <Link to="/about#filmmakers" scroll={el => scrollIntoView(el)}>Meet the Team</Link>
                </li>
                <li>
                  <Link to="/about#pressHighlights" scroll={el => scrollIntoView(el)}>Press Highlights</Link>
                </li>
                <li>
                <Link to="/about#pressKit" scroll={el => {
                  setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }, 500);
                }}>
                  Press Kit
                </Link>
                </li>
              </>
            )}
          </NavUl>
          <NavUl >
            <NavItem active={props.active === 'watch'}>
              <a href="/watch">How to Watch</a>
            </NavItem>
          </NavUl>
          <NavUl onMouseEnter={() => setshowMovement(true)} onMouseLeave={() => setshowMovement(false)}>
            <NavItem active={props.active === 'movement'}>
              <a href="/movement">Join the Movement</a>
            </NavItem>
            {showMovement && (
              <>
                <li>
                  <Link to="/movement#screening" scroll={el => scrollIntoView(el)}>Host a Screening</Link>
                </li>
                <li>
                  <Link to="/movement#vote" scroll={el => scrollIntoView(el)}>Register to Vote</Link>
                </li>
                <li>
                  <Link to="/movement#politicalHome" scroll={el => scrollIntoView(el)}>Find Your Political Home</Link>
                </li>
                <li>
                  <Link to="/movement#voice" scroll={el => scrollIntoView(el)}>Speak Up</Link>
                </li>
              </>
            )}
          </NavUl>
          <NavUl>
            <NavItem active={props.active === 'events'}>
              <a href="/events">Events</a>
            </NavItem>
          </NavUl>
          <NavUl>
            <NavItem active={props.active === 'store'}>
              <a href="/store">Store</a>
            </NavItem>
          </NavUl>
        </NavEl>
        <div css={[styles.socialMediaIconsClass, sharedstyles.hideMobile]}>
          <a href="https://www.youtube.com/channel/UC2yVbXsWPtmAmOd7gUHa7_g/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
          <a href="https://www.facebook.com/andshecouldbenext/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
          <a href="https://twitter.com/shecouldbenext" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
          <a href="https://www.instagram.com/andshecouldbenext/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
        </div>
      </HeaderContainer>
      <MobileNav active={props.active}/>
    </>
  )}

Nav.defaultProps = {
  activeLink: 'trailer',
  fadeIn: false,
}

export default withTheme(Nav);