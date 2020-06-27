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
    <Query contentType="episode">
      {({data, error, fetched, loading}) => {
        const episodes = data?.items.map(episode => (
          <EpisodeContainer order={episode.fields.order}>
            <div css={styles.headerClass}>{episode.fields.header}</div>
            <img src={`https:${episode.fields.photo.fields.file.url}`} alt={episode.fields.title}/>
            {documentToReactComponents(episode.fields.description)}
          </EpisodeContainer>
        ));
        return (
          <>
            <Nav active='watch'/>
            <div css={styles.watchContainerClass}>
              <div css={styles.taglineClass}>
                Tune in for the two night premiere on PBS
              </div>
              <div css={styles.dateImageClass}>
                <img src={dates} alt="June 29 and 30" />
              </div>
              <div css={styles.watchInfoClass}>
                <p><i>And She Could Be Next</i> will air on POV on PBS. Search for POV in your TV listings or visit <a href="https://www/pbs.org" taget="_blank">pbs.org</a> to find your local station and broadcast time.</p>
                <p>Not airing on your local station? Episodes are available for free streaming starting at 9pm ET / 8pm CT / 7pm MT / 6pm PT each night (and for 60 days thereafter) on <a href="https://www.pbs.org/pov/shecouldbenext" taget="_blank">pbs.org/pov/shecouldbenext</a></p>
              </div>
              <div css={styles.episodeSummaryClass}>
                {episodes}
              </div>
            </div>
          </>
        )
      }}
    </Query>
  );
}

export default Watch;