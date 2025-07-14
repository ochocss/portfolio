var prevScrollpos = window.pageYOffset;
var navbarHeight;
document.getElementById("banner-navbar-space").style.minHeight = navbarHeight*2;

window.onload = fixNavbar;
window.onresize = fixNavbar;

function fixNavbar() {
  navbarHeight = document.getElementById("navbar").offsetHeight;
  document.getElementById("banner-navbar-space").style.minHeight = navbarHeight.toString() + "px";  
}

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos || currentScrollPos <= navbarHeight/2) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = (navbarHeight * -1).toString() + "px";
  }

  prevScrollpos = currentScrollPos;
}