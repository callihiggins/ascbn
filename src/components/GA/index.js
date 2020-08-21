import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import Nav from '../shared/Nav';
import Support from './Support';
import VotePlan from './VotePlan';
import * as styles from  './styles';
import * as sharedstyles from  '../shared/styles';
import alleyesongeorgia from '../../assets/images/alleyesongeorgia.png';
import { EpisodeContainer } from './styles';
import { default as theme } from '../../theme';

const GA_DATA = gql`
{
  gaEpisodeCollection {
    items {
      title
      photo {
        url
      }
      description {
        json
      }
      embedUrl
    }
  }
}`

export const Georgia = () => {
  const { data } = useQuery(GA_DATA);
  return (
    <div id="georgia">
      <Nav active='Georgia'/>
      <div css={styles.gaContainerClass}>
        <div css={styles.gaImageClass}>
          <img src={alleyesongeorgia} alt="All Eyes On Georgia" />
        </div>
        <div css={styles.episodesContainerClass}>
          {data?.gaEpisodeCollection?.items.map(episode => (
            <EpisodeContainer order={episode.order}>
              <div css={styles.videoContainerClass}>
                {/* <div css={styles.headerClass}>{episode.header} | {episode.title}</div> */}
                <div css={styles.iFrameWrapperClass}>
                  <div css={styles.iFrameInnerClass}>
                    <iframe
                      src={episode.embedUrl} 
                      css={styles.iFrameStyleClass}
                      allowFullScreen
                      title={episode.title}
                      scrolling="no"
                      allow="encrypted-media"
                    />
                  </div>
                </div>
              </div>
              <div css={styles.descriptionClass}>
                <div css={styles.headerClass}>{episode.title}</div>
                {documentToReactComponents(episode.description.json)}
              </div>
            </EpisodeContainer>
          ))}
        </div>
        <div css={styles.watchTextClass}>
          <p>Complete the And She Could Be Next experience with Episode One: Building the Movement. Both episodes are available for free streaming at <a href="https://www.andshecouldbenext.com/watch">www.andshecouldbenext.com/watch</a> and <a href="https://www.pbs.org/pov/watch/shecouldbenext/" target="_blank">PBS</a> until August 31. </p>
        </div>
      </div>
      <Support />
      <VotePlan />
    </div>               
  )
}


export default Georgia;