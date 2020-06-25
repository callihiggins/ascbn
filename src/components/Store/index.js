import React from 'react';
import Nav from '../shared/Nav';
import InnerHTML from 'dangerously-set-html-content'
import __html from './ascbn-store-script.html';
import * as styles from './styles.js';

export const Store = () => 
  <div css={styles.containerClass}>
    <Nav active="store"></Nav>
    <div css={styles.storeContainerClass} >
      <InnerHTML html={__html} />
    </div>
  </div>

export default Store;
