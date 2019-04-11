import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'

import './styles.scss'

function App() {
	const [player, loading] = useFetch(
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
		player &&
		player.data &&
		player.data.find(p => {
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

					<div>
						<h3>Muma:</h3>
						<ul>
							{!loadingMuma &&
								Object.entries(muma.data.stats.all).map(([key, item]) => {
									return (
										<li key={key}>
											{key}:{item}
										</li>
									)
								})}
						</ul>
					</div>
				</div>
			)}
		</>
	)
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

function useFetch(url) {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	async function fetchUrl() {
		const response = await fetch(url)
		const json = await response.json()
		console.log(json)
		setData(json)
		setLoading(false)
	}
	useEffect(() => {
		fetchUrl()
	}, [])
	return [data, loading]
}
export { useFetch }
