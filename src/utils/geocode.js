const request = require("postman-request");

const geocode = (address, callback) => {
  //encodeURIComponent converts address to string if its not string
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoianVzdGljZWdhbWVwbGF5cyIsImEiOiJjbDMxcHd5bWowY2ozM2pwOWFiZmJ6czJ2In0.2xSRufCsM4jM9TDR5EvB1Q&limit=1";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        location: response.body.features[0].place_name,
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
      });
    }
  });
};

module.exports = geocode;
