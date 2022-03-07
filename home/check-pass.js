var page;
var run = true;

function pass(myPage) {
    document.getElementById("navbar").style.display = "none";
    document.getElementById("pass").style.display = "block";
    page = myPage;
}

function check() {
    if (document.querySelector('input').value == '1') {
        window.open(page,'_self');
    }
}