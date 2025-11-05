import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import "./Searchbox.css";

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "Your API Url";
    const API_KEY = "Your API Key";

    let getWeatherInfo = async () => {
       try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResposne = await response.json();
    
        let result = {
            city: city,
            temp: jsonResposne.main.temp,
            tempMin: jsonResposne.main.temp_min,
            tempMax: jsonResposne.main.temp_max,
            humidity: jsonResposne.main.humidity,
            feelsLike: jsonResposne.main.feels_like,
            weather: jsonResposne.weather[0].description,
        };
        console.log(result);
        return result;
    } catch (err) {
        throw err;
    }
    };


    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async(evt) => {
        
        try {
        evt.preventDefault();
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        // setError(false);
        }
        catch (err) {
            setError(true);
            setTimeout(() => setError(false), 1000);
        }
    };

    return (
        <div className='Searchbox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange = {handleChange}/>
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">
            Search
            </Button>
            {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    );
}