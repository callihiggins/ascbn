import React from 'react';
import { Query } from 'react-contentful';
import pressImage from '../../../assets/images/presskit.png'
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
                <a href='https://drive.google.com/file/d/1fUe0AG55MiwhrwNAjB1-VK8VWgQtWZJN/view' download taget="_blank">
                  <img src={pressImage} alt="Download our Press Kit" />
                </a>
              </div>
            </div>
          </>
        )
      }}
    </Query>
  )
}

export default News;
