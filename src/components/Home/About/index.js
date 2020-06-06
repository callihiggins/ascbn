import React from 'react';
import * as styles from  './styles';
import * as sharedstyles from  '../../shared/styles';
import Page from '../../shared/Page';
import torchImage from '../../../assets/images/torch.png';
import { HalfSection } from './styles';
import { default as theme } from '../../../theme';



const About = props => (
  <Page updateActive={props.updateActive} name="about">
    <div css={styles.containerClass}>
      <HalfSection>
        <img src={torchImage} alt="And She Could Be Next logo" />
      </HalfSection>
      <HalfSection backgroundColor={theme.colors.teal}>

      </HalfSection>

    </div>
  </Page>
)

export default About;