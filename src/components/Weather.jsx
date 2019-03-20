import React, { Component } from "react";
import WeatherCurrently from "./WeatherCurrently";
import WeatherDaily from "./WeatherDaily";
import {
  getCurrentWeather,
  getDailyWeather
} from "../services/fakeWeatherService";

class Weather extends Component {
  state = {
    currently: {},
    daily: []
  };

  componentDidMount() {
    const currently = getCurrentWeather();
    const daily = getDailyWeather();
    this.setState({ currently, daily });
  }

  render() {
    return (
      <React.Fragment>
        <WeatherCurrently data={this.state.currently} />
        <WeatherDaily data={this.state.daily} />
      </React.Fragment>
    );
  }
}

export default Weather;
