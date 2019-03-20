import React from "react";

const WeatherCurrently = ({ data }) => {
  return (
    <div className="weather-main">
      <div className="weather-main-location">{data.location}</div>
      <div className="weather-main-description">{data.description}</div>
      <div className="weather-main-temperature">{data.temp}&#176;</div>
    </div>
  );
};

export default WeatherCurrently;
