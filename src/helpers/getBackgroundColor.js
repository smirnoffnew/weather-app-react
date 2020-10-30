import {
  lowTempColor,
  mediumTempColor,
  highTempColor,
} from "../constants/color";

const getBackgroundColor = (temperature) => {
  if (typeof temperature === "number") {
    if (temperature <= -10) {
      return `rgb(${lowTempColor})`;
    }
    if (temperature === 10) {
      return `rgb(${mediumTempColor})`;
    }
    if (temperature >= 30) {
      return `rgb(${highTempColor})`;
    }
    if (temperature > -10 && temperature < 10) {
      const percent = parseFloat(Math.round((temperature + 10) * 5)) / 100.0;
      return `linear-gradient(rgba(${mediumTempColor}, ${percent}), rgba(${mediumTempColor}, ${percent})), linear-gradient(rgb(${lowTempColor}), rgb(${lowTempColor}))`;
    }

    if (temperature > 10 && temperature < 30) {
      const percent = parseFloat(Math.round((temperature - 10) * 5)) / 100.0;
      return `linear-gradient(rgba(${highTempColor}, ${percent}), rgba(${highTempColor}, ${percent})), linear-gradient(rgb(${mediumTempColor}), rgb(${mediumTempColor}))`;
    }
  }
  return "none";
};

export default getBackgroundColor;
