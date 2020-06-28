import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import pressImage from '../../../assets/images/presskit_extrawide.png'
import womanImage from '../../../assets/images/woman_poster.jpg'
import * as styles from './styles';

const PRESS_DATA = gql`
{
  pressItemCollection {
		items {
			url
      title
      publisher
      publicationDate
		}
	}
}`

const News = () => {
  const [showAll, setShowAll] = useState(false);
  const { data } = useQuery(PRESS_DATA);
  const items = data?.pressItemCollection?.items.slice().sort((a, b) => new Date(b.publicationDate) - new Date(a.publicationDate))
  const links = items?.map(link => <a css={styles.pressLinkClass} href={link.url} target="_blank" rel="noopener noreferrer"><span css={styles.publisherClass}>{link.publisher}</span> | {link.title}</a> )
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
}

export default News;
