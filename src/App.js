import React from "react";
import usePosition from "./hooks/usePosition";
import useWeather from "./hooks/useWeather";

const App = () => {
  const { position, geoError } = usePosition();

  const { temperature, icon, weatherError } = useWeather({
    position,
    geoError,
  });

  return (
    <div>
      {!!geoError ? <div>{geoError}</div> : null}
      {!!weatherError ? <div>{weatherError}</div> : null}
    </div>
  );
};

export default App;
