import React from 'react';
import { ThemeProvider } from 'styled-components';
import { CSSTransition } from "react-transition-group";
import 'normalize.css';
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
// import IntroText from './components/IntroText'
import Team from './components/Team'
import Movement from './components/Movement'
import './App.css';
import * as theme from './theme'
import { debounce } from 'lodash';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSpinner, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSpinner, faPlus, faMinus);


class App extends React.Component {
  
  state = {
    activeMenu: 'trailer',
  };

  updateActiveCallback = debounce(active => {
    if (this.state.activeMenu !== active) {
      this.setState({activeMenu: active});
    }
  }, 10);

  render() {
    return (
      <div className="app">
        <ThemeProvider theme={theme}>
          <Home updateActive={this.updateActiveCallback}/>
            <CSSTransition
              in={this.state.activeMenu !== 'trailer'}
              timeout={1000}
              classNames="nav"
            >
              <div className="fixedNav">
                <Nav activeLink={this.state.activeMenu} fixedNav={this.state.activeMenu !== 'trailer'}/>
              </div>
            </CSSTransition>
          {/* <IntroText updateActive={this.updateActiveCallback}/> */}
          <About updateActive={this.updateActiveCallback} isInView={this.state.activeMenu === 'about' ||  this.state.activeMenu === 'introText'} />
          <Team shallowZIndex={true} isInView={this.state.activeMenu === 'team' } updateActive={this.updateActiveCallback} />
          <Movement updateActive={this.updateActiveCallback} />      
        </ThemeProvider>
      </div>
    );
  }
  
}

export default App;
