var prevScrollpos = window.pageYOffset;
var navbarHeight = document.getElementById("navbar").offsetHeight;

const body = document.body;
const html = document.documentElement;

const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  console.log(height); /* the second condition is to prevent the navbar to blocking the section when redirecting */
  if (prevScrollpos > currentScrollPos && !(Math.abs(prevScrollpos-currentScrollPos) != 100 && currentScrollPos != height)) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = (navbarHeight * -1).toString() + "px";
  }

  prevScrollpos = currentScrollPos;
}