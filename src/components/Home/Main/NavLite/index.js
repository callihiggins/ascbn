import React, { useState } from 'react';
import Modal from 'react-modal';
import { withTheme } from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MobileNav from './MobileNav';
import Form from '../../../shared/Nav/Form';
import * as styles from  './styles';
import * as sharedstyles from  '../../../shared/styles';
import { NavUl, NavItem, NavEl, HeaderContainer, StyledModal } from './styles';

const scrollIntoView = el => {
  setTimeout(() => {
    el.scrollIntoView({ behavior: 'smooth' });
   }, 500);
}


const Nav = props => {
  const [showAbout, setShowAbout] = useState(false);
  const [showMovement, setshowMovement] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  Modal.setAppElement('#root')
  
  function openModal() {
    console.log('open')
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }
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
              <div css={styles.movementDropdownClass}>
                <li css={styles.wideLiClass}>
                  <Link to="/movement#impactclips" scroll={el => scrollIntoView(el)}>Use Our Impact Clips</Link>
                </li>
                <li css={styles.wideLiClass}>
                  <Link to="/movement#politicalHome" scroll={el => scrollIntoView(el)}>Find Your Political Home</Link>
                </li>
              </div>
            )}
          </NavUl>
        </NavEl>
        <div css={[styles.socialMediaIconsClass, sharedstyles.hideMobile]}>
          <button onClick={openModal} css={styles.iconClass}><FontAwesomeIcon icon={['fas', 'envelope']} /></button>
          <a href="https://www.youtube.com/channel/UC2yVbXsWPtmAmOd7gUHa7_g/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
          <a href="https://www.facebook.com/andshecouldbenext/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
          <a href="https://www.instagram.com/andshecouldbenext/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
        </div>
      </HeaderContainer>
      <StyledModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName={'overlayClass'}
      >
        <Form closeModal={closeModal}/>
      </StyledModal>
      <MobileNav active={props.active}/>
    </>
  )}

Nav.defaultProps = {
  activeLink: 'trailer',
  fadeIn: false,
}

export default withTheme(Nav);