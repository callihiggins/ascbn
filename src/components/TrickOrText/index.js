import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import Nav from '../shared/Nav';
import Form from './Form';
import * as styles from  './styles';
import * as sharedstyles from  '../shared/styles';
import { default as theme } from '../../theme';

const TRICKORTEXT_DATA = gql`
  {
    trickOrTextCollection {
      items {
        description {
          json
        }
      }
    }
  }`

export const TrickOrText = () => {

  const { data } = useQuery(TRICKORTEXT_DATA);
  return (
    <div id="trickOrText">
      <Nav active='trickOrText'/>
      <div css={styles.containerClass}>
        <div css={styles.mainTextClass}> Halloween Trick or Text for Georgia</div>
        <div css={styles.descriptionClass}>
          {documentToReactComponents(data?.trickOrTextCollection?.items[0]?.description?.json)}
        </div>
        <div css={styles.formContainerClass}>
          <Form />
        </div>
      </div>
    </div>               
  )
}


export default TrickOrText;