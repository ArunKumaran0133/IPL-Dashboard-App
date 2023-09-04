import './index.css'

const MatchCard = props => {
  const {eachItem} = props

  const {competingTeam, competingTeamLogo, matchStatus, result} = eachItem

  return (
    <li>
      <div className="match-card-item-container">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="match-card-image"
        />
        <p className="heading-text">{competingTeam}</p>
        <p className="match-card-result-text">{result}</p>
        <p className={matchStatus}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
