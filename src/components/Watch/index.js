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
import { EpisodeContainer, BonusEpisodeContainer } from './styles';
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
        {/* <div css={styles.episodesContainerClass}>
          {data?.episodeCollection.items.map(episode => (
            <EpisodeContainer order={episode.order}>
              <div css={styles.videoContainerClass}>
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
            </EpisodeContainer>
          ))}
        </div> */}
        {/* <div css={styles.bannerClass}>Other Ways to Watch</div> */}
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
            <a href="https://www.andshecouldbenext.com/store" target="_blank">Visit our Online Store</a>
          </div>
          <div css={styles.sectionClass}>
            <div css={styles.titleClass}>Educational</div>
            <a href="https://shop.pbs.org/WA5732AV.html" target="_blank">Buy the Educational DVD</a>
            <a href="https://cptv.pbslearningmedia.org/collection/and-she-could-be-next-collection/" target="_blank">PBS Learning Media: Education Collection</a>
            <a href="https://www.kanopy.com/product/and-she-could-be-next" target="_blank">Kanopy</a>
            <a href="https://search.alexanderstreet.com/search?ff[0]=video_series_facet:And%20She%20Could%20Be%20Next,%20Season%201&sort_by=real_title_sort&sort_order=ASC" target="_blank">Alexander Street Press</a>
            <a href="#">ASCBN Exclusive Clips & Materials (Coming Soon)</a>
          </div>
          <div css={styles.sectionClass}>
            <div css={styles.titleClass}>Host a screening</div>
              {/* <p>Sign up to host a screening or discussion of And She Could Be Next for your friends, neighbors, or community! After signing up, our team will follow-up to share resources and details with you on how to make it happen or help you spread the word. <br /></p> */}
              <a href="mailto:info@andshecouldbenext.com">Email us to request a screening</a>
            <div css={styles.titleClassWithMargin}>Outside the US?</div>
            <p>Coming soon!</p>
            {/* <a href="https://shop.pbs.org/WA5732AV.html" target="_blank">Sign up to get notified</a> */}
            {/* <Form /> */}
          </div>
        </div>
        <div css={styles.bannerClass}>Bonus Content</div>
        <div css={styles.containerClass}>
          <BonusEpisodeContainer>
            <div css={styles.bonusVideoContainerClass}>
              <div css={styles.iFrameWrapperClass}>
                <div css={styles.iFrameInnerClass}>
                  <iframe
                    src="https://www.youtube.com/embed/gx4ge2Hiv9Q"
                    css={styles.iFrameStyleClass}
                    allowFullScreen
                    title="And She Could Be Next Exclusive"
                    scrolling="no"
                    allow="encrypted-media"
                  />
                </div>
              </div>
            </div>
          </BonusEpisodeContainer>
          <BonusEpisodeContainer>
            <div css={styles.descriptionClass}>
              In 2018, Congresswoman Deb Haaland, a 35th generation New Mexican who is an enrolled member of the Pueblo of Laguna, and also has Jemez Pueblo heritage, became one of the first two Native American women ever elected to Congress, along with Sharice Davids. This short film, directed by Navajo filmmaker Ramona Emerson, follows Deb Haaland in her history-making 2018 run as she builds a diverse, multi-racial coalition that would elect her to power. With close-up access at home and as she visits To'hajiilee, Congresswoman Haaland shares the formative experiences that shaped her, and uniquely position her to be a champion for the people of New Mexico, as we look forward to the next class of Native women being elected in November. 
            </div>
          </BonusEpisodeContainer>
        </div>
      </div>
    </div>               
  )
}


export default Watch;