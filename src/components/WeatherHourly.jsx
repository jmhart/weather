import React from "react";
import WeatherItem from "./WeatherItem";

const WeatherHourly = ({ data }) => {
  const weatherItems = data.map(d => (
    <div key={d.id} className="col">
      <WeatherItem dayOfWeek={d.time} temp={d.temp} />
    </div>
  ));
  return <div className="row">{weatherItems}</div>;
};

export default WeatherHourly;
