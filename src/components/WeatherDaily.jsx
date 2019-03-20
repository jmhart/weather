import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeatherDaily = ({ data }) => {
  const weatherRows = data.map(d => (
    <tr>
      <td>{d.time}</td>
      <td>
        <FontAwesomeIcon icon="cloud-sun-rain" />
      </td>
      <td>{d.temp}</td>
    </tr>
  ));
  return (
    <table className="table">
      <tbody>{weatherRows}</tbody>
    </table>
  );
};

export default WeatherDaily;
