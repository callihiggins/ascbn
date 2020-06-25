import React from 'react';
import { ContentfulClient, ContentfulProvider } from 'react-contentful';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'normalize.css';
import Home from './components/Home';
import About from './components/About';
import Movement from './components/Movement';
import Watch from './components/Watch';
import Store from './components/Store';
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

  hashLinkScroll = () => {
    const { hash } = window.location;
    if (hash !== '') {
      // Push onto callback queue so it runs after the DOM is updated,
      // this is required when navigating from a different page so that
      // the element is rendered on the page before trying to getElementById.
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
      }, 0);
    }
  }

  render() {
    return (
      <div className="app">
        <ContentfulProvider client={contentfulClient}>
          <ThemeProvider theme={theme}>
            <Router onUpdate={this.hashLinkScroll}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/movement">
                <Movement />
              </Route>
              <Route path="/watch">
                <Watch />
              </Route>
              <Route path="/store">
                <Store />
              </Route>
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

