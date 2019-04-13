/**
 * Steps:
 * 1. on page load, get list of OWL players.
 * 2. search for p1.
 * 3. on p1. selection, fetch details of p1.
 * 4. on details load, place details in component.
 * 5. repeat steps 2-4 for player 2.
 *
 */

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useFetch, useTitleInput, useGetPlayerDetails } from './customHooks'
import { Selector } from './Selector'
import './styles.scss'

function App() {
  const [player1, setPlayer1] = useState()
  const [player2, setPlayer2] = useState()
  const [title, setTitle] = useTitleInput(
    `${player1 ? player1 : 'Player'} vs ${player2 ? player2 : 'Player'}`
  )

  const [playersList, loading] = useFetch(
    'https://api.overwatchleague.com/stats/players?season=2019&stage_id=regular_season&expand=stats,stat.ranks'
  )

  const setPlayer1Details = async playerInfo => {
    console.log({ playerInfo })
    const response = await fetch(
      `https://api.overwatchleague.com/players/${
        playerInfo.playerId
      }?locale=en-us&season=2019&stage_id=regular_season&expand=stats,stat.ranks`
    )
    const json = await response.json()
    console.log(json)
    setPlayer1(json)
    setTitle()
  }

  const setPlayer2Details = async playerInfo => {
    console.log({ playerInfo })
    const response = await fetch(
      `https://api.overwatchleague.com/players/${
        playerInfo.playerId
      }?locale=en-us&season=2019&stage_id=regular_season&expand=stats,stat.ranks`
    )
    const json = await response.json()
    console.log(json)
    setPlayer2(json)
    setTitle()
  }

  return (
    <>
      {loading ? (
        <div className="App">
          <h1>Loading...</h1>
        </div>
      ) : (
        <ComparePlayers
          playersList={playersList}
          setPlayer1Details={setPlayer1Details}
          setPlayer2Details={setPlayer2Details}
          player1={player1}
          player2={player2}
        />
      )}
    </>
  )
}

const PlayerComparison = ({ player1, player2 }) => {
  /**
   *
   * Structured Table
   *
   * 1. Player Icon/name/number
   * 2. Stat as {hero} on {map} (simplify to hero?) [Maybe 'Stat as {hero} in Season 2?]
   * 3. Stats in bold letters
   *
   */

  return (
    <>
      <PlayerStatsCard player={player1} />
      <PlayerStatsCard player={player2} />
      <HeroTable player1={player1} player2={player2} />
    </>
  )
}
const ComparePlayers = ({
  playersList,
  setPlayer1Details,
  setPlayer2Details,
  player1,
  player2,
}) => {
  console.log({ playersList })
  return (
    <div className="comparePlayers">
      <div className="playerInfo">
        {playersList && (
          <Selector
            className="selector"
            items={playersList}
            setPlayer={setPlayer1Details}
          />
        )}
      </div>
      <div className="playerInfo">
        {playersList && (
          <Selector
            className="selector"
            items={playersList}
            setPlayer={setPlayer2Details}
          />
        )}
      </div>
      {player1 && player2 && (
        <PlayerComparison player1={player1} player2={player2} />
      )}
    </div>
  )
}

const HeroTable = ({ player1, player2 }) => {
  console.log({ player1, player2 })
  return (
    <div className="heroTable">
      <table>
        <thead>
          <tr colSpan="3" align="center">
            <th colSpan="3" align="center">
              Stats per 10 min. Stage 2
            </th>
          </tr>
        </thead>
        <tbody className="heroTable_body">
          <tr>
            <td className="heroTable_body-stats">
              {Math.round(player1.data.stats.all.deaths_avg_per_10m)}
            </td>
            <th>Deaths</th>
            <td className="heroTable_body-stats">
              {Math.round(player2.data.stats.all.deaths_avg_per_10m)}
            </td>
          </tr>
          <tr />
          <tr>
            <td className="heroTable_body-stats">
              {Math.round(player1.data.stats.all.eliminations_avg_per_10m)}
            </td>
            <th>Eliminations</th>
            <td className="heroTable_body-stats">
              {Math.round(player2.data.stats.all.eliminations_avg_per_10m)}
            </td>
          </tr>
          <tr />
          <tr>
            <td className="heroTable_body-stats">
              {Math.round(player1.data.stats.all.final_blows_avg_per_10m)}
            </td>
            <th>Final Blows</th>
            <td className="heroTable_body-stats">
              {Math.round(player2.data.stats.all.final_blows_avg_per_10m)}
            </td>
          </tr>
          <tr />
          <tr>
            <td className="heroTable_body-stats">
              {Math.round(player1.data.stats.all.healing_avg_per_10m)}
            </td>
            <th>Healing</th>
            <td className="heroTable_body-stats">
              {Math.round(player2.data.stats.all.healing_avg_per_10m)}
            </td>
          </tr>
          <tr />
          <tr>
            <td className="heroTable_body-stats">
              {Math.round(player1.data.stats.all.hero_damage_avg_per_10m)}
            </td>
            <th>Damage</th>
            <td className="heroTable_body-stats">
              {Math.round(player2.data.stats.all.hero_damage_avg_per_10m)}
            </td>
          </tr>
          <tr />
          <tr>
            <td className="heroTable_body-stats">
              {Math.round(player1.data.stats.all.time_played_total)}
            </td>
            <th>Time Played</th>
            <td className="heroTable_body-stats">
              {Math.round(player2.data.stats.all.time_played_total)}
            </td>
          </tr>
          <tr />
          <tr>
            <td className="heroTable_body-stats">
              {Math.round(player2.data.stats.all.ultimates_earned_avg_per_10m)}
            </td>
            <th>Ultimates</th>
            <td className="heroTable_body-stats">
              {Math.round(player1.data.stats.all.ultimates_earned_avg_per_10m)}
            </td>
          </tr>
        </tbody>
      </table>
      {/* <ul className="heroTable">
        <li>
          <ul>
            <li className="heroTable_statsItem">
              {Math.round(player1.data.stats.all.deaths_avg_per_10m)}
            </li>
            <li className="heroTable_statsHead">Deaths</li>
            <li className="heroTable_statsItem">
              {Math.round(player2.data.stats.all.deaths_avg_per_10m)}
            </li>
          </ul>
        </li>
      </ul> */}
    </div>
  )
}

const PlayerStatsCard = ({ player }) => {
  return (
    <div className="playerStatsCard">
      <img
        src={player.data.player.headshot}
        alt={`${player.data.player.name}'s Headshot`}
      />
      <div className="nameInfo">
        <span className="realName">{player.data.player.givenName}</span>
        <span className="realName">{player.data.player.familyName}</span>
        <span className="playerName">{player.data.player.name}</span>
        <span className="player">
          {player.data.player.attributes.player_number}
          {player.data.player.attributes.role}
        </span>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
