import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NavbarScreen.css';
import MainScreen from './MainScreen';
import ForecastScreen from './ForecastScreen';
import Loader from 'react-loader-spinner';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [searchData, setSearchData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [obj, setObj] = useState([]);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const URL1 = `https://api.openweathermap.org/data/2.5/weather?q=Colombo&appid=bd80776cd58f0781e44acbf3252364b6`;
    const URL2 = `https://api.openweathermap.org/data/2.5/onecall?lat=6.927079&lon=79.8612&exclude=current,hourly,minutely,alerts&units=metric&appid=bd80776cd58f0781e44acbf3252364b6`;
    const fetchData = async () => {
      const resObj = await axios(URL1);
      const resForecast = await axios(URL2);
      setObj(resObj.data);
      setForecast(resForecast.data);

      setLoading(false);
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  };

  const handleChange = (e) => {
    setSearchData(e.target.value);
  };

  const handleSearch = () => {
    if (searchData != null) {
      var location = searchData.replaceAll(/\s/g, '');
      console.log(location);
      var coords = location.split(':');
      const URL1 = `https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=bd80776cd58f0781e44acbf3252364b6`;
      const URL2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords[0]}&lon=${coords[1]}&exclude=current,hourly,minutely,alerts&units=metric&appid=bd80776cd58f0781e44acbf3252364b6`;
      const fetchData = async () => {
        const resObj = await axios(URL1);
        const resForecast = await axios(URL2);
        setObj(resObj.data);
        setForecast(resForecast.data);
        setLoading(false);
      };

      fetchData();
    }
  };

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
      <>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-orange-500 mb-3 nav_container">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                href="#"
              >
                Dashboard
              </a>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div
              className={
                'lg:flex flex-grow items-center' +
                (navbarOpen ? ' flex' : ' hidden')
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <div className=" bg-gray-200 rounded-lg">
                  <div className="">
                    <div className="relative">
                      <input
                        type="text"
                        className="h-12 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                        placeholder="Latitude:Longitude"
                        onChange={handleChange}
                      />
                      <div className="absolute top-2  right-2">
                        <button
                          className="h-8 w-20 text-white rounded-lg bg-black hover:bg-gray-700"
                          onClick={handleSearch}
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 ml-6"
                    href="#"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2 pt-2" onClick={handleLogout}>
                      Logout
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="bg-yellow-500 flex flex-col items-center justify-center w-screen main_screen">
          <MainScreen obj={obj}></MainScreen>
          <ForecastScreen forecast={forecast}></ForecastScreen>
        </div>
      </>
    );
  }
}
