import React from 'react'

const Search = ({serachTerm , setSearchTerm}) => {
  return (
    <div className='search'>
      <div>
        <img src="./search.png" alt="search" />
        <input type="text"
        placeholder='Search through thousands of movies' 
        value={serachTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        
      </div>
    </div>
  )
}

export default Search
