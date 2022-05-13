const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=e0788e66fccd306547cbcaa18216db6f&query=" +
    latitude +
    "," +
    longitude;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        temperature: response.body.current.temperature + "° Celsius",
        feelslike: response.body.current.feelslike + "° Celsius",
        humidity: response.body.current.humidity + "%",
        airPresure: response.body.current.pressure + " millibars",
        uvIndex: response.body.current.uv_index,
        observationTime: response.body.current.observation_time,
      });
    }
  });
};

module.exports = forecast;
