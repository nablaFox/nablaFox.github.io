var page;

function pass(myPage) {
    document.getElementById("navbar").style.display = "none";
    document.getElementById("pass").style.display = "block";
    page = myPage;
}

function check() {
    if (document.querySelector('input').value == '1234') {
        window.open(page,'_self');
        document.getElementById("navbar").style.display = "block";
        document.getElementById("pass").style.display = "none";
    }
}
