import React from 'react';
import { Query } from 'react-contentful';
import Nav from '../shared/Nav';
import * as styles from  './styles';
import { default as theme } from '../../theme';

export const Events = () => {
  return (
    <>
      <Nav active="events"/>
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
                  {/* <div css={styles.descriptionClass}>
                    {festival.fields.description}
                  </div> */}
                </div>
              </a>
           </div>
          ));
          return (
            <>
              <div css={styles.introContainerClass}>
                <div css={styles.mainTextContainerClass}>
                  <div css={styles.mainTextClass}>Find or host an event</div>
                </div>
                <div css={styles.introTextClass}>
                  <p>Sign up to host a screening or discussion of And She Could Be Next for your friends, neighbors, or community! After signing up, our team will follow-up to share resources and details with you on how to make it happen or help you spread the word. <br /><br />Questions? Email <a href="mailto:stepintopower@andshecouldbenext.com">stepintopower@andshecouldbenext.com</a>.</p>
                  <a href="https://airtable.com/shrPwxSFaSKYrKPq5" target="_blank"><button css={styles.buttonClass}>Sign Up</button></a>
                </div>                
              </div>
              <div css={styles.blueContainerClass}>
                <div css={styles.festivalBannerClass}>Find an Event</div>
                <div css={styles.festivalsContainerClass}>
                  {festivals}
                </div>
                <div css={styles.youTubeLinkClass}>Keep an eye on our <a href="https://www.youtube.com/channel/UC2yVbXsWPtmAmOd7gUHa7_g">YouTube</a> channel for upcoming panel discussions</div>
              </div>
            </>
          )
        }}
      </Query>
    </>
  );
}

export default Events;
