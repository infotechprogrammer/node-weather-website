const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2FoaWxiYXRyYTE1OCIsImEiOiJja3VocDhqaDcwZXJ6Mm5vemVzZGRnZG53In0.EUROkAKmIMbs8kyhoIlJfg&limit=1';
  
    request({url, json:true}, (error, {body}) => {
      if(error) {
        callback('Unable to connect to location services!', undefined);
      } else if (body.features.length ===0) {
        callback('Unable to find location. Try another location',undefined);
      } else {
        callback(undefined, {
          latitude: body.features[0].center[1],
          longitude: body.features[0].center[0],
          location: body.features[0].place_name
        })
      }
    });
  }

  module.exports = geocode;


  // Geocoding without callback function
// Address -> Lat/Long -> Weather

// const geocodeURL =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Jalandhar.json?access_token=pk.eyJ1Ijoic2FoaWxiYXRyYTE1OCIsImEiOiJja3VocDhqaDcwZXJ6Mm5vemVzZGRnZG53In0.EUROkAKmIMbs8kyhoIlJfg&limit=1";

// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to location services!");
//   } else if(response.body.features.length === 0) {
//       console.log("Unable to find location! Try again with different search term")
//   } else {
//     const latitude = response.body.features[0].center[1];
//     const logitude = response.body.features[0].center[0];
//     console.log(latitude, logitude);
//   }
// });