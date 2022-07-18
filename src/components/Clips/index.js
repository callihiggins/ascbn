import React, { useState } from 'react';
import Nav from '../shared/Nav';
import ReactPlayer from 'react-player'
import { useQuery } from '@apollo/react-hooks';
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import gql from 'graphql-tag'
import * as styles from  './styles';
import * as sharedstyles from  '../shared/styles';
import { default as theme } from '../../theme';

const CLIPS_DATA = gql`
  {
    clipCollection(order: [sys_firstPublishedAt_ASC]) {
      items {
        vimeoUrl
        name
        clipDescription
        contentfulMetadata {
          tags {
            id
            name
          }
        }
      }
    }
  }`

export const Clips = () => {
  const [selectedOption, setSelectedOption] = useState();
  const { data } = useQuery(CLIPS_DATA);
  const uniqueTags = [];
  for (let i = 0; i < data?.clipCollection.items.length; i++) {
    data.clipCollection.items[i].contentfulMetadata.tags.map(tag => {
      if (!uniqueTags.some(item => item.id === tag.id)) uniqueTags.push({ id: tag.id, name: tag.name })
    })
  }
  const tagSelections = uniqueTags.map(tag => <option value={tag.id}>{tag.name}</option>)

  const clips = data?.clipCollection.items
    .filter(item => {
      if (selectedOption && selectedOption !== "showAll") {
        return item.contentfulMetadata.tags.some(tag => tag.id === selectedOption)
      }
      return true
    })
    .map((clip, idx) => (
      <motion.div 
        css={styles.clipClass}
        key={idx}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div css={styles.playerWrapperClass}>
          <ReactPlayer
            url={clip.vimeoUrl}
            controls
            light
            css={styles.reactPlayerClass}
            vimeoConfig={{preload: true}}
            width='100%'
            height='100%'
          />
        </div>
        <a href={clip.vimeoUrl} target="_blank" rel="noopener noreferrer">
          <div css={styles.clipDetailsClass}>
            <div css={styles.clipName}>
              {clip.name}
            </div>
            <div css={styles.clipDescription}>
              {clip.clipDescription}
            </div>
          </div>
        </a>
      </motion.div>
    )
  )
  return (
    <div id="clips">
      <Nav active='clips'/>
      <div css={styles.containerClass}>
        <div css={styles.mainTextClass}>Impact Videos</div>
        <div css={styles.introTextClass}>
          We welcome you to use our free library of clips in your own organizing, trainings, community building, and education work around elections. Using the dropdown menu, you can find clips grouped by category. All the clips are under 5 minutes, and we hope they will help spark engaged discussions in your communities.
        </div> 
        <div css={styles.dropdownContainerClass}>Filter by:
         <select onChange={e => setSelectedOption(e.target.value)}>
          <option disabled selected>Choose Topic</option>
          <option value="showAll" >Show All</option>
          {tagSelections}
         </select>
        </div>
        <div layout css={styles.clipsContainerClass} >
          <AnimatePresence>
            {clips}
          </AnimatePresence>
        </div>
      </div>
    </div>               
  )
}


export default Clips;