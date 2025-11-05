import Searchbox from "./Searchbox";
import Infobox from "./Infobox";
import {useState} from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        temp: 25.05,
        tempMin:  25.05,
        tempMax: 25.05,
        humidity: 47,
        feelslike: 24.84,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <Searchbox updateInfo={updateInfo}/>
            <Infobox info={weatherInfo}/>
        </div>
    )
}