import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

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
