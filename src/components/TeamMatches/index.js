// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamBanner: {},
  }

  componentDidMount() {
    this.getTeamMatchData()
  }

  getTeamMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/ipl/${id}`)

    const statusCode = await response.statusCode
    console.log(statusCode)

    let data = response.json()

    data = data.team_banner_url
    console.log(data)
    this.setState({isLoading: false, teamBanner: data})
  }

  renderTeamMatches = () => {
    const {teamBanner} = this.state
    return (
      <div>
        <img src={teamBanner} className="team-image-styling" alt="teamBanner" />
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="team-match-main-bg">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
