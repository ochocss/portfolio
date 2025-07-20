var prevScrollPos = window.pageYOffset;
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

  if (prevScrollPos > currentScrollPos || currentScrollPos <= navbarHeight/2) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = (navbarHeight * -1).toString() + "px";
    clearDropdowns(null);
  }

  prevScrollPos = currentScrollPos;
}

document.addEventListener("click", e => {
  const isDropdownBtn = e.target.matches("[dropbtn]");
  var currentDropdown = e.target.closest("[dropdown]");

  if(!isDropdownBtn && currentDropdown != null) return; // verify if the click was in a dropdown item

  if(isDropdownBtn) {
    currentDropdown.classList.toggle("active"); // activate dropdown
  }

  clearDropdowns(currentDropdown);
})

function clearDropdowns(maintainActive = null) {
  document.querySelectorAll("[dropdown].active").forEach(dropdown => {
    if(dropdown === maintainActive) return;
    dropdown.classList.remove("active"); // remove other dropdowns
  });
}

function loadLanguage(page, lang) {
  fetch(`languages/${page}/${lang}.json`)
    .then(response => response.json())
    .then(translations => {
      document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[key]) {
          element.textContent = translations[key];
        }
      });
    });
  
  clearDropdowns();
}