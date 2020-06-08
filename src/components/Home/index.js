import React from 'react';
import { CSSTransition } from "react-transition-group";
import { withTheme } from 'styled-components';
import { Query } from 'react-contentful';
import { debounce } from 'lodash';
import Nav from '../shared/Nav';
import Main from './Main';
import About from './About';
import Watch from './Watch';
import Newsletter from '../shared/Newsletter';

class Home extends React.Component {

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
			<Query contentType="homeAboutText">
				{({data, error, fetched, loading}) => {
					const aboutText = data?.items[0]?.fields?.about;
					const watchText = data?.items[0]?.fields?.viewingInformation;
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
							<About updateActive={this.updateActiveCallback} text={aboutText}/>
							<Watch updateActive={this.updateActiveCallback} text={watchText}/>
						</>
					)
				}}
			</Query>
		)
	}
	
}

export default withTheme(Home);
