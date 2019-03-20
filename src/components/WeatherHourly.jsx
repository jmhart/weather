import React from "react";
import WeatherItem from "./WeatherItem";

const WeatherHourly = ({ data }) => {
  const weatherItems = data.map(d => (
    <div key={d.id} className="col">
      <WeatherItem dayOfWeek={d.time} temp={d.temp} />
    </div>
  ));
  return (
    <div className="container">
      <div className="row">{weatherItems}</div>
    </div>
  );
};

export default WeatherHourly;
