import Head from "./Components/Head/Head";
import Body from "./Components/Body/Body";
import { useState } from "react";
import { infocontext } from "./Utilities/usecontext";
import { WeatherInfoProp } from "./Utilities/Types";

const WeatherApp = () => {
  const [weatherresult, setweatherresult] = useState<WeatherInfoProp>({
    city: "Hyderabad",
    country: "PK",
    temperature: 31,
    humidity: 70,
    wind: 333,
    feelslike: 32,
    visibility: 4,
    pressure: 432,
    description: "",
    tempMin: 0,
    tempMax: 0,
    clouds: 43,
  });
  const updateWeather = (weather: WeatherInfoProp) => {
    setweatherresult(weather);
  };
  
  return (
    <>
      <infocontext.Provider value={{weatherresult, updateWeather}}>
        <Head  />
        <Body />
      </infocontext.Provider>
    </>
  );
};

export default WeatherApp;
