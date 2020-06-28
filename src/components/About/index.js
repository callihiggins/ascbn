import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import YouTube from 'react-youtube';
import Nav from '../shared/Nav';
import Team from './Team'
import News from './News'
import Thanks from './Thanks'
import * as styles from './styles';

const ABOUT_DATA = gql`
{
  aboutCollection(limit: 1) {
    items {
      description {
      	json
      }
    }
  }
}`

const About = () => {
	
	const { data } = useQuery(ABOUT_DATA);
	const trailerText = data?.aboutCollection.items[0]?.description.json;
		return (
			<>
				<Nav active="about"></Nav>
				<div css={styles.aboutContainerClass}>
					<div css={styles.youtubeContainerClass} id="trailer">
						<YouTube css={styles.playerClass} videoId="YC3xiv1CbYM" />
					</div>
					<div css={styles.aboutTextClass}>
						{documentToReactComponents(trailerText)}
					</div>
				</div>
				<Team/>
				<News />
				<Thanks />
			</>
		)
	}


export default About;
