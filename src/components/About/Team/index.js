import React from 'react';
import { withTheme } from 'styled-components';
import { Query } from 'react-contentful';
import Person from './Person';
import * as styles from './styles.js'


const Team = () => (
  <Query contentType="teamMember">
    {({data, error, fetched, loading}) => {
      const teamData = data?.items?.map(data => <Person data={data.fields} />)
      return (
        <>
          <div css={styles.teamBannerClass}>Meet the team</div>
          <div css={styles.teamContainerClass}>
            <div css={styles.peopleContainerClass}>
              {teamData}
            </div>
          </div>
        </>
      )
    }}
  </Query>
)
export default withTheme(Team);