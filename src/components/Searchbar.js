import { useState } from "react"
import { useContext } from "react/cjs/react.development"
import { SearchContext } from "../context/SearchContext"

export default function Searchbar(props) {
    const { term, handleSearch } = useContext(SearchContext)


    return (
        <form >
            <input ref={term} type="text" placeholder="Enter a search term here" />
            <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
        </form>
    )
}
