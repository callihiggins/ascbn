import React from 'react';
import InnerHTML from 'dangerously-set-html-content'
import * as styles from './styles';

const html = `<script async src="https://walls.io/js/wallsio-widget-1.2.js" data-wallurl="https://walls.io/n4m7u?nobackground=1&amp;show_header=0" data-title="My social wall" data-injectloadmorebutton="1" data-loadmoretext="Load More" data-loadmorecount="20" data-width="100%" data-autoheight="1" data-height="800" data-lazyload="1"></script>`;
export const Voice = () => 
  <div id="voice">
    <div css={styles.bannerClass}>Speak Up</div>
    <div>
      <InnerHTML html={html} />
    </div>
  </div>
     

export default Voice;
