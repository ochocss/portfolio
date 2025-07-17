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
    closeDropdown();
  }

  prevScrollpos = currentScrollPos;
}

function openDropdown() {
  document.getElementById("dropdown-items").classList.toggle("active");
}

function closeDropdown() {
  var dropdowns = document.getElementsByClassName("dropdown-items");
  var i;
  var length = dropdowns.length;
  for (i = 0; i < length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('active')) {
      openDropdown.classList.remove('active');
    }
  }
}

window.onclick = (event) => {
  if (!event.target.matches('.dropbtn')) {
    closeDropdown();
  }
}