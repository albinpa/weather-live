const { default: axios } = require('axios');
const config = require('../config/config.json');

const min = config.weather.min
const max = config.weather.max
module.exports = {

    //api for getting weather info
    getWeather: (cityname) => {
        return new Promise(async (resolve, reject) => {
            axios.get(
                `http://api.weatherapi.com/v1/forecast.json?key=9b19a247869047c6a3c181258222607&q=${cityname}&days=${config.weather.days}&aqi=no&alerts=no`
            ).then((response, error) => {

                let loc = response.data.location
                let { name, country, lat, lon } = loc
                let dayone = {}
                let daytwo = {}
                let daythree = {}

                let daily = response.data.forecast.forecastday
                for (let index = 0; index < daily.length; index++) {
                    const element = daily[index];

                    let { date, day } = element
                    let { maxtemp_c, mintemp_c, avgtemp_c, condition } = day

                    if (index == 0) {
                        let icon = condition.icon.slice(20)

                        dayone = {
                            date: date, maxtemp: maxtemp_c,
                            avgtemp: avgtemp_c, mintemp: mintemp_c,
                            text: condition.text, icon: icon, code: condition.code
                        }
                    }
                    if (index == 1) {
                        let icon = condition.icon.slice(20)

                        daytwo = {
                            date: date, maxtemp: maxtemp_c,
                            avgtemp: avgtemp_c, mintemp: mintemp_c,
                            text: condition.text, icon: icon, code: condition.code
                        }
                    }
                    if (index == 2) {
                        let icon = condition.icon.slice(20)

                        daythree = {
                            date: date, maxtemp: maxtemp_c,
                            avgtemp: avgtemp_c, mintemp: mintemp_c,
                            text: condition.text, icon: icon, code: condition.code
                        }
                    }
                }


                if (dayone) {

                    let dev = dayone;
                    var d = 0
                    if (dev.mintemp < min || dev.maxtemp > max) {
                        if (dev.mintemp < min) {
                            d = dev.mintemp - min

                        } else {
                            d = dev.maxtemp - max

                        }

                    }

                }
                if (d == 0) {
                    var weather = {
                        cityname: name, country: country,
                        lat: lat, lon: lon, dayone: dayone,
                        daytwo: daytwo, daythree: daythree,
                    }
                } else {
                    var weather = {
                        cityname: name, country: country,
                        lat: lat, lon: lon, dayone: dayone, daytwo: daytwo,
                        daythree: daythree, deviation: d
                    }
                }

                resolve(weather)
            }).catch(error => {
                console.log(error)
            })
        })
    }
}