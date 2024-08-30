import Searchbox from "./Searchbox";
import Image from "../../assets/main image.webp";
import lightRain from "../../assets/light rain.webp";
import clearSky from "../../assets/clear sunny.webp";
import brokenClouds from "../../assets/few clouds.jpg";
import HeavyRain from "../../assets/heavy rain.webp";
import overCast from "../../assets/overcast clouds.webp";
import thunderstorm from "../../assets/thunderstorm.webp";
import sun from "../../assets/sunny.webp";
import snow from "../../assets/snow.webp";
import rain from "../../assets/rain.webp";
import smoke from "../../assets/smoke.webp";
import haze from "../../assets/haze.webp";

import { useContext } from "react";
import { infocontext } from "../../Utilities/usecontext";

const FrontPage = () => {
  const { weatherresult } = useContext(infocontext);
  const getImageForWeather = (description: string): string => {
    switch (description.toLowerCase()) {
      case "sunny":
        return sun;
      case "clear sky":
        return clearSky;
      case "cloudy":
      case "overcast clouds":
        return overCast;
      case "broken clouds":
        return brokenClouds;
      case "scattered clouds":
        return brokenClouds;
      case "few clouds":
        return brokenClouds;
      case "rain":
      case "light rain":
        return lightRain;
      case "drizzle":
        return rain;
      case "heavy rain":
        return HeavyRain;
      case "heavy intensity rain":
        return HeavyRain;
      case "thunderstorm":
        return thunderstorm;
      case "snow":
        return snow;
      case "smoke":
        return smoke;
      case "haze":
        return haze;
      case "mist":
        return haze;
      default:
        return Image;
    }
  };

  const backgroundImage = getImageForWeather(weatherresult.description);

  return (
    <>
      <div
        className="flex flex-col justify-center items-center min-h-96 space-y-4 bg-cover bg-center bg-no-repeat w-full px-4 sm:px-8 lg:px-16"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        <Searchbox />
      </div>
    </>
  );
};

export default FrontPage;