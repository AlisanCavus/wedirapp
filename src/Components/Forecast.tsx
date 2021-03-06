/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { GiWindsock } from 'react-icons/gi';
import { BsDroplet } from 'react-icons/bs';
import { FaTemperatureLow, FaTemperatureHigh } from 'react-icons/fa';
import { WiBarometer } from 'react-icons/wi';
import moment from 'moment';
import a01d from '../Assets/a01d.png'
import a01n from '../Assets/a01n.png'
import a02d from '../Assets/a02d.png'
import a02n from '../Assets/a02n.png'
import a03d from '../Assets/a03d.png'
import a03n from '../Assets/a03n.png'
import a04d from '../Assets/a04d.png'
import a04n from '../Assets/a04n.png'
import a09d from '../Assets/a09d.png'
import a09n from '../Assets/a09n.png'
import a10d from '../Assets/a10d.png'
import a10n from '../Assets/a10n.png'
import a11d from '../Assets/a11d.png'
import a11n from '../Assets/a11n.png'
import a13d from '../Assets/a13d.png'
import a13n from '../Assets/a13n.png'
import a50d from '../Assets/a50d.png'
import a50n from '../Assets/a50n.png'
import Loader from './Loader';




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
    
  },
  isLoading:boolean
}

function Forecast({ forecast, isLoading }: prop ) {

  const upperCaseFirst = (desc: string) => {
    return desc.charAt(0).toUpperCase() + desc.slice(1);
  };

  const nameCount = (loc: string) => {
    const countname = getName(loc);
    if (countname.length > 15) {
      return loc;
    } else {
      return countname;
    }
  };

  const timeZone = (timz: number) => {
    const timeZ = Math.floor(timz / 3600)
   if (timeZ >= 0) {
     return `+ ${timeZ}`
   } else {
     return `${timeZ}`
   }
  }

  const getPhoto = (pp:string ) => {
    switch (pp) {
      case '01d':
        return a01d 
      case '01n':
        return a01n
      case '02d':
        return a02d
      case '02n':
        return a02n
      case '03d':
        return a03d
      case '03n':
        return a03n
      case '04d':
        return a04d
      case '04n':
        return a04n
      case '09d':
        return a09d
      case '09n':
        return a09n
      case '10d':
        return a10d
      case '10n':
        return a10n
      case '11d':
        return a11d
      case '11n': 
        return a11n
      case '13d':
        return a13d
      case '13n':
        return a13n
      case '50d':
        return a50d
      case '50n':
        return a50n
      
    }
  }
if (!isLoading) {
  return (
    <div className="w-[35vw] h-[70vh] flex flex-col justify-start items-center text-center m-auto bg-orange-50 rounded-xl xs:rounded-none lg:w-1/2 xl:w-1/2 xs:w-full xs:h-full sm:w-11/12 sm:h-full md:w-5/6 ">
      <div className="flex w-full h-1/12 justify-around mx-auto items-center my-4">
        <div className=" min-w-1/2 flex justify-center">
          <h1 className="text-2xl font-extralight flex my-auto">
            {forecast.name},&nbsp;
          </h1>
          <span className="text-2xl not-italic">
            {nameCount(forecast.sys.country)}
          </span>
        </div>
      </div>
      <div className="flex w-full h-1/4 justify-around mx-auto items-center ">
        <div className="w-1/2">
          <h1 className="text-6xl indent-4 font-extralight ">
            {Math.round(forecast.main.temp)} &deg;
          </h1>
          <h3 className=" bg-gray-200 w-3/5 mx-auto my-2 rounded-2xl font-extralight">
            {upperCaseFirst(forecast.weather[0].description)}
          </h3>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <img
            src={getPhoto(forecast.weather[0].icon)}
            alt="weather icons"
            className="w-32 h-32 "
            loading="eager"
          />
        </div>
      </div>

      <div className="flex w-full h-1/6 justify-around mx-auto items-center ">
        <div className=" flex w-1/2 ml-10 justify-center sm:ml-1 ">
          <FaTemperatureHigh className="h-full my-auto mx-2" />
          <span className=" my-auto font-extralight">Max &nbsp;</span>
          <p className="text-center text-2xl">
            {Math.round(forecast.main.temp_max)} &deg;
          </p>
        </div>
        <div className=" flex w-1/2 mr-10 justify-center sm:mr-1 ">
          <FaTemperatureLow className="h-full my-auto mx-2" />
          <span className=" my-auto font-extralight">Min &nbsp;</span>
          <p className="text-center text-2xl">
            {Math.round(forecast.main.temp_min)} &deg;
          </p>
        </div>
      </div>

      <div className="flex w-full h-1/6 justify-around mx-auto items-center sm:my-4">
        <div className=" flex w-1/3 justify-center">
          <GiWindsock className="h-full my-auto mx-2 " />
          <p className="text-center">
            {Math.round(forecast.wind.speed)}
            <em className="not-italic font-extralight"> km/h </em>
          </p>
        </div>
        <div className=" flex w-1/3 justify-center">
          <WiBarometer className="h-6 w-6 my-auto mx-2 sm:mx-0" />
          <p className="text-center">
            {Math.round(forecast.main.pressure)}
            <em className="not-italic font-extralight"> mB </em>
          </p>
        </div>
        <div className=" flex w-1/3 justify-center">
          <BsDroplet className="h-full my-auto mx-2" />
          <p className="text-center">
            {Math.round(forecast.main.humidity)}
            <em className="not-italic font-extralight"> % </em>
          </p>
        </div>

      </div>

      <div className="flex w-full h-1/3 flex-col lg:h-1/4 items-center">
        
          
          <div>
          <svg
            width="200"
            height="50"
            viewBox="0 0 344 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_2)">
              <path
                d="M343.5 166C343.5 257.387 266.734 331.5 172 331.5C77.2663 331.5 0.5 257.387 0.5 166C0.5 74.6135 77.2663 0.5 172 0.5C266.734 0.5 343.5 74.6135 343.5 166Z"
                stroke="gray"
              />
            </g>
          </svg>
          <div className="flex justify-between -mt-5">
          <img src="http://openweathermap.org/img/wn/01d.png" alt="sunrise" className=" w-10 h-10"/>
          <img src="http://openweathermap.org/img/wn/01n.png" alt="sunset" className=" w-10 h-10" />
          </div>
          
          </div>
          

          <div className="w-full flex h-1/4 justify-evenly items-center">
            <div className=" flex flex-col justify-center items-center sm:w-1/3 ">
              
              <h2 className="font-extralight"> Sunrise </h2>
              <span>{moment.unix(forecast.sys.sunrise).format("H.mm")}</span>
            </div>
            <div className=" flex flex-col justify-center items-center sm:w-1/3 ">
            
              <h2 className="font-extralight"> Sunset </h2>
              <span>{moment.unix(forecast.sys.sunset).format("H.mm")}</span>
            </div>
          </div>

         
      </div>

      <div className="w-full h-1/10 my-5 flex justify-center items-center">
            <span>{moment().format("LLLL")}</span>
      </div>

      <div className="w-full h-1/10 mb-5 flex justify-center items-center">
            <span>GMT: &nbsp;</span>
            <span>{timeZone(forecast.timezone)}</span>
      </div>
    </div>
  );
} else {
  return (<Loader/>)
}
}

export default Forecast;
