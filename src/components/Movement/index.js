import React from 'react';
import useScrollToHash from '../shared/hooks/useScrollToHash';
import ImpactClips from './ImpactClips';
import Voice from './Voice';
import Watch from '../Home/Watch';
import Political from './Political';
import Nav from '../shared/Nav';
import * as styles from './styles';

export const Movement = props => {
  useScrollToHash();

  return (
    <div css={styles.containerClass}>
      <Nav active="movement"></Nav>
      <ImpactClips />
      <Political/>
    </div>
  )
}

export default Movement;
