import React,  { useState } from 'react';
import { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CSSTransition } from "react-transition-group";
import { teamMembers } from './teamData';
import { SectionTitle, LeftArrowContainer } from '../shared/styles';
import Page from '../shared/Page';
import { ReactComponent as LeftArrow } from '../../assets/leftArrow.svg';
import * as styles from './styles';
import { Bio, PersonContainer, PersonName, PersonTitle, BioContainer } from './styles';
import '../../App.css';
import * as sharedstyles from '../shared/styles';

const Person = ({ 
  name,
  title,
  bio,
  currentlyOpenIndex,
  setCurrentlyOpenIndex,
  isActive,
  setIsActive,
  index,
  image
}) => 
{
  const dimMe = isActive && currentlyOpenIndex !== index;
  const highlighted = isActive && currentlyOpenIndex === index;
  const [open, setOpen] = useState(0);

  const showBio = () => {
    setOpen(!open)
  }
  
  return (
    <PersonContainer
      dimMe={dimMe}
      highlighted={highlighted}
      onClick={() => {
        setCurrentlyOpenIndex(index);
        setIsActive(!isActive);
      }}
      onMouseExit={() => setIsActive(false) }
      index={index}
    >
      <>
        <div css={sharedstyles.hideDesktop}>
          <img src={image} alt="headshot" css={styles.headshotImageClass} />
        </div>
        <PersonName highlighted={highlighted} >{name}</PersonName>
        <PersonTitle highlighted={highlighted}>{title}</PersonTitle>
        <CSSTransition
          in={highlighted}
          timeout={500}
          classNames="bio-desktop"
        >
          <BioContainer highlighted={highlighted}>
            <img src={image} css={styles.headshotImageClass} alt={teamMembers[currentlyOpenIndex].name}/>
            <Bio>
              {bio}
            </Bio>
          </BioContainer>
        </CSSTransition>
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
  const [currentlyOpenIndex, setCurrentlyOpenIndex] = useState(0);
  const [isActive, setIsAvtive] = useState(null);
  return (
    <Page name="team" updateActive={props.updateActive}>
      <LeftArrowContainer css={sharedstyles.hideMobile} isInView={props.isInView}>
        <LeftArrow css={sharedstyles.arrowClass} />
      </LeftArrowContainer>
      <SectionTitle css={sharedstyles.hideMobile} left color="white" isInView={props.isInView}>The Team</SectionTitle>
      <div css={styles.peopleContainerClass}>
        {teamMembers.map((person, index) =>
          <Person 
            setCurrentlyOpenIndex={setCurrentlyOpenIndex}
            currentlyOpenIndex={currentlyOpenIndex}
            index={index}
            isActive={isActive}
            setIsActive={setIsAvtive}
            { ...person}
          />
        )}
      </div>
    </Page>
  )
}

export default withTheme(Team);