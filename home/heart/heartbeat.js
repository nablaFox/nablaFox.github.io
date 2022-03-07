var heartbeat = new Audio('home/heart/heartbeat.mp3');
var heart = document.getElementById("heart");
var click = false;

function beat() {
    if (click == true)
        heartbeat.play();
}

heart.addEventListener("animationiteration", beat, false);
heart.addEventListener("click", function () {
    click = true;
});

