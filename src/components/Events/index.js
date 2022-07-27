import React from 'react';
import Nav from '../shared/Nav';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import screeningsImage from '../../assets/images/screenings.png';
import * as styles from  './styles';
import { ScreeningContainer } from './styles';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'

const EVENTS_DATA = gql`
{
  filmFestivalCollection {
    items {
      festivalName
      dates
      image {
        url
      }
      description
      descriptionRich {
        json
      }
      link
      order
    }
	}
  screeningCollection {
    items {
      location
      locationName
      date
      eventDate
      moreInfo {
        json
      }
    }
	}
}`

export const Events = () => {
  const { data } = useQuery(EVENTS_DATA);


  const festivals = data?.filmFestivalCollection?.items?.map(festival => (
    <div css={styles.festivalContainerClass}>
      <a href={festival.link} target="_blank">
        <img src={festival.image.url} alt={festival.festivalName} css={styles.imageClass}/>
        <div css={styles.bottomBlockClass}>
          <div css={styles.nameClass}>
            {festival.festivalName}
          </div>
          <div css={styles.datesClass}>
            {festival.dates}
          </div>
          {festival.descriptionRich && 
            <div css={styles.descriptionClass}>
              { documentToReactComponents(festival.descriptionRich.json) }
            </div>
          }
        </div>
      </a>
   </div>
  ));
  const screeningsArray = data?.screeningCollection?.items;
  const sortedArray = screeningsArray?.sort((a, b) => new Date(b.eventDate) - new Date(a.eventDate));
  const screenings = sortedArray?.map(screening => (
    <ScreeningContainer>
      <div css={styles.screeningDateClass}>{screening.date}</div>
      <div css={styles.locationContainerClass}>
        <div css={styles.locationNameClass}>{screening.locationName}</div>
        <div css={styles.locationCityClass}>{screening.location}</div>
        <div css={styles.moreInfoClass}>{ documentToReactComponents(screening.moreInfo?.json) }</div>
      </div>
    </ScreeningContainer>
  ));

  return (
    <>
      <Nav active="events"/>
      <div css={styles.introContainerClass}>
        <div css={styles.mainTextContainerClass}>
          <div css={styles.mainTextClass}>Find or host an event</div>
        </div>
        <div css={styles.introTextClass}>
          <p>Sign up to host a screening or discussion of And She Could Be Next for your friends, neighbors, or community! After signing up, our team will follow-up to share resources and details with you on how to make it happen or help you spread the word. <br /><br />Questions? Email <a href="mailto:info@andshecouldbenext.com">info@andshecouldbenext.com</a>.</p>
          <a href="https://airtable.com/shrPwxSFaSKYrKPq5" target="_blank"><button css={styles.buttonClass}>Sign Up</button></a>
        </div>                
      </div>
      {screenings?.length > 0 && (
        <>
          <div css={styles.festivalBannerClass}>Screenings</div>
          <div css={styles.screeningsContainerClass}>
            {screenings}
          </div>
        </>
      )}
      <div css={styles.festivalBannerClass}>Women's History Month Screenings</div>
      <div css={styles.marchScreeningsContainer}>
        <img src={screeningsImage} css={styles.screeningsImageClass} alt="march screenings"/>
      </div>
      <div css={styles.festivalBannerClass}>Find an Event</div>
      <div css={styles.blueContainerClass}>
        <div css={styles.festivalsContainerClass}>
          {festivals}
        </div>
        <div css={styles.youTubeLinkClass}>Keep an eye on our <a href="https://www.youtube.com/channel/UC2yVbXsWPtmAmOd7gUHa7_g">YouTube</a> channel for upcoming panel discussions</div>
      </div>
    </>
  )
}

export default Events;
