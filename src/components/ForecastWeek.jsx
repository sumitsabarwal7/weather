import React, { useContext, useEffect, useState } from "react";
import {
  BsCalendar3,
  BsFillMoonStarsFill,
  BsCloudSnowFill,
} from "react-icons/bs";
import UserContext from "../context/UserContext";
import { IoSunny } from "react-icons/io5";
import {  WiNightStormShowers, WiBarometer } from "react-icons/wi";
import { RiSunCloudyFill } from "react-icons/ri";
import { MdFoggy } from "react-icons/md";
import { IoRainy } from "react-icons/io5";

export default function ForecastWeek() {
  const { forecast } = useContext(UserContext);
  const [weatherIcon1, setWeatherIcon1] = useState(<WiBarometer />);
  const [weatherIcon2, setWeatherIcon2] = useState(<WiBarometer />);
  const [weatherIcon3, setWeatherIcon3] = useState(<WiBarometer />);
  let todayMIN;
  let todayMAX;
  let tomorrowMIN;
  let tomorrowMAX;
  let overmorrowMIN;
  let overmorrowMAX;
  let condition1;
  let condition2;
  let condition3;

  if (
    forecast &&
    forecast.forecastday &&
    forecast.forecastday.length > 0 &&
    forecast.forecastday[0].day &&
    forecast.forecastday[0].day.condition
  ) {
    todayMIN = parseInt(forecast.forecastday[0].day.mintemp_c);
    todayMAX = parseInt(forecast.forecastday[0].day.maxtemp_c);
    tomorrowMIN = parseInt(forecast.forecastday[1].day.mintemp_c);
    tomorrowMAX = parseInt(forecast.forecastday[1].day.maxtemp_c);
    overmorrowMIN = parseInt(forecast.forecastday[2].day.mintemp_c);
    overmorrowMAX = parseInt(forecast.forecastday[2].day.maxtemp_c);
    condition1 = forecast.forecastday[0].day.condition.text;
    condition2 = forecast.forecastday[1].day.condition.text;
    condition3 = forecast.forecastday[2].day.condition.text;
  }

  const setWeatherIcon = (condition, setIcon) => {
    switch (condition) {
      case "Sunny":
        setIcon(<IoSunny className="text-yellow-600" />);
        break;
      case "Patchy rain possible":
      case "Partly cloudy":
      case "Overcast":
      case "Cloudy":
        setIcon(<RiSunCloudyFill />);
        break;
      case "Light rain":
      case "Moderate rain":
      case "Light freezing rain":
      case "Heavy rain":
        setIcon(<IoRainy />);
        break;
      case "Fog":
      case "Mist":
        setIcon(<MdFoggy />);
        break;
      case "Clear":
        setIcon(<BsFillMoonStarsFill />);
        break;
      case "Patchy light rain with thunder":
      case "Thundery outbreaks possible":
        setIcon(<WiNightStormShowers />);
        break;
      case "Moderate snow":
      case "Moderate or heavy snow showers":
      case "Heavy snow":
        setIcon(<BsCloudSnowFill />);
        break;
      default:
        setIcon(<WiBarometer />);
    }
  };

  useEffect(() => {
    setWeatherIcon(condition1, setWeatherIcon1);
    setWeatherIcon(condition2, setWeatherIcon2);
    setWeatherIcon(condition3, setWeatherIcon3);
  }, [condition1, condition2, condition3]);

  return (
    <>
      <section className="mt-10 mx-5">
        <section className="w-full h-full rounded-5 shadow-md backdrop-blur-14 bg-white bg-opacity-5 p-3  rounded-2xl flex flex-col ">
          <div className="flex space-x-2 text-gray-400">
            <BsCalendar3 className="mt-1" /> <span>3-DAY FORECAST</span>
          </div>

          <section className="mt-5 flex flex-col space-y-4">
            <section className="today flex justify-between">
              <div className="w-[30%] text-start">Today</div>
              <div className="w-[20%] text-2xl">{weatherIcon1}</div>
              <div className="flex space-x-6 w-[50%] text-right justify-end">
                <p className="min text-gray-400">{todayMIN}&deg;</p>
                <p className="mt-3 h-1 w-96 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 rounded-lg"></p>
                <p className="max">{todayMAX}&deg;</p>
              </div>
            </section>

            <section className="tomorrow  flex justify-between">
              <div className="w-[30%] text-start">Tomorrow</div>
              <div className="w-[20%] text-2xl">{weatherIcon2}</div>
              <div className="flex space-x-6 w-[50%] text-right justify-end">
                <p className="min text-gray-400">{tomorrowMIN}&deg;</p>
                <p className="mt-3 h-1 w-96 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 rounded-lg"></p>
                <p className="max">{tomorrowMAX}&deg;</p>
              </div>
            </section>

            <section className="overmorrow  flex justify-between pb-2">
              <div className="w-[30%] text-start">Overmorrow</div>
              <div className="w-[20%] text-2xl">{weatherIcon3}</div>
              <div className="flex space-x-6 w-[50%] text-right justify-end">
                <p className="min text-gray-400">{overmorrowMIN}&deg;</p>
                <p className="mt-3 h-1 w-96 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 rounded-lg"></p>
                <p className="max">{overmorrowMAX}&deg;</p>
              </div>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
