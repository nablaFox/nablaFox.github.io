function FadeInText(string, pos) {
    document.getElementById(pos).innerHTML = string;
    document.getElementById(pos).style.animation = "fade-in 3s linear forwards";
}

function FadeOutElem(pos) {
    for (p in pos) {
        let d = document.getElementById(pos[p]);
        if (window.getComputedStyle(d).getPropertyValue("opacity") != 0)
            d.style.animation = "fade-out 1.5s linear forwards";
    }
}