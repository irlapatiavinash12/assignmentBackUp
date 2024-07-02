// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamUrl} = teamDetails
  return (
    <Link to={`/ipl/${id}`} className="item-link">
      <li className="list-item-styling">
        <img src={teamUrl} alt={name} className="image-styling" />
        <h2 className="team-name">{name}</h2>
      </li>
    </Link>
  )
}

export default TeamCard
