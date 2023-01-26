var date = new Date();
var hours = date.getHours();

if (hours >= 4 && hours < 12) {
  document.getElementById("greeting").innerHTML = "Good morning, User!"
} else if (hours >= 12 && hours < 16) {
  document.getElementById("greeting").innerHTML = "Good afternoon, User!"
} else if (hours >= 16 || hours < 4) {
  document.getElementById("greeting").innerHTML = "Good evening, User!"
}

function refreshTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var time = hours + ":" + minutes + " " + amPm;
  document.getElementById("currentTime").innerHTML = "The time is now " + time;
}
setInterval(refreshTime, 1000);
