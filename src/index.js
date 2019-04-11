import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'

import './styles.css'

function App() {
	const [heroes, loading] = useFetch(
		'https://jsonplaceholder.typicode.com/photos?albumId=1'
		// 'https://api.overwatchleague.com/stats/players'
	)

	return (
		<>
			{loading ? (
				<div className="App">
					<h1>Loading...</h1>
				</div>
			) : (
				<div className="App">
					<h1>Hello CodeSandbox</h1>
					<h2>Start editing to see some magic happen!</h2>
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
		setData(json)
		setLoading(false)
	}
	useEffect(() => {
		fetchUrl()
	}, [])
	return [data, loading]
}
export { useFetch }
