import React from 'react';
import { Query } from 'react-contentful';
import * as styles from './styles';
import { PartnerContainer } from './styles';

const Thanks = () => 
  <Query contentType="partner">
    {({data, error, fetched, loading}) => {      
      const partners = data?.items.map(
        link => 
        <PartnerContainer order={link.fields.order}>
          <a href={link.fields.link} target="_blank" rel="noopener noreferrer">
            <img src={`https:${link.fields.logo.fields.file.url}`} alt={link.fields.title}/>
          </a>
        </PartnerContainer>
      )
      return (
        <>
          <div css={styles.bannerClass}>Special Thanks To</div>
          <div css={styles.partnersContainerClass}>
            {partners}
          </div>
        </>
      )
    }}
  </Query>

export default Thanks;
