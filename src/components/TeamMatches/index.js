import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    recentMatches: [],
    latestMatchDetails: {},
    teamBannerUrl: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const getTeamBannerUrl = data.team_banner_url

    const getLatestMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }

    const getRecentMatches = data.recent_matches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))
    this.setState({
      recentMatches: getRecentMatches,
      latestMatchDetails: getLatestMatchDetails,
      isLoading: false,
      teamBannerUrl: getTeamBannerUrl,
    })
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {
      teamBannerUrl,
      latestMatchDetails,
      isLoading,
      recentMatches,
    } = this.state
    return (
      <div className={id}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" className="Loader" color="aqua" />
          </div>
        ) : (
          <div>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="banner-team-image"
            />
            <p className="latest-match-text">Latest Matches</p>

            <div>
              <LatestMatch
                latestMatchDetails={latestMatchDetails}
                key={latestMatchDetails.id}
              />
            </div>
            <ul className="list-container">
              {recentMatches.map(eachItem => (
                <MatchCard key={eachItem.id} eachItem={eachItem} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
