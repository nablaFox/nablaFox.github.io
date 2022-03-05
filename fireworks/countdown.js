var countDownDate = new Date("March 2, 2022 00:25:03").getTime();

let now = new Date().getTime();
let distance = countDownDate - now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

if (distance >= 0) {
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}

var x = setInterval(function() {

  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "0d 0h 0m 0s";
    document.getElementById("monthly-text").style.display = "block";
    StartFireworks();
    document.getElementById("monthly-text").style.animation = "fade-in 2s linear forwards";
  }
}, 1000);