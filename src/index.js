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
import { PlayerView } from './playerView'
import './styles.scss'

function App() {
  const [name, setName] = useTitleInput('')
  const [player1, setPlayer1] = useState()

  // TODO: Custom hooks to save state after fetching a more unique url

  const [playersList, loading] = useFetch(
    'https://api.overwatchleague.com/stats/players?season=2019&stage_id=regular_season&expand=stats,stat.ranks'
  )

  const setPlayerDetails = async playerInfo => {
    console.log({ playerInfo })
    const response = await fetch(
      `https://api.overwatchleague.com/players/${
        playerInfo.playerId
      }?locale=en-us&season=2019&stage_id=regular_season&expand=stats,stat.ranks`
    )
    const json = await response.json()
    console.log(json)
    setName(json.data.player.name)
    setPlayer1(json)
  }

  return (
    <>
      <label>Title: </label>
      <input type="text" onChange={e => setName(e.target.value)} value={name} />
      {loading ? (
        <div className="App">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="App">
          <h1>Hello</h1>
          <ComparePlayers
            playersList={playersList}
            setPlayerDetails={setPlayerDetails}
            player1={player1}
          />
        </div>
      )}
    </>
  )
}
const ComparePlayers = ({ playersList, setPlayerDetails, player1 }) => {
  console.log({ playersList })
  return (
    <>
      {playersList && (
        <Selector items={playersList} setPlayer={setPlayerDetails} />
      )}
      {console.log({ player1 })}
      {player1 && <PlayerView player={player1} />}
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
