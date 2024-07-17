import React, { useContext, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import UserContext from "../context/UserContext";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";

export default function Forcast() {
  const { forecast } = useContext(UserContext);
  let temperatureC0;
  let temperatureC1;
  let temperatureC2;
  let temperatureC3;
  let temperatureC4;
  let temperatureC5;
  let temperatureC6;
  let temperatureC7;
  let temperatureC8;
  let temperatureC9;
  let temperatureC10;
  let temperatureC11;
  let temperatureC12;
  let temperatureC13;
  let temperatureC14;
  let temperatureC15;
  let temperatureC16;
  let temperatureC17;
  let temperatureC18;
  let temperatureC19;
  let temperatureC20;
  let temperatureC21;
  let temperatureC22;
  let temperatureC23;

  if (
    forecast &&
    forecast.forecastday &&
    forecast.forecastday.length > 0 &&
    forecast.forecastday[0].hour &&
    forecast.forecastday[0].hour.length > 0
  ) {
    // Accessing the temperature for the first hour of the first forecast day
    temperatureC0 = parseInt(forecast.forecastday[0].hour[0].temp_c);
    temperatureC1 = parseInt(forecast.forecastday[0].hour[1].temp_c);
    temperatureC2 = parseInt(forecast.forecastday[0].hour[2].temp_c);
    temperatureC3 = parseInt(forecast.forecastday[0].hour[3].temp_c);
    temperatureC4 = parseInt(forecast.forecastday[0].hour[4].temp_c);
    temperatureC5 = parseInt(forecast.forecastday[0].hour[5].temp_c);
    temperatureC6 = parseInt(forecast.forecastday[0].hour[6].temp_c);
    temperatureC7 = parseInt(forecast.forecastday[0].hour[7].temp_c);
    temperatureC8 = parseInt(forecast.forecastday[0].hour[8].temp_c);
    temperatureC9 = parseInt(forecast.forecastday[0].hour[9].temp_c);
    temperatureC10 = parseInt(forecast.forecastday[0].hour[10].temp_c);
    temperatureC11 = parseInt(forecast.forecastday[0].hour[11].temp_c);
    temperatureC12 = parseInt(forecast.forecastday[0].hour[12].temp_c);
    temperatureC13 = parseInt(forecast.forecastday[0].hour[13].temp_c);
    temperatureC14 = parseInt(forecast.forecastday[0].hour[14].temp_c);
    temperatureC15 = parseInt(forecast.forecastday[0].hour[15].temp_c);
    temperatureC16 = parseInt(forecast.forecastday[0].hour[16].temp_c);
    temperatureC17 = parseInt(forecast.forecastday[0].hour[17].temp_c);
    temperatureC18 = parseInt(forecast.forecastday[0].hour[18].temp_c);
    temperatureC19 = parseInt(forecast.forecastday[0].hour[19].temp_c);
    temperatureC20 = parseInt(forecast.forecastday[0].hour[20].temp_c);
    temperatureC21 = parseInt(forecast.forecastday[0].hour[21].temp_c);
    temperatureC22 = parseInt(forecast.forecastday[0].hour[22].temp_c);
    temperatureC23 = parseInt(forecast.forecastday[0].hour[23].temp_c);
  }

  return (
    <>
      <section className="hourlyForecast  mx-5 mt-8 overflow-x-auto ">
        <div className="uv  w-full h-44 rounded-5 shadow-md backdrop-blur-14 bg-white bg-opacity-5 p-3  rounded-xl text-left flex flex-col space-y-3 overflow-x-auto overflow-y-hidden ">
          <div className="flex space-x-2 text-gray-400">
            <FaRegClock className="text-gray-400 mt-1 " />{" "}
            <span>HOURLY FORECAST</span>
          </div>
          <section className="time flex space-x-4 ">
            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md flex">
                12<span className="text-xs pt-[0.39rem]">AM</span>
              </p>
              <p className="text-lg">
                <BsFillMoonStarsFill />
              </p>
              <p className="text-md font-bold">{temperatureC0}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md flex">
                1<span className="text-xs pt-[0.39rem]">AM</span>
              </p>
              <p className="text-lg">
                <BsFillMoonStarsFill />
              </p>
              <p className="text-md font-bold">{temperatureC1}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md flex">
                2<span className="text-xs pt-[0.39rem]">AM</span>
              </p>
              <p className="text-lg">
                <BsFillMoonStarsFill />
              </p>
              <p className="text-md font-bold">{temperatureC2}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md flex">
                3<span className="text-xs pt-[0.39rem]">AM</span>
              </p>
              <p className="text-lg">
                <BsFillMoonStarsFill />
              </p>
              <p className="text-md font-bold">{temperatureC3}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md">
                4<span className="text-xs pt-[0.39rem]">AM</span>
              </p>
              <p className="text-lg">
                <BsFillMoonStarsFill />
              </p>
              <p className="text-md font-bold">{temperatureC4}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md flex">
                5<span className="text-xs pt-[0.39rem]">AM</span>
              </p>
              <p className="text-lg">
                <BsFillMoonStarsFill />
              </p>
              <p className="text-md font-bold">{temperatureC5}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md flex">
                6<span className="text-xs pt-[0.39rem]">AM</span>
              </p>
              <p className="text-lg">
                <BsFillMoonStarsFill />
              </p>
              <p className="text-md font-bold">{temperatureC6}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md flex">
                7<span className="text-xs pt-[0.39rem]">AM</span>
              </p>
              <p className="text-lg">
                <IoSunny className="text-yellow-600" />
              </p>
              <p className="text-md font-bold">{temperatureC7}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md flex">
                8<span className="text-xs pt-[0.39rem]">AM</span>
              </p>
              <p className="text-lg">
                <IoSunny className="text-yellow-600" />
              </p>
              <p className="text-md font-bold">{temperatureC8}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md flex">
                9<span className="text-xs pt-[0.39rem]">AM</span>
              </p>
              <p className="text-lg">
                <IoSunny className="text-yellow-600" />
              </p>
              <p className="text-md font-bold">{temperatureC9}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md flex">
                10<span className="text-xs pt-[0.39rem]">AM</span>
              </p>
              <p className="text-lg">
                <IoSunny className="text-yellow-600" />
              </p>
              <p className="text-md font-bold">{temperatureC10}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md">
                11<span className="text-xs pt-[0.39rem]">AM</span>
              </p>
              <p className="text-lg">
                <IoSunny className="text-yellow-600" />
              </p>
              <p className="text-md font-bold">{temperatureC11}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md">
                12<span className="text-xs pt-[0.39rem]">PM</span>
              </p>
              <p className="text-lg">
                <IoSunny className="text-yellow-600" />
              </p>
              <p className="text-md font-bold">{temperatureC12}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md">
                1<span className="text-xs pt-[0.39rem]">PM</span>
              </p>
              <p className="text-lg">
                <IoSunny className="text-yellow-600" />
              </p>
              <p className="text-md font-bold">{temperatureC13}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md">
                2<span className="text-xs pt-[0.39rem]">PM</span>
              </p>
              <p className="text-lg">
                <IoSunny className="text-yellow-600" />
              </p>
              <p className="text-md font-bold">{temperatureC14}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md">
                3<span className="text-xs pt-[0.39rem]">PM</span>
              </p>
              <p className="text-lg">
                <IoSunny className="text-yellow-600" />
              </p>
              <p className="text-md font-bold">{temperatureC14}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md">
                4<span className="text-xs pt-[0.39rem]">PM</span>
              </p>
              <p className="text-lg">
                <IoSunny className="text-yellow-600" />
              </p>
              <p className="text-md font-bold">{temperatureC15}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md">
                5<span className="text-xs pt-[0.39rem]">PM</span>
              </p>
              <p className="text-lg">
                <BsFillMoonStarsFill />
              </p>
              <p className="text-md font-bold">{temperatureC16}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md">
                6<span className="text-xs pt-[0.39rem]">PM</span>
              </p>
              <p className="text-lg">
                <BsFillMoonStarsFill />
              </p>
              <p className="text-md font-bold">{temperatureC17}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md">
                7<span className="text-xs pt-[0.39rem]">PM</span>
              </p>
              <p className="text-lg">
                <BsFillMoonStarsFill />
              </p>
              <p className="text-md font-bold">{temperatureC18}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md">
                8<span className="text-xs pt-[0.39rem]">PM</span>
              </p>
              <p className="text-lg">
                <BsFillMoonStarsFill />
              </p>
              <p className="text-md font-bold">{temperatureC19}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md">
                9<span className="text-xs pt-[0.39rem]">PM</span>
              </p>
              <p className="text-lg">
                <BsFillMoonStarsFill />
              </p>
              <p className="text-md font-bold">{temperatureC20}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md">
                10<span className="text-xs pt-[0.39rem]">PM</span>
              </p>
              <p className="text-lg">
                <BsFillMoonStarsFill />
              </p>
              <p className="text-md font-bold">{temperatureC21}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center ">
              <p className="text-md">
                11<span className="text-xs pt-[0.39rem]">PM</span>
              </p>
              <p className="text-lg">
                <BsFillMoonStarsFill />
              </p>
              <p className="text-md font-bold">{temperatureC22}&deg;</p>
            </div>

            <div className="flex flex-col space-y-3 justify-center items-center pr-6">
              <p className="text-md">
                12<span className="text-xs pt-[0.39rem]">AM</span>
              </p>
              <p className="text-lg">
                <BsFillMoonStarsFill />
              </p>
              <p className="text-md font-bold">{temperatureC23}&deg;</p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
