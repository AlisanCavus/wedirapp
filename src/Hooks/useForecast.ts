import {useState } from 'react'
import axios from 'axios'

const BASE_URL: string = `https://api.openweathermap.org/data/2.5/weather?&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric&q=`
const useForecast = () => {
    const [ error, setError ] = useState<boolean>(false)
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    const [ forecast, setForecast ] = useState(null)

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

    console.log(forecast)
    return {
        error, isLoading, forecast, submitRequest ,setError
    }
}

export default useForecast