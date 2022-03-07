var windowHeight = window.innerHeight;
classes = ['.reveal-dx', '.reveal-sx', 'section > h1', 'section > p'];

function reveal() {
    for (c in classes) {
        var reveals = document.querySelectorAll(classes[c]);
        for (var i = 0; i < reveals.length; i++) {
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
}

window.addEventListener("scroll", reveal);

reveal();