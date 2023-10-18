const navToggle= document.querySelector(".mobile-nav-icon");
const navBar = document.querySelector("nav");

navToggle.addEventListener("click", ()=> {
  navBar.classList.toggle("open-nav");
})