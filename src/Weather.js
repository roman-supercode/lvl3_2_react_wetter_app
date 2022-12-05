import { useEffect, useState } from "react";
import "./Weather.css";
import key from "./key.json";

// const key = "0ddd5e945f7a773bc88b9975bb9bd4e5";

function Weather() {
    const [weatherData, setWeatherData] = useState();
    const [city, setCity] = useState("berlin");

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key.APIkey}&units=metric&lang=de`)
            .then((response) => response.json())
            .then((weatherData) => {
                setWeatherData(weatherData);
                // console.log(weatherData);
            });
    }, [city]);

    if (weatherData === undefined) {
        return;
    }
    return (
        <div className="divWeather">
            <div className="chooseCountry">
                <button type="button" onClick={() => setCity("düsseldorlf")}>Düsseldorf</button>
                <button type="button" onClick={() => setCity("köln")}>Köln</button>
                <button type="button" onClick={() => setCity("berlin")}>Berlin</button>
                <button type="button" onClick={() => setCity("hamburg")}>Hamburg</button>
            </div>
            <div className="outputDates">
                <div className="container">
                    <p>{weatherData.weather[0].description} in {weatherData.name} </p>
                    <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description}></img>
                </div>
                <p>Current: {weatherData.main.temp}°C</p>
                <p>Wind Speed: {weatherData.wind.speed} meter/sec</p>
            </div>
        </div >
    );
}

export default Weather;