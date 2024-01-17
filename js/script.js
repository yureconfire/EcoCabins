const swiper = new Swiper(".materials__slider", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

window.addEventListener("scroll", function () {
  this.scrollY > 0
    ? this.document.querySelector(".header").classList.add("scroll")
    : this.document.querySelector(".header").classList.remove("scroll");
});
