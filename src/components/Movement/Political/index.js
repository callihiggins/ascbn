import React from 'react';
import mapImage from '../../../assets/images/map.png';
import * as styles from './styles';

export const Political = () => 
  <div css={styles.highZClass}>
    <div css={styles.bannerClass}>Find Your Political Home</div>
    <div css={styles.imageBlockClass}>
      <a href="https://movement.vote/#map" target="blank">
        <img src={mapImage} alt="us map" css={styles.imageClass} />
      </a>
    </div>
    <div css={styles.textBlockClass}>From the Movement Voter Project, click through to find local movement groups that focus on youth and communities of color.</div>
  </div>
     

export default Political;
