import React from 'react';
import { withTheme } from 'styled-components';
import YouTube from 'react-youtube';
import { Query } from 'react-contentful';
import Page from '../shared/Page';
import Nav from '../shared/Nav';
import * as styles from './styles';
import theme from '../../theme';

class About extends React.Component {

	state = {
    activeMenu: 'home',
  };

	render() {
		
		return (
			<Query contentType="homeAboutText">
				{({data, error, fetched, loading}) => {
					const aboutText = data?.items[0]?.fields?.about;
					const watchText = data?.items[0]?.fields?.viewingInformation;
					return (
						<>
							<Nav></Nav>
							<Page backgroundColor={theme.colors.teal}>
								<div css={styles.youtubeContainerClass}>
									<YouTube css={styles.playerClass} videoId="YC3xiv1CbYM" />
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
