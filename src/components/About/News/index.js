import React from 'react';
import { Query } from 'react-contentful';
import pressImage from '../../../assets/images/presskit_extrawide.png'
import womanImage from '../../../assets/images/woman_poster.jpg'
import pressPdf from '../../../assets/AndSheCouldBeNextPressKit.pdf'

import * as styles from './styles';

const News = () => {
  return (
    <Query contentType="pressItem">
      {({data, error, fetched, loading}) => {
        
      const links = data?.items.map(link => <a css={styles.pressLinkClass} href={link.fields.url} target="_blank" rel="noopener noreferrer">{link.fields.title}</a> )
        return (
          <>
            <div css={styles.pressBannerClass}>Press</div>
            <div css={styles.pressContainerClass}>
              <div css={styles.leftSideClass}>
                {links}
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
