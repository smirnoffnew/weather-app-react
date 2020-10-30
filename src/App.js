import React from "react";
import usePosition from "./hooks/usePosition";

const App = () => {
  const { position, geoError } = usePosition();

  return <div>{!!geoError ? <div>{geoError}</div> : null}</div>;
};

export default App;
