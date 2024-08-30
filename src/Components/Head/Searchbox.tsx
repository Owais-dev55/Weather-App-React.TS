import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { getWeather } from "../../Utilities/Functions";
import { infocontext } from "../../Utilities/usecontext";

const Searchbox = () => {
  const { updateWeather } = useContext(infocontext);
  const [city, setcity] = useState("");
  const [error, seterror] = useState(false);
  const handleLocation = (event: ChangeEvent<HTMLInputElement>) => {
    setcity(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      let weather = await getWeather(city);
      if (weather) {
        updateWeather(weather);
      }
    } catch (error) {
      seterror(true);
      setTimeout(() => {
        seterror(false);
      }, 4000);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="w-full sm:w-auto">
        <div className="relative w-full sm:w-48">
          <input
            type="text"
            value={city}
            onChange={handleLocation}
            placeholder="Enter the city name"
            className="w-full py-3 sm:py-5 pl-4 text-lg sm:text-xl text-white bg-transparent border-0 outline-none transition duration-500 z-10"
          />
          <span className="absolute left-0 py-3 sm:py-5 pl-4 text-base sm:text-lg text-white transition duration-500 pointer-events-none"></span>
          <i className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 rounded-full transition duration-500 pointer-events-none z-9"></i>
        </div>
        <button className="flex items-center justify-center overflow-hidden border border-green-600 rounded py-2 px-4 sm:px-6 sm:py-3 w-40 sm:w-auto h-10 sm:h-12 text-white text-sm sm:text-lg bg-green-500 hover:bg-green-700 active:translate-y-1 active:shadow-none transition duration-150 ease-in-out ml-2 mt-2">
  <span className="uppercase font-normal">
    Check Weather &nbsp;
    <i className="fa-solid fa-magnifying-glass-location"></i>
  </span>
</button>

      </form>
      {error && (
        <p className="text-yellow-300 font-bold text-lg mb-4 	p-2.5 rounded-lg bg-red-700 border border-solid border-red-500">
          {" "}
          <i className="fa-sharp fa-solid fa-triangle-exclamation"></i> &nbsp; !
          No such place found{" "}
        </p>
      )}
    </>
  );
};

export default Searchbox;
