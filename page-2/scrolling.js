window.onscroll = function(e) {

    if (this.oldScroll < this.scrollY) {
        console.log("scroll-down effect");
    }
    this.oldScroll = this.scrollY;
}
