import React, { useEffect } from 'react'
import {useState} from 'react'
import HomeDisplay from './components/HomeDisplay';
import MusicSearchSection from './components/MusicSearchSection'

import './App.css'

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {

  const [searchString, setsearchString] = useState
  const queryClient = new QueryClient()
  const [music, setMusic] = useState

  useEffect(() => {
    if (searchString) {
      const musicFromApi = useMusic(searchString)
    }
  })
  
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1 className='text-center text-2xl text-slate-900 bg-sky-500'>Music player App</h1>
        <MusicSearchSection searchString={searchString} setsearchString={setsearchString} />
        <homeDisplay/>
      </div>
    </QueryClientProvider>
  );
}

export default App
