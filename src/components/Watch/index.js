import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Countdown from "react-countdown";
import { Query } from 'react-contentful';
import Nav from '../shared/Nav';
import * as styles from  './styles';
import * as sharedstyles from  '../shared/styles';
import watch from '../../assets/images/watch.png';
import { HalfSection } from './styles';
import { EpisodeContainer } from './styles';
import { default as theme } from '../../theme';

export const Watch = () => {
  return (
    <>
      <Nav active='watch'/>
      <div css={styles.watchContainerClass}>
        <div css={styles.dateImageClass}>
          <img src={watch} alt="watch" />
        </div>
        <Query contentType="watchText">
          {({data, error, fetched, loading}) =>  (
            <div css={styles.watchInfoClass}>
              {documentToReactComponents(data?.items[0]?.fields?.postAirDescription)}
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
                      <div css={styles.iFrameWrapperClass}>
                        <div css={styles.iFrameInnerClass}>
                        <Countdown date={new Date(episode.fields.airDateTest)} renderer={({ days, hours, minutes, seconds, completed }) => {
                          if (completed) {
                            return (
                              <iframe
                                src={episode.fields.testEmbedUrl} 
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