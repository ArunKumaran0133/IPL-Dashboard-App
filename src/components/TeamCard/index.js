import {Link} from 'react-router-dom'
import {Component} from 'react'

import './index.css'

class TeamCard extends Component {
  render() {
    const {eachItem} = this.props
    const {name, teamImageUrl, id} = eachItem
    return (
      <Link to={`/team-matches/${id}`} className="link">
        <li className="team-item-container">
          <img src={teamImageUrl} alt={name} className="team-image" />
          <p className="Team-name-text">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
