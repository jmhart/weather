import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeatherDaily = ({ data }) => {
  const weatherRows = data.map(d => (
    <tr key={d.id}>
      <td>{d.time}</td>
      <td>
        <FontAwesomeIcon icon={d.icon} />
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
