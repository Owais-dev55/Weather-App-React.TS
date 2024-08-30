import { createContext } from "react";
import { WeatherInfoProp } from "./Types";

export const infocontext = createContext({
  weatherresult: {
    city: '',
    country: '',
    temperature: 0,
    humidity: 0,
    wind: 0,
    feelslike: 0,
    visibility: 0,
    pressure: 0,
    description: '',
    tempMin:0,
    tempMax:0,
    clouds:0
  },
  updateWeather: (weather: WeatherInfoProp) => {},
})