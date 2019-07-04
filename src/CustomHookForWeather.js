import React, {useState, useRef} from 'react';
import { useFetch } from './useFetch';

export default function CustomHookForWeather () {
    const inputEl = useRef();
    const [city, setCity] = useState('Delhi');
    const [weatherDetails, setWeatherDetails] = useFetch(`http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=5823e9e2ea703a25fd4ef33f5f2cff8d`, {});
    
    const updateCountry = () => {
        setCity(inputEl.current.value);
    }

    const loadData = async () => {
        setWeatherDetails(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5823e9e2ea703a25fd4ef33f5f2cff8d`)
    }

    return (
        <div className="form-group m-b-20">
            <label className="form-group mx-sm-3 mb-2">Weather Condition for City</label>
            <div className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <input className="form-control form-control-sm" value={city} type="text" ref={inputEl} onChange={updateCountry} />
                </div>
                <button className="btn btn-primary mb-2" onClick={loadData}>Search Weather</button>
            </div>
            <div className="card" style={{width: '18rem'}}>
                <div className="card-header">
                    Weather Details
                </div>
                {weatherDetails && weatherDetails.main && weatherDetails.sys &&
                <div className="card-body">
                    <p className="card-text">Temperature: {weatherDetails.main.temp}</p>
                    <p className="card-text">Humidity: {weatherDetails.main.humidity}</p>
                    <p className="card-text">Country: {weatherDetails.sys.country}</p>
                    <p className="card-text">Description: {weatherDetails.weather[0].description}</p>
               </div>
               }
            </div>
        </div>
    );
};