import React from 'react';


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
    <div className="w-[40vw] h-[70vh] flex flex-col justify-start items-center text-center m-auto bg-orange-100 rounded-2xl">
      <div className="flex w-full h-1/4 justify-around mx-auto items-center my-10">
        <div className="w-1/2">
          <span className="text-2xl">{forecast.name},</span>
          <em className="text-2xl not-italic">{forecast.sys.country}</em>
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

      <div className="flex w-11/12 h-1/4 justify-around mx-auto items-center"></div>
    </div>
  );
}

export default Forecast;
