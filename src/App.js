import React from "react";
import styled from "styled-components";
import usePosition from "./hooks/usePosition";
import useWeather from "./hooks/useWeather";
import getBackgroundColor from "./helpers/getBackgroundColor";
import { BASIC_ICON_API } from "./constants/api";

const Wrapper = styled.div`
  background: ${({ temperature }) => getBackgroundColor(temperature)};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const { position, geoError } = usePosition();

  const { temperature, weatherError, iconcode } = useWeather({
    position,
    geoError,
  });

  return (
    <Wrapper {...{ temperature }}>
      {!!geoError ? <div>{geoError}</div> : null}
      {!!weatherError ? (
        <div>{weatherError}</div>
      ) : (
        <img
          src={`${BASIC_ICON_API}/img/wn/${iconcode}@2x.png`}
          alt="alternative text"
        />
      )}
    </Wrapper>
  );
};

export default App;
