function updateTime() {
  let mainTime = document.querySelector("#main-current-time");
  let currentTime = moment().tz("Europe/Vilnius").format("HH:mm:ss");
  mainTime.innerHTML = currentTime;
}

function changeCity(event) {
  let selectedTimeZone = event.target.value;
  let cityName = document.querySelector("#main-city");
  cityName.innerHTML = selectedTimeZone.split("/")[1];
  let cityDate = document.querySelector("#main-current-date");
  let cityTime = document.querySelector("#main-current-time");
  cityTime.innerHTML = moment().tz(selectedTimeZone).format("HH:mm:ss");
  cityDate = moment().tz(selectedTimeZone).format("Do MMMM YYYY");
}

let userTimeZoneName = document.querySelector("#user-city");
let userTimeZone = moment.tz.guess();
userTimeZoneName.innerHTML = `Current location: ${userTimeZone}`;

let mainDate = document.querySelector("#main-current-date");
let currentDate = moment().format("Do MMMM YYYY");
mainDate.innerHTML = currentDate;
updateTime();
setInterval(updateTime, 1000);

let selectElement = document.querySelector("select");
selectElement.addEventListener("change", changeCity);
