import { useContext } from "react";
import { infocontext } from "../../Utilities/usecontext";
import CurrentTime from "./CurrentTime";

const WeatherInfo = () => {
  const value = useContext(infocontext);

  const getWeatherIcon = (description: string) => {
    switch (description) {
      case "sunny":
      case "clear sky":
        return <i className="fa-solid fa-sun"></i>;
      case "cloudy":
      case "overcast clouds":
        return <i className="fa-solid fa-cloud"></i>;
      case "broken clouds":
        return <i className="fa-solid fa-cloud-bolt"></i>;
      case "scattered clouds":
        return <i className="fa-solid fa-cloud-sun"></i>;
      case "rain":
      case "light rain":
        return <i className="fa-light fa-raindrops"></i>;
      case "drizzle":
        return <i className="fa-light fa-cloud-drizzle"></i>;
      case "heavy rain":
        return <i className="fa-solid fa-cloud-rain"></i>;
      case "snow":
      case "light snow":
      case "heavy snow":
        return <i className="fa-solid fa-snowflake"></i>;
      case "thunderstorm":
        return <i className="fa-solid fa-bolt"></i>;
      default:
        return <i className="fa-solid fa-sun"></i>;
    }
  };

  const getTemperatureIcon = (tempMax: number) => {
    if (tempMax < 15) {
      return <i className="fa-solid fa-snowflake text-blue-500"></i>;
    } else if (tempMax > 25) {
      return <i className="fa-solid fa-sun text-red-500"></i>;
    } else {
      return <i className="fa-solid fa-cloud-sun text-yellow-500"></i>;
    }
  };

  return (
    <div className="w-full p-4 sm:p-6">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 max-w-4xl lg:max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Current Weather
          </h2>
          <p className="text-sm text-gray-500 mt-2 sm:mt-0">
            <CurrentTime />
          </p>
        </div>
        <div className="text-center mb-6">
          <div className="text-3xl sm:text-4xl font-bold text-gray-800">
            {value.weatherresult.city}, {value.weatherresult.country}
          </div>
          <div className="text-4xl sm:text-5xl font-extrabold text-blue-600 mt-2">
            {getWeatherIcon(value.weatherresult.description)}{" "}
            {value.weatherresult.temperature}°C
          </div>
          <p className="text-base sm:text-lg font-medium text-gray-600 mt-2">
            {value.weatherresult.description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <p className="heading-para">Feels Like</p>
            <p className="body-para">{value.weatherresult.feelslike}°C</p>
          </div>
          <div>
            <p className="heading-para">Pressure</p>
            <p className="body-para">{value.weatherresult.pressure} hPa</p>
          </div>
          <div>
            <p className="heading-para">Temp Min</p>
            <p className="body-para">{value.weatherresult.tempMin}°C</p>
          </div>
          <div>
            <p className="heading-para">Temp Max</p>
            <p className="body-para">
              {getTemperatureIcon(value.weatherresult.tempMax)}{" "}
              {value.weatherresult.tempMax}°C
            </p>
          </div>
          <div>
            <p className="heading-para">Cloud Cover</p>
            <p className="body-para">{value.weatherresult.clouds}%</p>
          </div>
          <div>
            <p className="heading-para">Humidity</p>
            <p className="body-para">{value.weatherresult.humidity}%</p>
          </div>
          <div>
            <p className="heading-para">Visibility</p>
            <p className="body-para">{value.weatherresult.visibility} km</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;