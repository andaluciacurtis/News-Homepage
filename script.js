const navToggle= document.querySelector(".mobile-nav-icon");
const navBar = document.querySelector("nav");
const darkBGHelper = document.querySelector(".darken-bg-helper");

navToggle.addEventListener("click", ()=> {
  navBar.classList.toggle("open-nav");
  darkBGHelper.classList.toggle("appear");
})