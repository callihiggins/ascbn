import React from 'react';
import InnerHTML from 'dangerously-set-html-content'
import mapImage from '../../../assets/images/map.png';
import * as styles from './styles';


const html = `<script async src="https://walls.io/js/wallsio-widget-1.2.js" data-wallurl="https://walls.io/n4m7u?nobackground=1&amp;show_header=0" data-title="My social wall" data-width="100%" data-autoheight="1" data-height="800" data-lazyload="1"></script>`;
export const Voice = () => 
  <>
    <div css={styles.bannerClass}>Speak Up</div>
    <div>
      <InnerHTML html={html} />
    </div>
      
  </>
     

export default Voice;
