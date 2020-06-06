import React from 'react';
import { withTheme } from 'styled-components';
import { withContentful } from 'react-contentful';
import Nav from '../Nav';
import Main from './Main';
import About from './About';

class Home extends React.Component {

	componentDidMount() {
		const { client } = this.props.contentful;
		client.getEntries('homeAboutText').then(data => this.data = data);
	}

	render() {
		return (
			<>
				<Nav />
				<Main />
				<About />
			</>
		)
	}
	
}

export default withContentful(withTheme(Home));