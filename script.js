const btnmobileEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnmobileEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
