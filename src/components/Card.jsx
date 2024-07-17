import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
export default function Card() {
  let todayMIN;
  let todayMAX;
  const { LocationContent, CurrentContent, forecast } = useContext(UserContext);
  const [bgImage, setBgImage] = useState("");

  const { name: locationName = "" } = LocationContent;

  const {
    temp_c: temperature = "",
    condition: { text: conditionText = "" } = {},
    last_updated: lastUpdated = "",
  } = CurrentContent;

  if (
    forecast &&
    forecast.forecastday &&
    forecast.forecastday.length > 0 &&
    forecast.forecastday[0].day &&
    forecast.forecastday[0].day.condition
  ) {
    todayMIN = parseInt(forecast.forecastday[0].day.mintemp_c);
    todayMAX = parseInt(forecast.forecastday[0].day.maxtemp_c);
  }

  useEffect(() => {
    if (conditionText === "Clear") {
      setBgImage("url('/clear.jpg')");
    } else if (conditionText === "Patchy rain possible") {
      setBgImage("url('/patchyRain.jpg')");
    } else if (conditionText === "Sunny") {
      setBgImage("url('/sunny.avif')");
    } else if (conditionText === "Mist") {
      setBgImage("url('/mist.jpeg')");
    } else if (conditionText === "Partly cloudy") {
      setBgImage("url('/PartlyCloudy.jpg')");
    } else if (conditionText === "Overcast") {
      setBgImage("url('/overcast.avif')");
    } else if (conditionText === "Light snow") {
      setBgImage("url('/lightSnow.png')");
    } else if (conditionText === "Light rain" || conditionText === "Light rain shower") {
      setBgImage("url('/lightRain.jpg')");
    } else if (
      conditionText === "Moderate rain" ||
      conditionText === "Light freezing rain" ||
      conditionText === "Heavy rain"
    ) {
      setBgImage("url('/ModerateRain.webp')");
    } else if (conditionText === "Fog") {
      setBgImage("url('/Fog.jpg')");
    } else if (
      conditionText === "Patchy light rain with thunder" ||
      conditionText === "Thundery outbreaks possible" ||
      conditionText === "Moderate or heavy rain with thunder"
    ) {
      setBgImage("url('/RainWT.webp')");
    } else if (
      conditionText === "Moderate snow" ||
      conditionText === "Moderate or heavy snow showers" ||
      conditionText === "Heavy snow"
    ) {
      setBgImage("url('/ModerateSnow.avif.png')");
    } else {
      setBgImage("url('/clear.jpg')");
    }
  }, [conditionText]);
  return (
    <>
      <section className="w-full h-full bg-[#1F2041] text-center text-white mt-12">
        <div
          className="pt-10 flex flex-col justify-center space-y-2 bg-cover bg-no-repeat bg-center h-96  shadow-2xl"
          style={{
            backgroundImage: bgImage,
          }}
        >
          <h3 className="text-3xl">{locationName}</h3>
          <h3 className="text-6xl">{temperature}&deg;</h3>
          <h3 className="text-2xl">{conditionText}</h3>
          <div className="flex justify-center text-2xl space-x-3">
            <p>{todayMIN}&deg;</p>
            <p>{todayMAX}&deg;</p>
          </div>
        </div>
      </section>
    </>
  );
}
