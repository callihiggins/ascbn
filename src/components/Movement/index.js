import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Form from './Form';
import Newsletter from './Newsletter';
import ImpactClips from './ImpactClips';
import Voice from './Voice';
import Watch from '../Home/Watch';
import Political from './Political';
import organizerImage from '../../assets/images/OrganizerinAllofUs.png';
import Nav from '../shared/Nav';
import * as styles from './styles';

const MOVEMENT_DATA = gql`
{
  organizerTextCollection {
		items {
			description {
				json
			}
      screeningText {
        json
      }
      voteText {
        json
      }
		}
	}
}`

export const Movement = props => {
  const { data } = useQuery(MOVEMENT_DATA);
  const text = data?.organizerTextCollection.items[0].description.json;
  const virtualScreeningText = data?.organizerTextCollection.items[0].screeningText.json;
  const voteText = data?.organizerTextCollection.items[0].voteText.json;
  return (
    <div css={styles.containerClass}>
      <Nav active="movement"></Nav>
      <ImpactClips />
      <div css={styles.hostingBannerClass}>Host a Screening</div>
      <Watch shallowZIndex={true}/>
      <Newsletter />
      <Political/>
      <Voice></Voice>
    </div>
  )
}

export default Movement;
