import React from 'react'
// import {useQuery} from "react-query"
import {topSpotifySongs2025} from "../UList/UlistOfMusic"

const useMusic = () => {
//  const {isPending, data, error} = useQuery({
//     queryKey:[''],
//     queryFn: () => fetch ('http:************=${***ApiKey}=${searchString}')
//         .then(res => res.json{})
//  })

//  if (isPending) return 'Loading...'
//  if (error) return 'An error occured: ' + error.message
//  if (data) return data

return topSpotifySongs2025
}

export default useMusic
