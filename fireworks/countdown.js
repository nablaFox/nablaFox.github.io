var countDownDate = new Date("March 3, 2022 21:34:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "0d 0h 0m 0s";
    document.getElementById("countdown").style.animation = "fade-out 1s linear forwards";

    function FadeIn() {
      document.getElementById("countdown").innerHTML = "Auguri Pey ❤️";
      document.getElementById("countdown").style.top = "40%";
      document.getElementById("countdown").style.animation = "fade-in 2s linear forwards";
      document.getElementById("countdown2").style.animation = "fade-in 2s linear forwards";
    }
    const Timer = setTimeout(FadeIn, 1000);
  }
}, 1000);
