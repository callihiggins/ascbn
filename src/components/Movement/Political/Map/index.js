import React, { useState, useEffect } from 'react';
import { readRemoteFile } from 'react-papaparse';
import ReactTooltip from 'react-tooltip';
import USAMap from './USAMap/src';
import mapInfo from '../../../../assets/mapInfo.csv';
import * as styles from './styles';

const Map = () => {

  const colors = ['#004564', '#009E9B', '#8DD1C3',];
  const mapData = {};
  const toolTips = [];
  const [mapConfig, setMapConfig] = useState(false);
  const [tipsArray, setTipsArray] = useState([]);


  const colorRandomizer = () => {
    const whichColor = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    return colors[whichColor];
  }

  const buildToolTipTemplate = (name, url) => {
      return <a href={url} target="_blank">{name}</a>;
  }

  const buildToolTips = (stateAbbr, organizations) => {
    toolTips.push(
      <ReactTooltip css={styles.tooltipClass} id={stateAbbr} globalEventOff='click' clickable={true} arrowColor='#F26D65' delayHide={1000}>
        <ul>
          {organizations.map(organization => <li>{organization}</li>)}
        </ul>
      </ReactTooltip>
    );
  }

  const buildMapData = data => {
    data.map(stateData => {
      const stateAbbr = stateData[0];
      const organizations = [];
      for (let i = 1; i < stateData.length - 1; i+= 2) {
        organizations.push(buildToolTipTemplate(stateData[i], stateData[i + 1], stateAbbr));
      }
      buildToolTips(stateAbbr, organizations); 
      Object.assign(mapData,
        {
          [stateAbbr]: {
            fill: colorRandomizer(),
            organizations
          }
        }
      )
    })
    return mapData;
  }
   
  useEffect(() => {
    if (!mapConfig) {
      readRemoteFile(mapInfo, {
        complete: function(results) {
          setMapConfig(buildMapData(results.data))
          setTipsArray(toolTips);
          console.log(toolTips)
        }
      });
    }

    ReactTooltip.rebuild()
  });
  
  return (
    <div css={styles.mapContainerClass}>
      <USAMap customize={mapConfig} />
      <div>
        {tipsArray.map(tooltip => tooltip)}
      </div>
    </div>
  )
}

export default Map;
