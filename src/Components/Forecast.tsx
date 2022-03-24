import React from 'react'

interface weather {
  icon: string
  id: number
  main: string
  description: string
}

interface coordinations {
  lon: number
  lat: number
}

interface mainWeather {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

interface winds {
  speed: number
  deg: number
}

interface cloud {
  all: number
}

interface system {
  type: number
  id: number
  message: number
  country: string
  sunrise: number
  sunset: number
}


interface prop {
 forecast: {
   name:string
   weather: [ weather ]
   coord: coordinations
   main: mainWeather
   visibility: number
   wind: winds
   clouds: cloud
   dt: number
   sys: system
   timezone: number
   id: number
   cod:number

 }
}



function Forecast( {forecast}: prop) {

  console.log(forecast)
  return (
    <div className="min-w-1/2 h-full flex justify-center items-center text-center m-auto bg-orange-100">
        <span className="text-2xl">{forecast.name}</span>
        <div>
          <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="weather icons" className="w-20 h-20" />
        </div>
    </div>
  )
}

export default Forecast;