const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4745628f0562fdb86219eca32803f8ae&query='+latitude+','+longitude;

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to Wheather Service',undefined);
        } else if (body.error) {
            callback("Unable to find location",undefined);
        } else {
            callback(undefined,
                body.current.weather_descriptions[0]+": It is currently "+body.current.temperature+" degrees out. It feels like "+body.current.feelslike+" degrees out. The humidity is "+body.current.humidity + "%.");
        }
    });
}

module.exports = forecast;


//Weatherstack API request code without callback

// const url = 'http://api.weatherstack.com/current?access_key=4745628f0562fdb86219eca32803f8ae&query=31.3260,75.5762';

// request({ url: url, json: true }, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to Wheather Service')
//     } else if(response.body.error) {
//         console.log("Unable to find location");
//     } else {
//         console.log(response.body.current.weather_descriptions[0]+": It is currently "+response.body.current.temperature+" degrees out. It feels like "+response.body.current.feelslike+" degrees out.");
//     }
// })
