import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GA from './utils/GoogleAnalytics'
import 'normalize.css';
import Home from './components/Home';
import About from './components/About';
import Movement from './components/Movement';
import Watch from './components/Watch';
import Events from './components/Events';
import Store from './components/Store';
import Georgia from './components/GA';
import Newsletter from './components/shared/Newsletter';
import Footer from './components/shared/Footer';
import './App.css';
import * as theme from './theme'
import { debounce } from 'lodash';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSpinner, faPlus, faMinus, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSpinner, faPlus, faMinus, faEnvelope, faTimes);

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}?access_token=${process.env.REACT_APP_CONTENTFUL_TOKEN}`
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
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <Router>
              { GA.init() && <GA.RouteTracker /> }
              <Switch>
                <Route exact path="/">
                  <>
                    <Home />
                    <Newsletter />
                  </>
                </Route>
                <Route path="/about">
                  <>
                    <About />
                    <Newsletter />
                  </>
                </Route>
                <Route path="/events">
                  <>
                    <Events />
                    <Newsletter />
                  </>
                </Route>
                <Route path="/movement">
                  <>
                    <Movement />
                    <Newsletter />
                  </>
                </Route>
                <Route path="/watch">
                  <>
                    <Watch />
                    <Newsletter />
                  </>
                </Route>
                <Route path="/store">
                  <>
                    <Store />
                    <Newsletter />
                  </>
                </Route>
                <Route path="/alleyesonga">
                  <Georgia />
                </Route>
              </Switch>
            </Router>
            <Footer />
          </ThemeProvider>
        </ApolloProvider>
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

