import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
import Weather from "./components/Weather";
import "./App.css";
import "./weather.css";

library.add(faCloudSunRain);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
