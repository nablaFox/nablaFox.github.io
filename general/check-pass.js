var page;
var run = true;

function pass(myPage) {
    document.getElementById("navbar").style.display = "none";
    document.getElementById("pass").style.display = "block";
    setInterval(check, 10);
    page = myPage;
    if (run == true)
        setInterval(check, 1000);
}

function check() {
    if (document.querySelector('input').value == '1234') {
        document.querySelector('input').value == '';
        window.open(page,'_self');
        run = false;
    }
}
