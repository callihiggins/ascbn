import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Query } from 'react-contentful';
import Nav from '../shared/Nav';
import * as styles from  './styles';
import * as sharedstyles from  '../shared/styles';
import dates from '../../assets/images/dates_wide.png';
import { HalfSection } from './styles';
import { EpisodeContainer } from './styles';
import { default as theme } from '../../theme';

export const Watch = () => {
  return (
    <>
      <Query contentType="episode">
        {({data, error, fetched, loading}) => {
          const episodes = data?.items.map(episode => (
            <EpisodeContainer order={episode.fields.order}>
              {documentToReactComponents(episode.fields.description)}
            </EpisodeContainer>
          ));
          return (
            <>
              <Nav active='watch'/>
              <div css={styles.watchContainerClass}>
                <div css={styles.taglineClass}>
                  Tune in for the two night permiere on PBS
                </div>
                <div css={styles.dateImageClass}>
                  <img src={dates} alt="June 29 and 30" />
                </div>
                <a href="https://www.pbs.org/stations/" css={styles.linkClass} target="_blank">Find your Local PBS station</a>
                <div css={styles.episodeSummaryClass}>
                  {episodes}
                </div>
              </div>
            </>
          )
        }}
      </Query>
      <Query contentType="filmFestival">
        {({data, error, fetched, loading}) => {
          const festivals = data?.items.map(festival => (
            <div css={styles.festivalContainerClass}>
              <a href={festival.fields.link} target="_blank">
                <img src={`https:${festival.fields.image.fields.file.url}`} alt={festival.fields.festivalName} css={styles.imageClass}/>
                <div css={styles.bottomBlockClass}>
                  <div css={styles.nameClass}>
                    {festival.fields.festivalName}
                  </div>
                  <div css={styles.datesClass}>
                    {festival.fields.dates}
                  </div>
                </div>
              </a>
           </div>
          ));
          return (
            <>
              <div css={styles.festivalBannerClass}>Upcoming Festival Appearances</div>
              <div css={styles.festivalsContainerClass}>
                {festivals}
              </div>
            </>
          )
        }}
      </Query>
    </>
  );
}

export default Watch;
