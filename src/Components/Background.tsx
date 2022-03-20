import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface Props {
  search: string
}

function Background( {search}:Props ) {


    const[ img , setImg ] = useState<any>([])
    const[ loading, setLoading ] = useState<boolean>(true)

    useEffect(() => {

      const fetchData = () => {
        axios 
            .get(`${apiRoot}${search}&client_id=${accessKey}`)
            // .get(`${apiRoot}brussels&client_id=${accessKey}`)
            .then(res => setImg([ ...img, res.data]))
      }
        
        const apiRoot = "https://api.unsplash.com/photos/random/?query="
        const accessKey = process.env.REACT_APP_UNSPLASH_API_KEY

        
        fetchData()
      
        
        return () => {
          if (img) {
            setLoading(false)
          }
          
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

   console.log(img)

  return (
    <div>
        { loading ? (<img alt='searchimg' src="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"  className="w-screen h-screen opacity-70 z-0 absolute top-0 left-0"/>) : 
        (<img alt='searchimg' src={img[0].urls.full}  className="w-screen h-screen opacity-70 z-0 absolute top-0 left-0"/>)}
   </div>
  )
}

export default Background