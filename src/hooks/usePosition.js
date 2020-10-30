import { useState, useEffect } from "react";

const usePosition = () => {
  const [position, setPosition] = useState({});
  const [geoError, setGeoError] = useState(null);

  const onChange = ({ coords }) => {
    setPosition({
      lat: coords.latitude,
      lon: coords.longitude,
    });
  };
  const onError = (error) => {
    setGeoError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    let watcher;

    if (!geo) {
      setGeoError("Geolocation is not supported");
      return;
    }

    const watchPosition = async () => {
      watcher = await geo.watchPosition(onChange, onError);
    };
    watchPosition();

    return () => geo.clearWatch(watcher);
  }, []);

  return { position, geoError };
};

export default usePosition;
