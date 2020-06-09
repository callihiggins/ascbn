import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import * as styles from  './styles';
import * as sharedstyles from  '../../shared/styles';
import Page from '../../shared/Page';
import dateImage from '../../../assets/images/dates.png';
import { HalfSection } from './styles';
import { default as theme } from '../../../theme';



const Watch = props => (
  <Page updateActive={props.updateActive} name="watch">
    <div css={styles.containerClass}>
      <HalfSection backgroundColor={theme.colors.navy}>
      <div css={styles.textContainerClass}>
        <div css={[sharedstyles.hideDesktop, styles.mobileImageContainerClass]}>
          <img src={dateImage} alt="June 28 and 30" />
        </div>
          { documentToReactComponents(props.text)}
          <div css={styles.buttonGroupClass}>
            <NavLink smooth to="/movement#screening"><button css={styles.buttonClass}>Host a virtual screening</button></NavLink>
          </div>
        </div>
      </HalfSection>      
      <HalfSection css={sharedstyles.hideMobile}>
        <img src={dateImage} alt="June 28 and 30" />
      </HalfSection>
    </div>
  </Page>
)

export default Watch;