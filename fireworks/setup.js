const container = document.querySelector('.fireworks-container')

const fireworks = new Fireworks(container, {
    target: container,
    hue: 120,
    startDelay: 1,
    minDelay: 20,
    maxDelay: 30,
    speed: 4,
    acceleration: 1.05,
    friction: 0.98,
    gravity: 1,
    particles: 75,
    trace: 3,
    explosion: 5,
    boundaries: {
        top: 50,
        bottom: container.clientHeight,
        left: 50,
        right: container.clientWidth
    },
    sound: {
        enabled: true,
        files: [
            'https://fireworks.js.org/sounds/explosion0.mp3',
            'https://fireworks.js.org/sounds/explosion1.mp3',
            'https://fireworks.js.org/sounds/explosion2.mp3'
        ],
        volume: { min: 1, max: 9 },
      }
})

function StartFireworks() {
    fireworks.start();
    FadeOutElem(['signature', 'heart', 'text']);
    document.body.style.animation = "changebg 4s forwards";
}

var eventTime = new Date("March 3, 2022 22:05:00").getTime();
currentTime = new Date().getTime();
deltaTime = eventTime - currentTime;
const myTimeout = setTimeout(StartFireworks, deltaTime);