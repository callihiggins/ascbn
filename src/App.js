import React from 'react';
import { ContentfulClient, ContentfulProvider } from 'react-contentful';
import { ThemeProvider } from 'styled-components';
import { CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'normalize.css';
import Home from './components/Home'
import Newsletter from './components/shared/Newsletter';
import Footer from './components/shared/Footer';
import './App.css';
import * as theme from './theme'
import { debounce } from 'lodash';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSpinner, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSpinner, faPlus, faMinus);

const contentfulClient = new ContentfulClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  space: process.env.REACT_APP_SPACE_ID,
});


class App extends React.Component {
  
  state = {
    activeMenu: 'trailer',
  };

  updateActiveCallback = debounce(active => {
    if (this.state.activeMenu !== active) {
      this.setState({activeMenu: active});
    }
  }, 100);

  render() {
    return (
      <div className="app">
        <ContentfulProvider client={contentfulClient}>
          <ThemeProvider theme={theme}>
            <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              {/* <Route path="/about">
              </Route>
              <Route path="/jointhemovement">
              </Route> */}
            </Switch>
            </Router>
            <Newsletter />
            <Footer />
          </ThemeProvider>
        </ContentfulProvider>
      </div>
    );
  }
}

export default App;


 /* <CSSTransition
  in={this.state.activeMenu !== 'trailer'}
  timeout={1000}
  classNames="nav"
>
  <div className="fixedNav">
    <Nav activeLink={this.state.activeMenu} fixedNav={this.state.activeMenu !== 'trailer'}/>
  </div>
</CSSTransition> */

