import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="last-match-detail-container">
      <div>
        <p className="team-text">{competingTeam}</p>
        <p className="date-text">{date}</p>
        <p className="venue-text">{venue}</p>
        <p className="result-text">{result}</p>
      </div>
      <div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="team-detail-image"
        />
      </div>
      <div>
        <p className="match-detail-heading-text">First Innings</p>
        <p className="venue-text">{firstInnings}</p>
        <p className="match-detail-heading-text">Second innings</p>
        <p className="venue-text">{secondInnings}</p>
        <p className="match-detail-heading-text">Man Of The Match</p>
        <p className="venue-text">{manOfTheMatch}</p>
        <p className="match-detail-heading-text">Umpire</p>
        <p className="venue-text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
