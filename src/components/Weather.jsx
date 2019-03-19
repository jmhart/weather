import React, { Component } from "react";
import "../weather.css";

class Weather extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="weather-main-location">Chicago</div>
        <div className="weather-main-description">Mostly Sunny</div>
        <div className="weather-main-temperature">47&#176;</div>
      </React.Fragment>
    );
  }
}

export default Weather;
