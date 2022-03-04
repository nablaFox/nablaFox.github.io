var countDownDate = new Date("March 4, 2022 16:33:03").getTime();

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
    document.getElementById("signature").style.display = "none";
    document.getElementById("countdown").innerHTML = "0d 0h 0m 0s";
    document.getElementById("countdown").style.animation = "fade-out 1s linear forwards";

    function FadeIn() {
      document.getElementById("countdown").innerHTML = "Auguri Pey ❤️";
      document.getElementById("countdown").style.top = "45%";
      document.getElementById("countdown").style.animation = "fade-in 2s linear forwards";
      document.getElementById("countdown2").style.display = "block";
      document.getElementById("countdown2").style.animation = "fade-in 2s linear forwards";
    }
    const Timer = setTimeout(FadeIn, 1000);
    StartFireworks();
  }
}, 1000);