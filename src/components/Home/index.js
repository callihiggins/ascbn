import React from 'react';
import { CSSTransition } from "react-transition-group";
import { withTheme } from 'styled-components';
import { withContentful } from 'react-contentful';
import { debounce } from 'lodash';
import Nav from '../Nav';
import Main from './Main';
import About from './About';

class Home extends React.Component {

	componentDidMount() {
		const { client } = this.props.contentful;
		client.getEntries('homeAboutText').then(data => this.data = data);
	}

	state = {
    activeMenu: 'home',
  };

  updateActiveCallback = debounce(active => {
    if (this.state.activeMenu !== active) {
      this.setState({activeMenu: active});
    }
  }, 100);

	render() {
		return (
			<>
				<CSSTransition
					in={this.state.activeMenu !== 'home'}
					timeout={1000}
					classNames="nav"
				>
					<div className="fadedNav">
						<Nav />
					</div>
				</CSSTransition>
				<Main updateActive={this.updateActiveCallback} />
				<About updateActive={this.updateActiveCallback}/>
			</>
		)
	}
	
}

export default withContentful(withTheme(Home));
