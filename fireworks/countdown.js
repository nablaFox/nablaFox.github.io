var countDownDate = new Date("March 20, 2022 00:00:03").getTime();

let now = new Date().getTime();
let distance = countDownDate - now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

var countdown = document.getElementById("countdown");

if (days <= 4) {
  countdown.style.display = "block";
  document.getElementById("navbar").style.display = "none";
}
else {
  countdown.style.display = "none";
}

if (distance >= 0) {
  countdown.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}

var x = setInterval(function() {

  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    //stop the countdown
    clearInterval(x);
    countdown.innerHTML = "0d 0h 0m 0s";

    //fade out elements
    FadeOutElem(['signature', 'heart', 'love-text', 'countdown']);
    disappear_sign = () => document.getElementById("signature").style.visibility = "hidden";
    setTimeout(disappear_sign, 1500);
    document.body.style.animation = "changebg 4s forwards";

    //fireworks!
    StartFireworks();

    //fade in elements
    document.getElementById("monthly-text").style.display = "block";
    document.getElementById("monthly-text").style.animation = "fade-in 2s linear forwards";
  }
}, 1000);