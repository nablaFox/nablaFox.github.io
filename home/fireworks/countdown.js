var eventDate = new Date("March 7, 2022 00:00:03").getTime();
var countdown = document.getElementById("countdown");

let now = new Date().getTime();
let distance = eventDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var s = Math.floor((distance % (1000 * 60)) / 1000);

if (days <= 4 && distance > 0) {
  countdown.style.display = "block";
  document.getElementById("navbar").style.display = "none";
  countdown.innerHTML = days + "d " + h + "h " + m + "m " + s + "s ";

  var x = setInterval(function() {

    let now = new Date().getTime();
    let distance = eventDate - now;

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
}
else if (days <= 4 && distance < 0) {
  elem = ['heart', 'navbar', 'signature', 'love-text'];

  for (e in elem) {
    document.getElementById(elem[e]).style.display = "none";
  }

  document.getElementById("monthly-text").style.display = "block";
  document.getElementById("monthly-text").style.animation = "fade-in 2s linear forwards";
  document.body.style.animation = "changebg 4s forwards";
  StartFireworks();
}
else {
  countdown.style.display = "none";
}
