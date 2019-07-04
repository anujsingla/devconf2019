import React, {useState, useEffect, useRef, useCallback} from 'react';

export default function UseEffectHook () {
    const inputEl = useRef();
    const [city, setCity] = useState('Delhi');
    const [weatherDetails, setWeatherDetails] = useState({
        temperature: 20,
        description: '',
        humidity: '',
        country: ''
    });
    
    const updateCountry = () => {
        setCity(inputEl.current.value);
    }

    const loadData = async () => {
        const data = await fetchData();
        console.log(data);
        data && setWeatherDetails({
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            country: data.sys.country
        })
    }

    const fetchData = useCallback(async () => {
        console.log('city');
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5823e9e2ea703a25fd4ef33f5f2cff8d`)
         return response.json();
    }, [city]);

    useEffect(() => {
        fetchData().then((data) => {
            data && setWeatherDetails({
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                country: data.sys.country
            });
        });
    }, []);

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
                <div className="card-body">
                    <p className="card-text">Temperature: {weatherDetails.temperature}</p>
                    <p className="card-text">Humidity: {weatherDetails.humidity}</p>
                    <p className="card-text">Country: {weatherDetails.country}</p>
                    <p className="card-text">Description: {weatherDetails.description}</p>
            </div>
            </div>
        </div>
    );
};