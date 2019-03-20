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
        <WeatherCurrently data={this.state.currently} />
        <WeatherHourly data={this.state.hourly} />
        <WeatherDaily data={this.state.daily} />
      </div>
    );
  }
}

export default Weather;
