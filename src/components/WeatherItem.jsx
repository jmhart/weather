import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class WeatherItem extends Component {
  state = {};
  render() {
    return (
      <div className="weather-item">
        <div className="weather-item-day">Friday</div>
        <FontAwesomeIcon icon="cloud-sun-rain" />
        <div className="weather-item-temp">32</div>
      </div>
    );
  }
}

export default WeatherItem;
