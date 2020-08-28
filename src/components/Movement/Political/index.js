import React from 'react';
import Partners from './Partners';
import Map from './Map';
import * as styles from './styles';

export const Political = () => 
  <div css={styles.highZClass} id="politicalHome">
    <div css={styles.bannerClass}>Find Your Political Home</div>
    <div css={styles.textBlockClass}>Click through the map to find local movement groups that focus on youth and communities of color.</div>
    <Map />
    <div css={styles.textBlockClass}>Or find your political home with one of our partners:</div>
    <Partners />    
  </div>
     

export default Political;
