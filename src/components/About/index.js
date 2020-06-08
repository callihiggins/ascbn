import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { withTheme } from 'styled-components';
import YouTube from 'react-youtube';
import { Query } from 'react-contentful';
import Nav from '../shared/Nav';
import Team from './Team'
import News from './News'
import * as styles from './styles';

class About extends React.Component {
	render() {
		return (
			<Query contentType="about">
				{({data, error, fetched, loading}) => {
					
					const text = data?.items[0]?.fields?.description;
					return (
						<>
							<Nav></Nav>
							<div css={styles.aboutContainerClass}>
								<div css={styles.youtubeContainerClass}>
									<YouTube css={styles.playerClass} videoId="YC3xiv1CbYM" />
								</div>
								<div css={styles.aboutTextClass}>
									{documentToReactComponents(text)}
								</div>
							</div>
							<Team/>
							<News />
						</>
					)
				}}
			</Query>
		)
	}
}

export default withTheme(About);
