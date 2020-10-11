import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import { Query } from 'react-contentful';
// import Form from './Form';
import Nav from '../shared/Nav';
import * as styles from  './styles';
import * as sharedstyles from  '../shared/styles';
import howtowatch from '../../assets/images/howtowatch.png';
import hostScreening from '../../assets/images/hostscreening.png';
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
    <div id="screening">
      <Nav active='watch'/>
      <div css={styles.watchContainerClass}>
        <div css={styles.watchImageClass}>
          <img src={howtowatch} alt="how to watch" />
        </div>  
        <div css={styles.watchInfoClass}>
          {documentToReactComponents(data?.watchTextCollection.items[0]?.description.json)}
        </div>
        <div css={styles.watchLinksClass}>
          <div css={styles.sectionClass}>
            <div css={styles.titleClass}>Stream</div>
            {/* <div css={styles.subTitleClass}>Download to rent or own</div> */}
            <div css={styles.streamingLinks}>
              <a href="https://www.amazon.com/She-Could-Be-Next-Season/dp/B08BX8DQX5" target="_blank">Amazon</a>
              <a href="https://itunes.apple.com/us/tv-season/and-she-could-be-next-season-1/id1512456795" target="_blank">iTunes</a>
              <a href="https://www.xfinity.com/learn/digital-cable-tv" target="_blank">Comcast</a>
              {/* <a href="https://www.amazon.com/She-Could-Be-Next-Season/dp/B08BX8DQX5" target="_blank">PBS Documentaries on Amazon</a> */}
            </div>
          </div>
          <div css={styles.sectionClass}>
            <div css={styles.titleClass}>Buy DVD</div>
            <a href="https://shop.pbs.org/WA5732.html" target="_blank">Shop at PBS</a>
          </div>
          <div css={styles.sectionClass}>
            <div css={styles.titleClass}>Educational</div>
            <a href="https://shop.pbs.org/WA5732AV.html" target="_blank">Buy the Educational DVD</a>
          </div>
          <div css={styles.sectionClass}>
            <div css={styles.titleClass}>Outside the US?</div>
            <p>Coming soon!</p>
            {/* <a href="https://shop.pbs.org/WA5732AV.html" target="_blank">Sign up to get notified</a> */}
            {/* <Form /> */}
          </div>
          <div css={styles.sectionClass}>
            <div css={styles.titleClass}>Host a screening or<br/> Request a Speaker</div>
              {/* <p>Sign up to host a screening or discussion of And She Could Be Next for your friends, neighbors, or community! After signing up, our team will follow-up to share resources and details with you on how to make it happen or help you spread the word. <br /></p> */}
            <div css={styles.buttonGroupClass}>
              <a href="https://airtable.com/shrPwxSFaSKYrKPq5" target="_blank">Screening Request Form</a>
            </div>
          </div>
          <div css={styles.sectionClass}>
            <div css={styles.titleClass}>Get the PowerPack</div>
            <a href="https://andshecouldbenext.us19.list-manage.com/track/click?u=6451bb053a61584a94aa81331&id=8810010860&e=42e3ebe84a" target="_blank">And She Could Be Next digital PowerPack</a>
          </div>
        </div>
        <div css={styles.episodesContainerClass}>
          {data?.episodeCollection.items.map(episode => (
            <EpisodeContainer order={episode.order}>
              <div css={styles.videoContainerClass}>
                {/* <div css={styles.headerClass}>{episode.header} | {episode.title}</div> */}
                <img src={episode.photo.url} alt={episode.title}/>
                <div css={styles.descriptionClass}>
                {documentToReactComponents(episode.description.json)}
              </div>
              </div>
            </EpisodeContainer>
          ))}
        </div>

      </div>
    </div>               
  )
}


export default Watch;