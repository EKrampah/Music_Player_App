import React from 'react'

const MusicSearchSection = (props) => {
  const {searchString, setsearchString, setMusic} = props
  return (
    <div>
      <input type="text" 
      placeholder='Search for your favorite music' 
      className='w-full p-2 border border-gray-300 rounded'
      value={searchString} 
      onchange={(e) => setsearchString(e.target.value)} />
      <button onClick={() => useMusic(searchString)}>Search</button>
    </div>
  )
}

export default MusicSearchSection

