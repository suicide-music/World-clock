function updateTime() {
  let mainTime = document.querySelector("#main-current-time");
  let currentTime = moment().tz("Europe/Vilnius").format("HH:mm:ss");
  mainTime.innerHTML = currentTime;
}

function showTime(event) {
  let selectedCity = event.target.value;
  let cityName = document.querySelector("#main-city");
  let cityDate = document.querySelector("#main-current-date");
  let cityTime = document.querySelector("#main-current-time");

  if (selectedCity == "London") {
    cityName.innerHTML = selectedCity;
    cityTime.innerHTML = moment().tz("Europe/London").format("HH:mm:ss");
    cityDate = moment().tz("Europe/London").format("Do MMMM YYYY");
  } else {
    if (selectedCity == "Tokyo") {
      cityName.innerHTML = selectedCity;
      cityTime.innerHTML = moment().tz("Asia/Tokyo").format("HH:mm:ss");
      cityDate = moment().tz("Asia/Tokyo").format("Do MMMM YYYY");
    } else {
      if (selectedCity == "Ulaanbaatar") {
        cityName.innerHTML = selectedCity;
        cityTime.innerHTML = moment().tz("Asia/Ulaanbaatar").format("HH:mm:ss");
        cityDate = moment().tz("Asia/Ulaanbaatar").format("Do MMMM YYYY");
      } else {
        if (selectedCity == "Vilnius") {
          cityName.innerHTML = selectedCity;
          cityTime.innerHTML = moment().tz("Europe/Vilnius").format("HH:mm:ss");
          cityDate = moment().tz("Europe/Vilnius").format("Do MMMM YYYY");
        }
      }
    }
  }
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
selectElement.addEventListener("change", showTime);
