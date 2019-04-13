import { useEffect, useState } from 'react'

function useFetch(url) {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	async function fetchUrl() {
		const response = await fetch(url)
		const json = await response.json()
		// console.log(json)
		setData(json)
		setLoading(false)
	}
	useEffect(() => {
		fetchUrl()
	}, [])
	return [data, loading]
}

function useTitleInput(initialValue) {
	const [value, setValue] = useState(initialValue)

	useEffect(() => {
		document.title = value
	})
	return [value, setValue]
}

function useGetPlayerDetails(player) {
	console.log('got player in getDetails', player)

	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)

	async function getPlayerDetails() {
		const response = await fetch(
			`https://api.overwatchleague.com/players/${
				player.playerId
			}?locale=en-us&season=2019&stage_id=regular_season&expand=stats,stat.ranks`
		)
		const json = await response.json
	}
	useEffect(() => {
		getPlayerDetails()
	}, [])
	return [data, loading]
}
export { useFetch, useGetPlayerDetails, useTitleInput }
