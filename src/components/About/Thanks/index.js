import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import * as styles from './styles';
import { PartnerContainer } from './styles';

const THANKS_DATA = gql`{
  partnerCollection {
		items {
			name
			link
			order
			logo {
        url
			}
		}
	}
}`

const Thanks = () => {
  const { data } = useQuery(THANKS_DATA);
  const partners = data?.partnerCollection.items.map(
    link => 
    <PartnerContainer order={link.order}>
      <a href={link.link} target="_blank" rel="noopener noreferrer">
        <img src={link.logo.url} alt={link.title}/>
      </a>
    </PartnerContainer>
  );

  return (
    <>
      <div css={styles.bannerClass}>Special Thanks To</div>
      <div css={styles.partnersContainerClass}>
        {partners}
      </div>
    </>
  )
}


export default Thanks;
