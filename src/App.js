import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import Searchbar from './components/Searchbar'
import './App.css'

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])

  let fetchURL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        document.title = `${search} Music`
        const response = await fetch(fetchURL + search)
        const resData = await response.json()
        console.log(resData)
        if (resData.results.length > 0) {
          setData(resData.results)
        } else {
          setMessage('Not Found')
        }
      }
      fetchData()
    }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div className='App'>
      <Searchbar handleSearch={handleSearch} />
      {message}
      <Gallery data={data} />
    </div>
  )
}

export default App
