import {useState } from 'react'
import axios from 'axios'
// const BASE_UNSPLASH = `https://api.unsplash.com/search/photos?page=1&client_id=tlTgLcP_PUOS5LYj0jfYQmFbRSwp_xnegEJ7UDaZErI&query=`
const BASE_URL: string = `https://api.openweathermap.org/data/2.5/weather?&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric&q=`
const useForecast = () => {
    const [ error, setError ] = useState<boolean>(false)
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    const [ forecast, setForecast ] = useState(null)
    // const [ background, setBackground ] = useState<any>(null)


    const submitRequest = async (location:string) => {
        setIsLoading(true)
       const {data} = await axios(`${BASE_URL}${location}`)
        
       
       
        if (!data || data.lenght === 0) {
            setError(true)
            return
        } else {
            setIsLoading(false)
            setForecast(data)
        }
    }

    // const submitBg = async (location:string) => {
    //     const { data } = await axios(`${BASE_UNSPLASH}${location}`)

    //     if (!data || data.lenght === 0) {
    //         setError(true)
    //         return
    //     } else {
    //         setIsLoading(false)
    //         setBackground(data.results[0])
    //     }
    // }

   
    return {
        error, isLoading, forecast, submitRequest ,setError, 
    }
}

export default useForecast