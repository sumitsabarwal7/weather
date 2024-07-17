import React, { useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { IoMdSunny } from "react-icons/io";
import { FaWind } from "react-icons/fa";
import { IoWaterSharp } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { PiThermometerHotFill } from "react-icons/pi";
import { WiWindy } from "react-icons/wi";
import { FaEye } from "react-icons/fa";
import { WiCloudyGusts } from "react-icons/wi";

export default function InsideCards() {
  let sunset;
  let sunrise;
  const { CurrentContent, forecast } = useContext(UserContext);
  const [uvText, setUvText] = useState("");

  if (
    forecast &&
    forecast.forecastday &&
    forecast.forecastday.length > 0 &&
    forecast.forecastday[0].astro
  ) {
    sunset = forecast.forecastday[0].astro.sunset;
    sunrise = forecast.forecastday[0].astro.sunrise;
  }
  useEffect(() => {
    if (CurrentContent.uv <= 2) {
      setUvText("UV index is low");
    } else if (CurrentContent.uv <= 5) {
      setUvText("Moderate");
    } else if (CurrentContent.uv <= 7) {
      setUvText("High");
    } else if (CurrentContent.uv <= 10) {
      setUvText("Very High");
    } else {
      setUvText("Extreme");
    }
  }, [CurrentContent.uv]);

  return (
    <>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-2 gap-y-6 mt-12  place-items-center ">
        <div className="uv mx-auto w-44 sm:w-40 md:w-40 lg:w-60 h-40 rounded-5 shadow-md backdrop-blur-14 bg-white bg-opacity-5 p-3  rounded-xl text-left flex flex-col space-y-3">
          <p className="flex space-x-2 text-gray-400">
            <IoMdSunny className="text-gray-400 mt-1 " /> <span>UV INDEX</span>
          </p>
          <p className="text-2xl">{CurrentContent.uv}</p>
          <p className="text-lg">{uvText}</p>
        </div>

        <div className="sunset mx-auto w-44 sm:w-40 md:w-40 lg:w-60 h-40 rounded-5 shadow-md backdrop-blur-14 bg-white bg-opacity-5 p-3  rounded-xl text-left flex flex-col space-y-3">
          <p className="flex space-x-2 text-gray-400">
            <FaWind className="text-gray-400 mt-1 " /> <span>WIND</span>
          </p>
          <p className="text-xl mt-2">{CurrentContent.wind_kph} kmph</p>
          <p className="text-xl ">{CurrentContent.wind_mph} mph</p>
        </div>

        <div className="sunset mx-auto w-44 sm:w-40 md:w-40 lg:w-60 h-40 rounded-5 shadow-md backdrop-blur-14 bg-white bg-opacity-5 p-3  rounded-xl text-left flex flex-col space-y-3">
          <p className="flex space-x-2 text-gray-400">
            <IoWaterSharp className="text-gray-400 mt-1 " />{" "}
            <span>PRECIPITATION</span>
          </p>
          <p className="text-xl mt-2">{CurrentContent.precip_mm} mm</p>
          <p className="text-lg ">in last 24 hours</p>
        </div>

        <div className="sunset mx-auto w-44 sm:w-40 md:w-40 lg:w-60 h-40 rounded-5 shadow-md backdrop-blur-14 bg-white bg-opacity-5 p-3  rounded-xl text-left flex flex-col space-y-3">
          <p className="flex space-x-2 text-gray-400">
            <WiHumidity className="text-gray-400 mt-1 " /> <span>HUMIDITY</span>
          </p>
          <p className="text-xl mt-2">{CurrentContent.humidity} %</p>
          {/* <p className="text-lg "></p> */}
        </div>

        <div className="sunset mx-auto w-44 sm:w-40 md:w-40 lg:w-60 h-40 rounded-5 shadow-md backdrop-blur-14 bg-white bg-opacity-5 p-3  rounded-xl text-left flex flex-col space-y-3">
          <p className="flex space-x-2 text-gray-400">
            <PiThermometerHotFill className="text-gray-400 mt-1 " />
            <span>FEELS LIKE</span>
          </p>
          <p className="text-xl mt-2">{CurrentContent.feelslike_c}&deg; c </p>
          <p className="text-xl mt-2">{CurrentContent.feelslike_f}&deg; f </p>
        </div>

        <div className="sunset mx-auto w-44 sm:w-40 md:w-40 lg:w-60 h-40 rounded-5 shadow-md backdrop-blur-14 bg-white bg-opacity-5 p-3  rounded-xl text-left flex flex-col space-y-3">
          <p className="flex space-x-2 text-gray-400">
            <WiWindy className="text-gray-400 mt-1 " />
            <span>PRESSURE</span>
          </p>
          <p className="text-xl mt-2">{CurrentContent.pressure_mb} Pa </p>
        </div>

        <div className="sunset mx-auto w-44 sm:w-40 md:w-40 lg:w-60 h-40 rounded-5 shadow-md backdrop-blur-14 bg-white bg-opacity-5 p-3  rounded-xl text-left flex flex-col space-y-3">
          <p className="flex space-x-2 text-gray-400">
            <FaEye className="text-gray-400 mt-1 " />
            <span>VISIBILITY</span>
          </p>
          <p className="text-xl mt-2">{CurrentContent.vis_km} kmph </p>
          <p className="text-xl mt-2">{CurrentContent.vis_miles} mph </p>
        </div>

        <div className="sunset mx-auto w-44 sm:w-40 md:w-40 lg:w-60 h-40 rounded-5 shadow-md backdrop-blur-14 bg-white bg-opacity-5 p-3  rounded-xl text-left flex flex-col space-y-3">
          <p className="flex space-x-2 text-gray-400">
            <WiCloudyGusts className="text-gray-400 mt-1 " />
            <span>SUNRISE AND SUNSET</span>
          </p>
          <p className="text-xl mt-2">{sunrise} </p>
          <p className="text-xl mt-2">{sunset} </p>
        </div>
      </section>
    </>
  );
}
