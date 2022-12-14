import { useEffect, useState } from "react";
import "./Weather.css";

function Weather() {
    const [weatherData, setWeatherData] = useState();
    const [city, setCity] = useState("berlin");

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=de`)
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
                <button type="button" onClick={() => setCity("duesseldorf")}>Düsseldorf</button>
                <button type="button" onClick={() => setCity("köln")}>Köln</button>
                <button type="button" onClick={() => setCity("berlin")}>Berlin</button>
                <button type="button" onClick={() => setCity("hamburg")}>Hamburg</button>
            </div>
            <div className="outputDates">
                <div className="clouds">
                    <p>{weatherData.weather[0].description} in {weatherData.name} </p>
                    <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description}></img>
                </div>
                <p className="currentW">Aktuell: {weatherData.main.temp}°C</p>
                <p>Windg.: {weatherData.wind.speed} meter/sec</p>
            </div>
        </div >
    );
}

export default Weather;