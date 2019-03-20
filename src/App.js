import React, { Component } from "react";
import Weather from "./components/Weather";
import icons from "./weatherIcons";
import "./App.css";
import "./weather.css";

icons.init();

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
