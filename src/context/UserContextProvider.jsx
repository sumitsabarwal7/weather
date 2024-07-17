import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [LocationContent, setLocationContent] = useState([]);
  const [CurrentContent, setCurrentContent] = useState([]);
  const [useForecast, setUseForecast] = useState([]);
  const [city, setCity] = useState("shillong");

  async function setContentFromAPI() {
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5450c171efmsha75af24c612a3ccp1ffb6cjsnccb3e3875fe9",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setLocationContent(result.location);
      setCurrentContent(result.current);
      setUseForecast(result.forecast);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setContentFromAPI();
  }, [city]);

  // console.log(LocationContent);
  // console.log(CurrentContent);
  console.log(useForecast);

  return (
    <UserContext.Provider
      value={{
        LocationContent: LocationContent,
        CurrentContent: CurrentContent,
        setCity: setCity,
        forecast: useForecast,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
