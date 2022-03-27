const moreOptions = document.querySelector("#bmore");
const bShowMobileLinks = document.querySelector("#bmenu");
const mobileMenu = document.querySelector(".links");
const moreMenu = document.querySelector(".more .menu")

bShowMobileLinks.addEventListener("click", (e) => {
  e.preventDefault();
  mobileMenu.classList.toggle("show"); // En esta linea con el toggle hacemos que si mobileMenu tiene la clase show se la quita y si no la tiene se la coloca
});

moreOptions.addEventListener("click", (e) => {
  e.preventDefault();
  moreMenu.classList.toggle("show");
});