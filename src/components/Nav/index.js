import React from 'react';
import { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactComponent as Logo } from '../../assets/logo.svg';
import * as styles from  './styles';
import { HeaderContainer, NavItem } from './styles';


const Nav = props => {
  const { fixedNav } = props;
	return (
    <HeaderContainer show={props.activeLink !== 'trailer'}>
      <nav>
        <ul css={styles.navClass}>
          {fixedNav && (
            <NavItem active={props.activeLink=== 'trailer'}>
              <a href="#trailer">Trailer</a>
            </NavItem>
          )}
          <NavItem active={props.activeLink=== 'about' || props.activeLink === 'introText'}>
            <a href="#introText">About</a>
          </NavItem>
          <NavItem active={props.activeLink=== 'team'}>
            <a href="#team">The Team</a>
          </NavItem>
          <NavItem active={props.activeLink=== 'movement'}>
            <a href="#movement">The Movement</a>
          </NavItem>
        </ul>
      </nav>
      {fixedNav && (
        <>
          <div css={styles.socialMediaIconsClass}>
              <a href="https://www.facebook.com/andshecouldbenext/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
              <a href="https://twitter.com/shecouldbenext" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
              <a href="https://www.instagram.com/andshecouldbenext/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
            </div>
            <a href="https://www.documentary.org/project/and-she-could-be-next" target="_blank" rel="noopener noreferrer" css={styles.donateButtonClass}>
              Donate
            </a>
        </>
      )}
      {fixedNav && (
        <Logo css={styles.logoClass}/>
      )}
    </HeaderContainer>
  )}

Nav.defaultProps = {
  activeLink: 'trailer',
  fadeIn: false,
}

export default withTheme(Nav);