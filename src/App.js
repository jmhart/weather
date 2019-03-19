import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
import Weather from "./components/Weather";
import WeatherItem from "./components/WeatherItem";
import "./App.css";
import "./weather.css";

library.add(faCloudSunRain);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather />

        <div class="container">
          <div class="row">
            <div class="col">
              <WeatherItem />
            </div>
            <div class="col">
              <WeatherItem />
            </div>
            <div class="col">
              <WeatherItem />
            </div>
            <div class="col">
              <WeatherItem />
            </div>
            <div class="col">
              <WeatherItem />
            </div>
            <div class="col">
              <WeatherItem />
            </div>
            <div class="col">
              <WeatherItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
