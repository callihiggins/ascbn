import React, { useState } from 'react';
import { Query } from 'react-contentful';
import pressImage from '../../../assets/images/presskit_extrawide.png'
import womanImage from '../../../assets/images/woman_poster.jpg'
import pressPdf from '../../../assets/AndSheCouldBeNextPressKit.pdf'

import * as styles from './styles';

const News = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <Query contentType="pressItem">
      {({data, error, fetched, loading}) => {
      const items = data?.items.slice().sort((a, b) => new Date(b.fields.publicationDate) - new Date(a.fields.publicationDate))
      const links = items?.map(link => <a css={styles.pressLinkClass} href={link.fields.url} target="_blank" rel="noopener noreferrer"><span css={styles.publisherClass}>{link.fields.publisher}</span> | {link.fields.title}</a> )
      const firstFive = links?.slice(0, 4);
        return (
          <>
            <div css={styles.pressBannerClass}>Press</div>
            <div css={styles.pressContainerClass}>
              <div css={styles.leftSideClass}>
                {!showAll && firstFive}
                {showAll && links}
                {links?.length > 4 && !showAll && <div css={styles.showMoreClass} onClick={()=> setShowAll(true)}><span>See more</span></div>}
              </div>
              <div css={styles.rightSideClass}>
                <img src={womanImage} alt="And She Could Be Next Poster" />
              </div>
            </div>
            <div css={styles.bottomPosterClass}>
              <a href='https://drive.google.com/file/d/1fUe0AG55MiwhrwNAjB1-VK8VWgQtWZJN/view' download target="_blank">
                <img src={pressImage} alt="Download our Press Kit" />
              </a>
            </div>
            
          </>
        )
      }}
    </Query>
  )
}

export default News;
