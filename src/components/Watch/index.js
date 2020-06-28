import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Countdown from "react-countdown";
import { Query } from 'react-contentful';
import Nav from '../shared/Nav';
import * as styles from  './styles';
import * as sharedstyles from  '../shared/styles';
import dates from '../../assets/images/dates_wide.png';
import { EpisodeContainer } from './styles';
import { default as theme } from '../../theme';

export const Watch = () => {
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
        <Query contentType="watchText">
          {({data, error, fetched, loading}) =>  (
            <div css={styles.watchInfoClass}>
              {documentToReactComponents(data?.items[0]?.fields?.description)}
            </div>
            )
          }
        </Query>
        <div css={styles.episodesContainerClass}>
          <Query contentType="episode">
            {({data, error, fetched, loading}) => (
              <>
                {data?.items.map((episode, int) => (
                  <EpisodeContainer order={episode.fields.order}>
                    <div css={styles.videoContainerClass}>
                      {/* <div css={styles.headerClass}>{episode.fields.header} | {episode.fields.title}</div> */}
                      <div css={styles.iFrameWrapperClass}>
                        <div css={styles.iFrameInnerClass}>
                        <Countdown date={new Date(episode.fields.airDate)} renderer={({ days, hours, minutes, seconds, completed }) => {
                          if (completed) {
                            return (
                              <iframe
                                src={episode.fields.embedUrl} 
                                css={styles.iFrameStyleClass}
                                allowFullScreen
                                title={episode.fields.title}
                                scrolling="no"
                                allow="encrypted-media"
                            />
                            )
                          } else {
                            return(
                              <div css={styles.placeholderImageClass}>
                                <img src={`https:${episode.fields.photo.fields.file.url}`} alt={episode.fields.title} />
                              </div>
                            )
                          }
                        }}/>
                        </div>
                      </div>
                    </div>
                    <div css={styles.descriptionClass}>
                      <div css={styles.dateClass}>{episode.fields.header}</div>
                      <div css={styles.headerClass}>{episode.fields.title}</div>
                      {documentToReactComponents(episode.fields.description)}
                    </div>
                  </EpisodeContainer>
                ))}
              </>
            )}
          </Query>
        </div>
      </div>
    </>
  )
}

export default Watch;