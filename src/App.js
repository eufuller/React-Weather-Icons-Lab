import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherForecast from "./components/WeatherForecast";

export default function App() {
  const weather = weatherData.map((aDay, idx) => {
    return <WeatherForecast {...aDay} key={idx} />;
  });
  console.log("this is the weather", weather);

  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section className="weather-app">{weather}</section>
    </div>
  );
}
