import React, { useState } from 'react'
import './Search.css'
import axios from 'axios';
import Weather from '../../Components/Weather/Weather';

function Search() {

    const [weather, setWeather] = useState({})
    const [cityName, setCityName] = useState('');
    const [dayOne, setDayOne] = useState([])
    const [dayTwo, setDayTwo] = useState([])
    const [dayThree, setDayThree] = useState([])
    //api for creating or viewing weather of a city...
    async function getWeather(cityname) {
        await axios.post("http://localhost:5000/add", { cityname: cityname }).then((response) => {
            setWeather(response.data.data)
            console.log(response.data.data.dayone)
            setDayOne({
                id: response.data.data.id,
                date: response.data.data.dayone.date,
                maxtemp: response.data.data.dayone.maxtemp,
                mintemp: response.data.data.dayone.mintemp,
                avgtemp: response.data.data.dayone.avgtemp,
                text: response.data.data.dayone.text,
                icon: response.data.data.dayone.icon,
                code: response.data.data.dayone.code
            })

            setDayTwo({
                id: response.data.data.id,
                date: response.data.data.daytwo.date,
                maxtemp: response.data.data.daytwo.maxtemp,
                mintemp: response.data.data.daytwo.mintemp,
                avgtemp: response.data.data.daytwo.avgtemp,
                text: response.data.data.daytwo.text,
                icon: response.data.data.daytwo.icon,
                code: response.data.data.daytwo.code
            })

            setDayThree({
                id: response.data.data.id,
                date: response.data.data.daythree.date,
                maxtemp: response.data.data.daythree.maxtemp,
                mintemp: response.data.data.daythree.mintemp,
                avgtemp: response.data.data.daythree.avgtemp,
                text: response.data.data.daythree.text,
                icon: response.data.data.daythree.icon,
                code: response.data.data.daythree.code
            })

        })
    }
    const handleSubmit = event => {
        event.preventDefault();

        getWeather(cityName)
        setCityName('');
    };
    return (
        <div>
            <form className='form-container' onSubmit={handleSubmit}>
                <input
                    className='input'
                    id="cityname"
                    name="cityname"
                    type="text"
                    onChange={event => setCityName(event.target.value)}
                    value={cityName}
                    placeholder="Enter CityName..."
                />
                <button type="submit" className='green_btn'>Search</button>
            </form>

            <div className='row'>
                <div className='col-8 offset-2'>
                    <div className='row'>
                        <div className='search-container'>
                            <div className='col-6 padd' >
                                <Weather key={weather.id} title={weather.cityname}
                                    lat={weather.lat} long={weather.lon} maxtemp={dayOne.maxtemp}
                                    mintemp={dayOne.mintemp} avgtemp={dayOne.avgtemp}
                                    text={dayOne.text} icon={dayOne.icon} country={weather.country}
                                    date={dayOne.date} code={dayOne.code}
                                />
                            </div>
                            <div className='col-6' >
                                <div className='row cont'>
                                    <div className='col-12'>
                                        <Weather isSmall maxtemp={dayTwo.maxtemp}
                                            mintemp={dayTwo.mintemp} avgtemp={dayTwo.avgtemp}
                                            text={dayTwo.text} icon={dayTwo.icon}
                                            date={dayTwo.date} code={dayTwo.code}
                                        />
                                    </div>
                                    <div className='col-12'>
                                        <Weather isSmall maxtemp={dayThree.maxtemp}
                                            mintemp={dayThree.mintemp} avgtemp={dayThree.avgtemp}
                                            text={dayThree.text} icon={dayThree.icon}
                                            date={dayThree.date} code={dayThree.code}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;