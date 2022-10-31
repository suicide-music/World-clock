function updateTime() {
  let userTime = document.querySelector("#user-time");
  let userTimeZone = moment.tz.guess();
  let currentTime = moment().tz(userTimeZone).format("HH:mm:ss");
  userTime.innerHTML = currentTime;
}

function changeCity(event) {
  let selectedTimeZone = event.target.value;
  let cityName = document.querySelector("#main-city");
  cityName.innerHTML = selectedTimeZone.split("/")[1];
  let cityDate = document.querySelector("#main-current-date");
  let cityTime = document.querySelector("#main-current-time");
  cityTime.innerHTML = moment().tz(selectedTimeZone).format("HH:mm");
  cityDate.innerHTML = moment().tz(selectedTimeZone).format("Do MMMM YYYY");
}

let userTimeZoneName = document.querySelector("#user-city");
let userTimeZone = moment.tz.guess();
userTimeZoneName.innerHTML = `📍Current location: ${
  userTimeZone.split("/")[1]
}`;

let userDate = document.querySelector("#user-date");
userDate.innerHTML = moment().tz(userTimeZone).format("Do MMMM YYYY");

let mainDate = document.querySelector("#main-current-date");
let currentDate = moment().tz("Europe/Vilnius").format("Do MMMM YYYY");
let mainTime = document.querySelector("#main-current-time");
mainTime.innerHTML = moment().tz("Europe/Vilnius").format("HH:mm");
mainDate.innerHTML = currentDate;
updateTime();
setInterval(updateTime, 1000);

let selectElement = document.querySelector("select");
selectElement.addEventListener("change", changeCity);
