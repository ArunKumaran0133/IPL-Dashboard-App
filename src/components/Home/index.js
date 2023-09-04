import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamData: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardDetails()
  }

  getTeamCardDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()

    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    console.log(formattedData)

    this.setState({teamData: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, teamData} = this.state
    return (
      <div className="ipl-bg-container">
        <div className="logo-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>

        <ul className="list-container">
          {isLoading ? (
            <div data-testid="loader" className="loader">
              <Loader type="TailSpin" color="aqua" />
            </div>
          ) : (
            teamData.map(eachItem => (
              <TeamCard key={eachItem.id} eachItem={eachItem} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default Home
