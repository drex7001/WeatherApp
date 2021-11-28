import React, { useEffect, useState } from 'react';
import axios from 'axios';
import humidity from '../../img/humidity.png';
import pressure from '../../img/pressure.png';
import wind from '../../img/wind.png';
import Loader from 'react-loader-spinner';

export default function FutureScreen(props) {
  const [isLoading, setLoading] = useState(true);

  useEffect(async () => {
    setLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="loadingContainer">
        <Loader
          type="ThreeDots"
          color="#00b22d"
          height={100}
          width={100}
          //3 secs
        />
      </div>
    );
  } else {
    return (
      <div>
        <div className="container">
          <div className="other mt-14 flex flex-row justify-between ">
            <div className="humidity flex bg-white bg-opacity-10 p-10 rounded-lg m-2">
              <img
                className="w-14 h-14 mr-8"
                src={`http://openweathermap.org/img/wn/${props.forecast.daily[0].weather[0].icon}@4x.png`}
              ></img>

              <div className="px-4 pb-4">
                <p className="text-sm text-white font-normal text-left">
                  Day 01
                </p>
                <p className="text-4xl text-white font-semibold text-left">
                  {props.forecast.daily[0].temp.day}&deg;C
                </p>
              </div>
            </div>
            <div className="humidity flex bg-white bg-opacity-10 p-10  rounded-lg m-2">
              <img
                className="w-14 h-14 mr-8"
                src={`http://openweathermap.org/img/wn/${props.forecast.daily[1].weather[0].icon}@4x.png`}
              ></img>

              <div className="px-4 pb-4">
                <p className="text-sm text-white font-normal text-left">
                  Day 02
                </p>
                <p className="text-4xl text-white font-semibold text-left">
                  {props.forecast.daily[1].temp.day}&deg;C
                </p>
              </div>
            </div>
            <div className="humidity flex bg-white bg-opacity-10 p-10  rounded-lg m-2">
              <img
                className="w-14 h-14 mr-8"
                src={`http://openweathermap.org/img/wn/${props.forecast.daily[2].weather[0].icon}@4x.png`}
              ></img>

              <div className="px-4 pb-4">
                <p className="text-sm text-white font-normal text-left">
                  Day 03
                </p>
                <p className="text-4xl text-white font-semibold text-left">
                  {props.forecast.daily[2].temp.day}&deg;C
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-11">
          <div className="other mt-14 flex flex-row justify-between">
            <div className="humidity flex bg-white bg-opacity-10 p-10  rounded-lg m-2">
              <img
                className="w-14 h-14 mr-8"
                src={`http://openweathermap.org/img/wn/${props.forecast.daily[3].weather[0].icon}@4x.png`}
              ></img>

              <div className="px-4 pb-4">
                <p className="text-sm text-white font-normal text-left">
                  Day 04
                </p>
                <p className="text-4xl text-white font-semibold text-left">
                  {props.forecast.daily[3].temp.day}&deg;C
                </p>
              </div>
            </div>

            <div className="humidity flex bg-white bg-opacity-10 p-10  rounded-lg m-2">
              <img
                className="w-14 h-14 mr-8"
                src={`http://openweathermap.org/img/wn/${props.forecast.daily[4].weather[0].icon}@4x.png`}
              ></img>

              <div className="px-4 pb-4">
                <p className="text-sm text-white font-normal text-left">
                  Day 05
                </p>
                <p className="text-4xl text-white font-semibold text-left">
                  {props.forecast.daily[4].temp.day}&deg;C
                </p>
              </div>
            </div>

            <div className="humidity flex bg-white bg-opacity-10 p-10  rounded-lg m-2">
              <img
                className="w-14 h-14 mr-8"
                src={`http://openweathermap.org/img/wn/${props.forecast.daily[5].weather[0].icon}@4x.png`}
              ></img>

              <div className="px-4 pb-4">
                <p className="text-sm text-white font-normal text-left">
                  Day 06
                </p>
                <p className="text-4xl text-white font-semibold text-left">
                  {props.forecast.daily[5].temp.day}&deg;C
                </p>
              </div>
            </div>

            <div className="humidity flex bg-white bg-opacity-10 p-10  rounded-lg m-2">
              <img
                className="w-14 h-14 mr-8"
                src={`http://openweathermap.org/img/wn/${props.forecast.daily[6].weather[0].icon}@4x.png`}
              ></img>

              <div className="px-4 pb-4">
                <p className="text-sm text-white font-normal text-left">
                  Day 07
                </p>
                <p className="text-4xl text-white font-semibold text-left">
                  {props.forecast.daily[6].temp.day}&deg;C
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
