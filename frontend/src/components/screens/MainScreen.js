import React from 'react';
import humidity from '../../img/humidity.png';
import pressure from '../../img/pressure.png';
import wind from '../../img/wind.png';

export default function MainScreen(props) {
  return (
    <div className="container flex flex-row justify-between">
      <div className="today">
        <div className="w-60  mb-10">
          <img
            className=""
            src={`http://openweathermap.org/img/wn/${props.obj.weather[0].icon}@4x.png`}
          ></img>

          <div className="pl-8 pb-4">
            <p className="text-6xl text-white font-semibold">
              {(props.obj.main.temp - 273.15).toFixed(2)}&deg;C
            </p>
            <p className="text-4xl text-white font-semibold">
              {props.obj.weather[0].main}
            </p>
            <p className="text-xl text-white font-thin">
              {props.obj.name}, {props.obj.sys.country}
            </p>
          </div>
        </div>
      </div>

      <div className="other mt-14">
        <div className="humidity flex mb-16">
          <img className="w-14 h-14 mr-8" src={humidity}></img>

          <div className="px-4 pb-4">
            <p className="text-sm text-white font-normal text-left">Humidity</p>
            <p className="text-4xl text-white font-semibold text-left">
              {props.obj.main.humidity} %
            </p>
          </div>
        </div>

        <div className="airpressure flex mb-16">
          <img className="w-12 h-12 mr-8" src={pressure}></img>

          <div className="px-4 pb-4">
            <p className="text-sm text-white font-normal text-left">
              Air Oressure
            </p>
            <p className="text-4xl text-white font-semibold text-left">
              {props.obj.main.pressure} PS
            </p>
          </div>
        </div>

        <div className="humidity flex mb-16">
          <img className="w-12 h-12 mr-8" src={wind}></img>

          <div className="px-4 pb-4">
            <p className="text-sm text-white font-normal text-left">
              Wind Speed
            </p>
            <p className="text-4xl text-white font-semibold text-left">
              {props.obj.wind.speed} KM/h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
