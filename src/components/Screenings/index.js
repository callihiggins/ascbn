import React from 'react';
import { withTheme } from 'styled-components';
import { ReactComponent as RightArrow } from '../../assets/rightArrow.svg';
import * as sharedstyles from '../shared/styles';
import { RightArrowContainer, SectionTitle } from '../shared/styles';
import * as styles from './styles';
import LAAPFF from '../../assets/logo.jpg';
import WeAreOne from '../../assets/we-are-one.png' 
import Page from '../shared/Page';


const Screenings = props => {
  return (
    <Page name="festivals" backgroundColor={props.theme.default.colors.red} updateActive={props.updateActive}>
      <RightArrowContainer css={sharedstyles.hideMobile} isInView={props.isInView}> 
        <RightArrow css={sharedstyles.arrowClass} />
      </RightArrowContainer>
      <SectionTitle css={sharedstyles.hideMobile} isInView={props.isInView}>Festival <br/>Screenings</SectionTitle>
      <div css={styles.containerClass}>
        <a href="http://www.weareoneglobalfestival.com/events/and-she-could-be-next-2020" target="_blank">
          <div css={styles.festivalBlockClass}>
            <img src={WeAreOne} alt="We are one Global Festival"/>
            <div css={styles.festivalDetailsClass}>
              <div css={styles.titleClass}>We Are One Global Festival</div>
              <div css={styles.dateClass}>May 29th</div>
              Available for screening all day from 8am PT to 8pm PT. Join us at 5pm PT for a live Q & A with the filmmakers.
            </div>
          </div>
        </a>
        <a href="https://watch.eventive.org/laapffvirtual/play/5ec854d3b4612e03ade80a4b/5ec859bef713f30063ce2695" target="_blank">
          <div css={styles.festivalBlockClass}>
            <img src={LAAPFF} alt="Los Angeles Asian Pacific Film Festival"/>
            <div css={styles.festivalDetailsClass}>
              <div css={styles.titleClass}>Los Angeles Asian Pacific Film Festival</div>
              <div css={styles.dateClass}>May 31st</div>
              Available on YouTube for 48 hours starting at 4:30pm EST
            </div>
          </div>
        </a>
      </div>
    </Page>
  )
}

export default withTheme(Screenings);