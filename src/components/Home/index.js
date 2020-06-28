import React, { useState } from 'react';
import { CSSTransition } from "react-transition-group";
import { withTheme } from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import { debounce } from 'lodash';
import Nav from '../shared/Nav';
import Main from './Main';
import About from './About';
import Watch from './Watch';

const HOME_DATA = gql`
{
  homeAboutTextCollection(limit: 1) {
    items {
      about {
        json
        links {
          assets {
            block {
              title
              url
            }
          }
        }
      }
      viewingInformation {
        json
        links {
          assets {
            block {
              title
              url
            }
          }
        }
      }
    }
  }    
}`

const Home = () => {

	const [activeMenu, updateActive] = useState('home');

	const { data } = useQuery(HOME_DATA);

	const aboutText = data?.homeAboutTextCollection?.items[0]?.about.json;
	const watchText = data?.homeAboutTextCollection?.items[0]?.viewingInformation.json;

  const updateActiveCallback = debounce(active => {
    if (activeMenu !== active) {
      updateActive(active);
    }
  }, 100); 

	return (
		<>
			<CSSTransition
				in={activeMenu !== 'home'}
				timeout={1000}
				classNames="nav"
			>
				<div className="fadedNav">
					<Nav />
				</div>
			</CSSTransition>
			<Main updateActive={updateActiveCallback} />
			<About updateActive={updateActiveCallback} text={aboutText}/>
			<Watch updateActive={updateActiveCallback} text={watchText}/>
		</>
	)
}

export default withTheme(Home);
