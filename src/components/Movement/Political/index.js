import React from 'react';
import Partners from './Partners';
import mapImage from '../../../assets/images/map.png';
import * as styles from './styles';

export const Political = () => 
  <div css={styles.highZClass} id="politicalHome">
    <div css={styles.bannerClass}>Find Your Political Home</div>
    <div css={styles.imageBlockClass}>
      <a href="https://movement.vote/#map" target="blank">
        <img src={mapImage} alt="us map" css={styles.imageClass} />
      </a>
    </div>
    <div css={styles.textBlockClass}>From the Movement Voter Project, click through the map to find local movement groups that focus on youth and communities of color.</div>
    <div css={styles.textBlockClass}>Or find your political home with one of our partners:</div>
    <Partners />    
  </div>
     

export default Political;
