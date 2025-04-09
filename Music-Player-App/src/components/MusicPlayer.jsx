import React from 'react'

const MusicPlayer = (props) => {
    const {music} = props
  return (
    <div>
      <img src="{music.poster}" alt="{music.title}" />
      <h1>{music.title}</h1>
      <p>{music.year}</p>

    </div>
  )
}

export default MusicPlayer
