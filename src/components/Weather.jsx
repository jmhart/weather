import React, { Component } from "react";
import WeatherCurrently from "./WeatherCurrently";
import WeatherDaily from "./WeatherDaily";
import {
  getCurrentWeather,
  getHourlyWeather,
  getDailyWeather
} from "../services/fakeWeatherService";
import WeatherHourly from "./WeatherHourly";

class Weather extends Component {
  state = {
    currently: {},
    hourly: [],
    daily: []
  };

  componentDidMount() {
    const currently = getCurrentWeather();
    const hourly = getHourlyWeather();
    const daily = getDailyWeather();
    this.setState({ currently, hourly, daily });
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <WeatherCurrently data={this.state.currently} />
        </div>
        <div className="row justify-content-center mb-5">
          <WeatherHourly data={this.state.hourly} />
        </div>
        <div className="row justify-content-center">
          <WeatherDaily data={this.state.daily} />
        </div>
      </div>
    );
  }
}

export default Weather;
