import React from 'react'

import {useMusic} from '../hooks/useMusic';
import MusicPlayer from './MusicPlayer';


const HomeDisplay = () => {
    const music = useMusic()

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">

        
      {/*   
            -get data from api
            -stroe it in our state/localstorage 
            -loop through data and render in musicPlayer card component
      */}
        {music && music.map((music) =>
            <MusicPlayerCard music={music} />
        )}
        {music.length === 0 && <p className='text-center'>No music to show</p>}

    </div>
  );
}

export default HomeDisplay

