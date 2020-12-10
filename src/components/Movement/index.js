import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Form from './Form';
import Vote from './Vote';
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
      <div css={styles.organizerContainerClass} >
        <div css={[styles.centerClass, styles.halfClass]}>
          <img src={organizerImage} alt="There's an organizer in all of us" css={styles.organizerImageClass}/>
        </div>
        <div css={[styles.halfClass, styles.alignLeft]}>
          {documentToReactComponents(text)}
        </div>
      </div>
      {/* <div css={styles.hostingBannerClass}>Join the Action Squad</div>
      <div css={styles.screeningTextClass}>{documentToReactComponents(virtualScreeningText)}</div>
      <Form /> */}
      <div css={styles.hostingBannerClass}>Host a Screening</div>
      <Watch shallowZIndex={true}/>
      {/* <Vote id="vote" voteText={voteText}/> */}
      <Political/>
      <Voice></Voice>
    </div>
  )
}

export default Movement;
