import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import './styles.scss'
import { PlayerView } from './playerView'
import { useFetch } from './useFetch'
import { Selector } from './Selector'

function App() {
  // TODO: Custom hooks to save state after fetching a more unique url
  const [player1, setPlayer1] = useState()
  const [player2, setPlayer2] = useState()
  const [players, loading] = useFetch(
    // 'https://jsonplaceholder.typicode.com/photos?albumId=1'
    'https://api.overwatchleague.com/stats/players?season=2019&stage_id=regular_season&expand=stats,stat.ranks'
    // 'https://api.overwatchleague.com/players/8896?locale=en-us&season=2019&stage_id=regular_season&expand=stats,stat.ranks'
  )
  const [muma, loadingMuma] = useFetch(
    'https://api.overwatchleague.com/players/4623?locale=en-us&season=2019&stage_id=regular_season&expand=stats,stat.ranks'
  )

  // console.log(muma)
  // const muma =
  // 	player &&
  // 	player.data &&
  // 	player.data.find(p => {
  // 		// console.log(p.name)
  // 		return p.name.toUpperCase() === 'MUMA'
  // 	})
  const oge =
    players &&
    players.data &&
    players.data.find(p => {
      // console.log(p.name)
      return p.name.toUpperCase() === 'OGE'
    })
  return (
    <>
      {loading ? (
        <div className="App">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          {players && <Selector items={players} setPlayer={setPlayer1} />}
          {player1 ||
            (console.log({ player1 }) && <PlayerView player={player1} />)}
          {/* <div id="player1_data" className="data">
            {!loadingMuma && <PlayerView player={muma} />}
          </div> */}
        </div>
      )}
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
