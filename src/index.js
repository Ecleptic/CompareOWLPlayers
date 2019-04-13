import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useFetch, useTitleInput } from './customHooks'
import { Selector } from './Selector'
import './styles.scss'

function App() {
  const [name, setName] = useTitleInput('')

  // TODO: Custom hooks to save state after fetching a more unique url

  const [playersList, loading] = useFetch(
    'https://api.overwatchleague.com/stats/players?season=2019&stage_id=regular_season&expand=stats,stat.ranks'
  )

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
          <ComparePlayers playersList={playersList} />
        </div>
      )}
    </>
  )
}
const ComparePlayers = ({ playersList }) => {
  const [player1, setPlayer1] = useState()
  const [player2, setPlayer2] = useState()
  console.log({ playersList })
  return (
    <>
      {playersList && <Selector items={playersList} setPlayer={setPlayer1} />}
      {/* {console.log({ player1 })} */}
      {/* {player1 || (console.log({ player1 }) && <PlayerView player={player1} />)} */}
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
