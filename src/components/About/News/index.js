import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Query } from 'react-contentful';
import pressImage from '../../../assets/images/presskit.png'
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
                <a href="../../../assets/AndSheCouldBeNextPressKitFinal.pdf" taget="_blank">
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
