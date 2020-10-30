import React from "react";
import usePosition from "./hooks/usePosition";
import useWeather from "./hooks/useWeather";
import Weather from "./screens/Weather";

const App = () => {
  const { position, geoError } = usePosition();

  const { temperature, weatherError, iconcode } = useWeather({
    position,
    geoError,
  });

  return <Weather {...{ temperature, weatherError, iconcode, geoError }} />;
};

export default App;
