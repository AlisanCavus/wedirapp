import {useState } from 'react'
import axios from 'axios'

const BASE_URL: string = `https://api.openweathermap.org/data/2.5/weather?&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric&q=`
const useForecast = () => {
    const [ error, setError ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)
    const [ forecast, setForecast ] = useState(null)

    const submitRequest = (location:string) => {
       const resp =  axios(`${BASE_URL}${location}`)
    }
    return {
        error, isLoading, forecast, submitRequest
    }
}

export default useForecast