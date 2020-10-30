import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../constants/apiKey";
import { BASIC_ICON_API, BASIC_WEATHER_API } from "../constants/api";

const useWeather = ({ position, geoError }) => {
  const [weatherData, setWeatherData] = useState({});
  const [weatherError, setWeatherError] = useState(null);

  // NOTE: I had to switch from www.metaweather.com to https://openweathermap.org since the former provides weather data for city name rather than geolocation.
  // Commented request receives data for a number of cities in the vicinity of provided location but not for the location provided.
  // const config = {
  //   params: {
  //     query: `${latitude},${longitude}`
  //   }
  // }
  // const response = await axios.get('https://cors-anywhere.herokuapp.com/http://www.metaweather.com/api/location/search/', config)

  useEffect(() => {
    const getWeatherData = async ({ lat, lon }) => {
      try {
        const config = {
          params: {
            lat,
            lon,
            appid: API_KEY,
            units: "metric",
          },
        };

        const { data: weather } = await axios.get(
          `${BASIC_WEATHER_API}/data/2.5/weather`,
          config
        );
        const iconcode = weather?.weather[0]?.icon;
        const { data: icon } = await axios.get(
          `${BASIC_ICON_API}/img/wn/${iconcode}@2x.png`
        );
        setWeatherData({ temperature: weather?.main?.temp, icon });
      } catch (e) {
        console.error(e);
        setWeatherError("Getting weather data failed");
      }
    };

    if (!geoError && position?.lon && position?.lat) {
      getWeatherData(position);
    }
  }, [geoError, position]);

  return { ...weatherData, weatherError };
};

export default useWeather;
