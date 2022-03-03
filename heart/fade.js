function FadeInText(string, pos) {
    document.getElementById(pos).innerHTML = string;
    document.getElementById(pos).style.animation = "fade-in 3s linear forwards";
}

function FadeOutElem(pos) {
    for (p in pos) {
        document.getElementById(pos[p]).style.animation = "fade-out 1s linear forwards";
    }
}