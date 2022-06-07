import React from "react";

const WeatherForecast = ({ img, conditions, time }) => {
  return (
    <div className="forecast">
      <img src={img} alt={img} />
      <h3 className="conditions"> Conditions: {conditions}</h3>
      <h4 className="time">{time}</h4>
    </div>
  );
};

export default WeatherForecast;
