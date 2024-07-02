// Write your code here

import {Component} from 'react'

import './index.css'

class LatestMatch extends Component {
  state = {latestMatchDetails: {}}

  componentDidMount = () => {
    this.getLatestMatchDetails()
  }

  getLatestMatchDetails = () => {
    const {latestMatchDetails} = this.state

    const {match} = this.props

    const {params} = match

    const {id} = params

    const response = fetch(`https://apis.ccbp.in/ipl/${id}`)

    const statusCode = response.statusCode

    console.log(statusCode)

    let data = response.json()

    data = data.latest_match_details

    const formattedData = {
      umpires: data.umpires,
      result: data.result,
      manOfTheMatch: data.man_of_the_match,
      id: data.id,
      date: data.date,
      venue: data.venue,
      competingTeam: data.competing_team,
      competingTeamLogo: data.competing_team_logo,
      firstInnings: data.first_innings,
      secondInnings: data.second_innings,
      matchStatus: data.match_status,
    }

    this.setState({latestMatchDetails: formattedData})
  }

  render() {
    const {latestMatchDetails} = this.state

    const {
      umpires,
      result,
      manOfTheMatch,
      id,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      matchStatus,
    } = latestMatchDetails

    return (
      <div>
        <p>Latest Matches</p>
        <div className="matchDetails">
          <div className="venue-details">
            <h2>{competingTeam}</h2>
            <h3>{date}</h3>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={competingTeam}
            className="competing-logo"
          />
          <div className="playerDetails">
            <h3>First Innings</h3>
            <p>{firstInnings}</p>
            <h3>Second Innings</h3>
            <p>{secondInnings}</p>
            <h3>Man Of The Match</h3>
            <p>{manOfTheMatch}</p>
            <h3>Umpires</h3>
            <p>{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}
