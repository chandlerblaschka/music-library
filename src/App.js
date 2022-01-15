import { useEffect, useState, useRef } from 'react'
import Gallery from './components/Gallery'
import Searchbar from './components/Searchbar'
import './App.css'
import { DataContext } from './context/DataContext'
import { SearchContext } from './context/SearchContext'

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])
  let searchInput = useRef('')

  let fetchURL = 'https://itunes.apple.com/search?term='

  const handleSearch = (e, term) => {
    e.preventDefault()
    const fetchData = async () => {
      document.title = `${search} Music`
      const response = await fetch(fetchURL + term)
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

  return (
    <div className='App'>
      <SearchContext.Provider
        value={{
          term: searchInput,
          handleSearch: handleSearch
        }}>
        <Searchbar />
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value={data}>
        <Gallery data={data} />
      </DataContext.Provider>
    </div>
  )
}

export default App
