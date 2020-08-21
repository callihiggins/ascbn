import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import * as styles from  './styles';
import * as sharedstyles from  '../../shared/styles';
import support from '../../../assets/images/support_teal.png';

const SUPPORT_DATA = gql`
{
  georgiaOrganizationsCollection {
    items {
      name
      logo {
        url
      }
      description
      url
    }
  }
}`

export const Support = () => {
  const { data } = useQuery(SUPPORT_DATA);
  return (
    <>
      <div css={styles.bannerImageClass}>
        <img src={support} alt="All Eyes On Georgia" />
      </div>
      <div css={styles.organizerTextClass}>
        Feeling fired up and ready to crush voter suppression this year? Support the fierce organizers in Georgia who are working to make sure that every vote counts in 2020:
      </div>  
      <div css={styles.organizationsContainerClass}>
        {data?.georgiaOrganizationsCollection?.items.map(organization => (  
          <div css={styles.organizationContainerClass}>
            <div css={styles.imageContainerClass}>
              <a href={organization.url} target="_blank">
                <img src={organization.logo.url} css={styles.imageClass} alt={organization.title} />
              </a>
            </div>
            <div css={styles.infoClass}>
            {/* <div css={styles.nameClass}>{organization.name}</div> */}
              <div css={styles.descriptionClass}>{organization.description}</div>
            </div>
          </div>
         ))}
      </div> 
    </> 
  )
}


export default Support;