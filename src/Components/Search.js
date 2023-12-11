import React from 'react'
import { useGlobalContext } from './Context'

// import { AppContext } from './Context';

const Search = () => {
  const { query, searchPost } = useGlobalContext()
  
  return (
    <>
    <div>
      <h1>Wlcome to my website</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input type="text" placeholder='search Here' value={query} onChange={(e) => searchPost(e.target.value)} />
        </div>
      </form>
    </div>
    </>
  )
}

export default Search