import React from "react";

const WeatherForecast = ({ img, conditions, time }) => {
  return (
    <div className="forecast">
      <img src={img} alt={img} />
      <p>
        <span>Conditions:</span> {conditions}
      </p>
      <p>
        <span>time:</span>
        {time}
      </p>
    </div>
  );
};

export default WeatherForecast;
