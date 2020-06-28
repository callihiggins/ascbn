import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import * as styles from './styles';
import { PartnerContainer } from './styles';

const PARTNERS_DATA = gql`
{
  partnerCollection {
    items {
      name
      link
      logo {
        url
      }
      order
    }
	}
}`

const Partners = () => {
  const { data } = useQuery(PARTNERS_DATA);
  const partners = data?.partnerCollection.items.map(
    link => 
    <PartnerContainer order={link.order}>
      <a href={link.link} target="_blank" rel="noopener noreferrer">
        <img src={link.logo.url} alt={link.title}/>
      </a>
    </PartnerContainer>
  )
  return (
    <>
      <div css={styles.partnersContainerClass}>
        {partners}
      </div>
    </>
  )
}

export default Partners;
