// Write your code here

import {Component} from 'react'

import {Link} from 'react-router-dom'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, teamCardsData: []}

  componentDidMount() {
    this.matchCardData()
  }

  matchCardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const statusCode = await response.statusCode

    console.log(statusCode)

    let data = await response.json()

    data = data.teams

    const formattedData = data.map(eachMatchCard => ({
      id: eachMatchCard.id,
      name: eachMatchCard.name,
      teamUrl: eachMatchCard.team_image_url,
    }))

    console.log(formattedData)
    this.setState({isLoading: false, teamCardsData: formattedData})
  }

  render() {
    const {isLoading, teamCardsData} = this.state
    return (
      <div className="main-bg">
       
            <div className="ipl-logo-heading">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="ipl-heading">IPL Dashboard</h1>
            </div>
            <ul className="unordered-list-styling">
              {teamCardsData.map(eachTeamCard => (
                <TeamCard teamDetails={eachTeamCard} key={eachTeamCard.id} />
              ))}
            </ul>
          
      </div>
    )
  }
}

export default Home
