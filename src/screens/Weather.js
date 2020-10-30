import React, { useState } from "react";
import styled from "styled-components";
import RangeSlider from "react-bootstrap-range-slider";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import { BASIC_ICON_API } from "../constants/api";
import getBackgroundColor from "../helpers/getBackgroundColor";

const WeatherContainer = styled.div`
  position: relative;
  background: ${({ temperature }) => getBackgroundColor(temperature)};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Weather = ({
  geoError,
  temperature: initialTemperature,
  weatherError,
  iconcode,
}) => {
  const [temperature, setTemperature] = useState(initialTemperature ?? 0);

  return (
    <WeatherContainer {...{ temperature }}>
      {!!geoError ? <div>{geoError}</div> : null}
      {!!weatherError ? (
        <div>{weatherError}</div>
      ) : (
        <img
          src={`${BASIC_ICON_API}/img/wn/${iconcode}@2x.png`}
          alt="alternative text"
        />
      )}
      <SliderContainer>
        <RangeSlider
          {...{
            value: temperature,
            size: "lg",
            min: -50,
            max: 50,
            onChange: ({ target }) => {
              setTemperature(Number(target.value));
            },
          }}
        />
      </SliderContainer>
    </WeatherContainer>
  );
};

export default Weather;
