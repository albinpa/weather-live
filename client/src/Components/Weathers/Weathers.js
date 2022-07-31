import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Weather from '../Weather/Weather';

function History() {

    const [weathers, setWeathers] = useState([])

    //get latest weathers of 20 cities....
    useEffect(() => {

        axios.get("http://localhost:5000/weather/").then((response) => {
            let data = response.data
            setWeathers(data);
        })
    }, [])

    return (
        <div>
            <div className='col'>
                <div className='container'>
                    <div className='row' >

                        {weathers.map((obj, index) => {

                            let { cityname, country, lon, lat, dayone } = obj
                            let { date, mintemp, maxtemp, avgtemp, text, code } = dayone
                            return (
                                <div className='col-3'>
                                    <Weather key={obj._id} title={cityname}
                                        lat={lat} long={lon} maxtemp={maxtemp}
                                        mintemp={mintemp} avgtemp={avgtemp} text={text}
                                        country={country} date={date} code={code} isCard
                                    />
                                </div>
                            )
                        })};
                    </div>
                </div>
            </div>

        </div>
    )
}

export default History;