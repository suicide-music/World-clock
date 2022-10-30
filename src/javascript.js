function updateTime() {
  let mainTime = document.querySelector("#main-current-time");
  let currentTime = moment().tz("Europe/Vilnius").format("HH:mm:ss");
  mainTime.innerHTML = currentTime;

  let tokyoTime = document.querySelector("#tokyo-time");
  tokyoTime.innerHTML = moment().tz("Asia/Tokyo").format("HH:mm:ss");
}

let userTimeZoneName = document.querySelector("#user-city");
let userTimeZone = moment.tz.guess();
userTimeZoneName.innerHTML = userTimeZone;

let tokyoDate = document.querySelector("#tokyo-date");
tokyoDate.innerHTML = moment().tz("Asia/Tokyo").format("Do MMMM YYYY");
let mainDate = document.querySelector("#main-current-date");
let currentDate = moment().format("Do MMMM YYYY");
mainDate.innerHTML = currentDate;
updateTime();
setInterval(updateTime, 1000);
