import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import Person from './Person';
import * as styles from './styles.js'

const TEAM_DATA = gql`
{
  teamMemberCollection(limit: 16) {
		items {
			name
			bio {
				json
			}
			order
			title
			photo {
        url
			}
		}
	}
}`

const Team = () => {
  const { data } = useQuery(TEAM_DATA);
	const teamData = data?.teamMemberCollection?.items.map(
    data => <Person data={data} />
  )
  return (
    <div id="filmmakers">
      <div css={styles.teamBannerClass}>Meet the team</div>
      <div css={styles.teamContainerClass}>
        <div css={styles.peopleContainerClass}>
          {teamData}
        </div>
        <div css={styles.imdbClass}>
          For full team credits, visit <a href="https://www.imdb.com/title/tt12131392" taget="_blank">Episode One</a> and <a href="https://www.imdb.com/title/tt12131394" taget="_blank">Episode One</a> on IMDB.
        </div>
      </div>
    </div>
  )
}

export default Team;
