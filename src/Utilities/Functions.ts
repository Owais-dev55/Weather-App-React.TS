const Api_URl = "https://api.openweathermap.org/data/2.5/weather?";
const Api_key = "9b5858e73dc3d49479a4b1168cf96df4";

let getWeather = async (city: string) => {
  const response = await fetch(
    `${Api_URl}q=${city}&appid=${Api_key}&units=metric`
  );
  const jsonData = await response.json();
  let Weather = {
    city: jsonData.name,
    country: jsonData.sys.country,
    temperature: jsonData.main.temp,
    humidity: jsonData.main.humidity,
    wind: jsonData.wind.speed,
    feelslike: jsonData.main.feels_like,
    visibility: jsonData.visibility / 1000,
    pressure: jsonData.main.pressure,
    description: jsonData.weather[0].description,
    tempMin: jsonData.main.temp_min,
    tempMax: jsonData.main.temp_max,
    clouds: jsonData.clouds.all,
  };
  console.log(jsonData);
  return Weather;
};

export { Api_URl, Api_key, getWeather };
