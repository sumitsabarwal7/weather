import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

export default function Navbar({ background }) {
  const { setCity } = useContext(UserContext);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setCity(inputValue);
    // Clear the input field after setting the city
    setInputValue("");
  };

  return (
    <>
      <nav
        className=" fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 flex justify-evenly md:justify-between"
        style={{ backgroundColor: background }}
      >
        <section className="max-w-screen-xl flex justify-start p-4 space-x-3">
          <img src="logo.png" className="h-8 mt-1" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden md:inline-block">
            WeatherSphere
          </span>
        </section>
        <section className=""></section>
        <input
          value={inputValue}
          onChange={handleInputChange}
          className="bg-gray-900 text-gray-300 text-center w-52 md:hidden border border-slate-500  rounded-2xl my-3"
          type="text"
          placeholder="Enter your location"
          style={{ backgroundColor: background }}
        />
        <section
          className=" md:flex md:w-auto  md:pr-5 space-x-3"
          id="navbar-sticky"
        >
          <input
            value={inputValue}
            onChange={handleInputChange}
            className=" text-gray-300 text-center w-40 lg:w-72 border border-slate-500 rounded-2xl hidden md:inline-block my-3"
            type="text"
            placeholder="Enter your location"
            style={{ backgroundColor: background }}
          />
          <button
            onClick={handleSearch}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-4"
          >
            Search
          </button>
        </section>
      </nav>
    </>
  );
}
