import React from 'react';
import { GiWindsock, GiCloudDownload } from 'react-icons/gi'
import { BsDroplet } from 'react-icons/bs'
import { FaTemperatureLow, FaTemperatureHigh} from 'react-icons/fa' 


const { getName } = require('country-list');

interface weather {
  icon: string;
  id: number;
  main: string;
  description: string;
}

interface coordinations {
  lon: number;
  lat: number;
}

interface mainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface winds {
  speed: number;
  deg: number;
}

interface cloud {
  all: number;
}

interface system {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface prop {
  forecast: {
    name: string;
    weather: [weather];
    coord: coordinations;
    main: mainWeather;
    visibility: number;
    wind: winds;
    clouds: cloud;
    dt: number;
    sys: system;
    timezone: number;
    id: number;
    cod: number;
  };
}

function Forecast({ forecast }: prop) {
  const upperCaseFirst = (desc: string ) => {
    return desc.charAt(0).toUpperCase() + desc.slice(1);
  }


  
  return (
    <div className="w-[35vw] h-[70vh] flex flex-col justify-start items-center text-center m-auto bg-orange-100 rounded-3xl">
      <div className="flex w-full h-1/12 justify-around mx-auto items-center my-4">
        <div className=" w-1/2 flex justify-center">
          <h1 className="text-2xl">{forecast.name},&nbsp; </h1>
          <span className="text-2xl not-italic">{getName(forecast.sys.country)}</span>
        </div>
      </div>
      <div className="flex w-full h-1/4 justify-around mx-auto items-center ">
        <div className="w-1/2">
          
          <h1 className="text-6xl indent-4 font-extralight ">
            {Math.round(forecast.main.temp)} &deg;
          </h1>
          <h3 className=" bg-gray-200 w-3/5 mx-auto my-2 rounded-2xl">
            {upperCaseFirst(forecast.weather[0].description)}
          </h3>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <img
            src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
            alt="weather icons"
            className="w-40 h-40 "
          />
        </div>
      </div>
      
      <div className="flex w-full h-1/6 justify-around mx-auto items-center">
        <div className=" flex w-1/2 justify-center">
          <FaTemperatureHigh className="h-full my-auto mx-2"/> 
          <span className=" my-auto">Max &nbsp;</span>
          <p className="text-center text-2xl">{Math.round(forecast.main.temp_max)} &deg;</p>
        </div>
        <div className=" flex w-1/2 justify-center">
          <FaTemperatureLow className="h-full my-auto mx-2"/> 
          <span className=" my-auto">Min &nbsp;</span>
          <p className="text-center text-2xl">{Math.round(forecast.main.temp_min)} &deg; </p>
        </div>
      </div>

      <div className="flex w-full h-1/6 justify-around mx-auto items-center">
        <div className=" flex w-1/3 justify-center">
          <GiWindsock className="h-full my-auto mx-2"/> 
          <p className="text-center">{Math.round(forecast.wind.speed)} km/h </p>
        </div>
        <div className=" flex w-1/3 justify-center">
          <BsDroplet className="h-full my-auto mx-2"/> 
          <p className="text-center">{Math.round(forecast.main.humidity)} % </p>
        </div>
        <div className=" flex w-1/3 justify-center">
          <GiCloudDownload className="h-full my-auto mx-2"/> 
          <p className="text-center">{Math.round(forecast.main.pressure)} mBar </p>
        </div>
      </div>

   
    </div>
  );
}

export default Forecast;
