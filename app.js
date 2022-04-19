const navButton = document.querySelector(".nav__btn");
const navItems = document.querySelector(".nav__items");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("active");
  navItems.classList.toggle("active");
});
