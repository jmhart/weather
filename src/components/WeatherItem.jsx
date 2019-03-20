import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeatherItem = ({ dayOfWeek, icon, temp }) => {
  return (
    <div className="weather-item">
      <div className="weather-item-day">{dayOfWeek}</div>
      <FontAwesomeIcon icon="cloud-sun-rain" />
      <div className="weather-item-temp">{temp}&#176;</div>
    </div>
  );
};

export default WeatherItem;
