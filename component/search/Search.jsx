import React from 'react'
import { BsSearch } from 'react-icons/bs'

const Search = () => {
  return (
    <div>
      <form action="">
        <div>
            <input type="text" placeholder='Search Sity' />
        </div>
        <button>
            <BsSearch/>
        </button>
      </form>
    </div>
  )
}

export default Search
