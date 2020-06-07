import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { withTheme } from 'styled-components';
import YouTube from 'react-youtube';
import { Query } from 'react-contentful';
import Page from '../shared/Page';
import Nav from '../shared/Nav';
import * as styles from './styles';
import theme from '../../theme';

class About extends React.Component {
	render() {
		return (
			<Query contentType="about">
				{({data, error, fetched, loading}) => {
					// if (data) debugger;
					const text = data?.items[0]?.fields?.description;
					return (
						<>
							<Nav></Nav>
							<Page backgroundColor={theme.colors.teal}>
								<div css={styles.youtubeContainerClass}>
									<YouTube css={styles.playerClass} videoId="YC3xiv1CbYM" />
								</div>
								<div css={styles.aboutTextClass}>
									{documentToReactComponents(text)}
								</div>
							</Page>
						</>
					)
				}}
			</Query>
		)
	}
}

export default withTheme(About);
