var prevScrollpos = window.pageYOffset;
var navbarHeight = document.getElementById("navbar").offsetHeight;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = (navbarHeight * -1).toString() + "px";
  }

  prevScrollpos = currentScrollPos;
}