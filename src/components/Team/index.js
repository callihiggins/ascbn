import React,  { useState } from 'react';
import { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CSSTransition } from "react-transition-group";
import { teamMembers } from './teamData';
import { SectionTitle, LeftArrowContainer } from '../shared/styles';
import Page from '../shared/Page';
import { ReactComponent as LeftArrow } from '../../assets/leftArrow.svg';
import * as styles from './styles';
import { Bio, PersonContainer, PersonName, PersonTitle } from './styles';
import '../../App.css';
import * as sharedstyles from '../shared/styles';

const Person = ({ name, title, bio, setisActive, currentlyOpenIndex, setCurrentlyOpenIndex, isActive, index, image}) => 
{
  const imActive = isActive && currentlyOpenIndex === index;
  const dimMe = isActive && currentlyOpenIndex !== index;
  const [open, setOpen] = useState(0);

  const showBio = () => {
    setOpen(!open)
  }
  
  return (
    <PersonContainer
      dimMe={dimMe}
      onClick={() => {
        setisActive(true);
        setCurrentlyOpenIndex(index);
      }}
      index={index}
    >
      <>
        <div css={sharedstyles.hideDesktop}>
          <img src={image} alt="headshot" css={styles.headshotImageClass} />
        </div>
        <PersonName isHighlighted={imActive} >{name}</PersonName>
        <PersonTitle isHighlighted={imActive}>{title}</PersonTitle>
        <div css={sharedstyles.hideDesktop}>
          <div css={[styles.plusIconClass, sharedstyles.hideDesktop]} onClick={showBio}>
            Read Bio{ open ? (<FontAwesomeIcon icon={['fas', 'minus']} /> ) : (<FontAwesomeIcon icon={['fas', 'plus']} />) }
          </div>
          <CSSTransition
            in={open}
            timeout={500}
            classNames="bio"
          >
            <Bio>
              {bio}
            </Bio>
          </CSSTransition>
        </div>
      </>
    </PersonContainer>
  )
}
  

// const BioContainer = ({ open, index, text, image }) => {
//   return (
//     <CSSTransition
//         in={open}
//         timeout={500}
//         classNames="bio"
//       >
//         <Bio>
//           {text}
//         </Bio>
//       </CSSTransition>
//   )
  
// }

const Team = props => {
  const [isActive, setisActive] = useState(false);
  const [currentlyOpenIndex, setCurrentlyOpenIndex] = useState(null);
  return (
    <Page name="team" updateActive={props.updateActive}>
      <div css={sharedstyles.stickyClass}>
        <LeftArrowContainer css={sharedstyles.hideMobile} isInView={props.isInView}>
          <LeftArrow css={sharedstyles.arrowClass} />
        </LeftArrowContainer>
        <SectionTitle css={sharedstyles.hideMobile} left color="white" isInView={props.isInView}>The Team</SectionTitle>
      </div>
      {/* <div css={styles.peopleContainerClass} onMouseLeave={() => setisActive(false)}> */}
      <div css={styles.peopleContainerClass} >

        {teamMembers.map((person, index) =>
          <Person 
            setCurrentlyOpenIndex={setCurrentlyOpenIndex}
            currentlyOpenIndex={currentlyOpenIndex}
            isActive={isActive}
            setisActive={setisActive}
            index={index}
            { ...person}
          />
        )}
      </div>
      {!!isActive && currentlyOpenIndex > -1 && (
        <div css={styles.bioContainerClass}>
          <img src={teamMembers[currentlyOpenIndex].image} css={styles.headshotImageClass}/>
          <Bio>
            {teamMembers[currentlyOpenIndex].bio}
          </Bio>
        </div>
      )}
    </Page>
  )
}

export default withTheme(Team);