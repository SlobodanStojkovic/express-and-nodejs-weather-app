console.log("Client side javascript file is loaded");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

messageOne.textContent = "From JavaScript";
messageTwo.textContent = "";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      console.log(data);
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        console.log(data);
        messageOne.textContent = data.location;
        messageTwo.textContent =
          "Information from " +
          data.forecast.observationTime +
          " is: Current temperature is " +
          data.forecast.temperature +
          " and air humidity is " +
          data.forecast.humidity +
          ". Air pressure is " +
          data.forecast.airPresure +
          ". It feels like it is " +
          data.forecast.feelslike +
          ". The UV index is " +
          data.forecast.uvIndex;
      }
    });
  });
});
