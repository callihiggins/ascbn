import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import * as styles from  './styles';
import * as sharedstyles from  '../../shared/styles';
import Page from '../../shared/Page';
import torchImage from '../../../assets/images/torch.png';
import { HalfSection } from './styles';
import { default as theme } from '../../../theme';



const About = props => (
  <Page updateActive={props.updateActive} name="about">
    <div css={styles.containerClass}>
      <HalfSection css={sharedstyles.hideMobile}>
        <img src={torchImage} alt="And She Could Be Next logo" />
      </HalfSection>
      <HalfSection backgroundColor={theme.colors.teal}>
        <div css={styles.textContainerClass}>
          { documentToReactComponents(props.text)}
          <div css={styles.buttonGroupClass}>
            <NavLink smooth to="/about#trailer"><button css={styles.buttonClass}>Learn More</button></NavLink>
            <NavLink smooth to="/about#filmmakers"><button css={styles.buttonClass}>Meet the Team</button></NavLink> 
          </div>
        </div>
        
      </HalfSection>

    </div>
  </Page>
)

export default About;