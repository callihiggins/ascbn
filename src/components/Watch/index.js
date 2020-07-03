import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Countdown from "react-countdown";
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import { Query } from 'react-contentful';
import Nav from '../shared/Nav';
import * as styles from  './styles';
import * as sharedstyles from  '../shared/styles';
import watchhere from '../../assets/images/watchhere.png';
import { EpisodeContainer } from './styles';
import { default as theme } from '../../theme';

const WATCH_DATA = gql`
{
  watchTextCollection {
		items {
			description {
				json
			}
    }
  }
  episodeCollection {
    items {
      order
      airDate
      header
      title
      description {
        json
      }
      photo {
        url
      }
      embedUrl
    }
  }
}`

export const Watch = () => {
  const { data } = useQuery(WATCH_DATA);
  return (
    <>
      <Nav active='watch'/>
      <div css={styles.watchContainerClass}>
        <div css={styles.watchImageClass}>
          <img src={watchhere} alt="watch here" />
        </div>
        <div css={styles.watchInfoClass}>
          {documentToReactComponents(data?.watchTextCollection.items[0]?.description.json)}
        </div>
        <div css={styles.episodesContainerClass}>
          {data?.episodeCollection.items.map(episode => (
            <EpisodeContainer order={episode.order}>
              <div css={styles.videoContainerClass}>
                {/* <div css={styles.headerClass}>{episode.header} | {episode.title}</div> */}
                <div css={styles.iFrameWrapperClass}>
                  <div css={styles.iFrameInnerClass}>
                    <Countdown date={new Date(episode.airDate)} renderer={({ days, hours, minutes, seconds, completed }) => {
                      if (completed) {
                        return (
                          <iframe
                            src={episode.embedUrl} 
                            css={styles.iFrameStyleClass}
                            allowFullScreen
                            title={episode.title}
                            scrolling="no"
                            allow="encrypted-media"
                        />
                        )
                      } else {
                        return(
                          <div css={styles.placeholderImageClass}>
                            <img src={episode.photo.url} alt={episode.title} />
                            <div css={styles.countdownContainerClass}>
                              <div css={styles.countdownTextClass}>
                                Available to stream in: <br/>
                                {days > 0 && `${days} day`}{days > 1 && `s`}{days > 0 && ', '}
                                {hours > 0 && `${hours} hour`}{hours > 1 && `s`}{hours > 0 && ', '}
                                {minutes > 0 && `${minutes} minute`}{minutes > 1 && `s`}{minutes > 0 && ', '}
                                {seconds > 0 && `${seconds} second`}{seconds > 1 && `s`}
                              </div>
                            </div>
                          </div>
                        )
                      }
                    }}/>
                  </div>
                </div>
              </div>
              <div css={styles.descriptionClass}>
                <div css={styles.dateClass}>{episode.header}</div>
                <div css={styles.headerClass}>{episode.title}</div>
                {documentToReactComponents(episode.description.json)}
              </div>
            </EpisodeContainer>
          ))}
        </div>
      </div>
    </>               
  )
}


export default Watch;