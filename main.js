import "@splidejs/splide/css/skyblue";
import Splide from "@splidejs/splide";

new Splide(".splide", {
  type: "loop",
  perPage: 1,
  autoplay: true,
}).mount();

const mobileNav = document.querySelector("#mobile-nav-bar");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close");

const anchors = document.querySelectorAll("a");

menuBtn.addEventListener("click", () => {
  mobileNav.style.transform = "scaleY(1)";
  menuBtn.style.display = "none";
  closeBtn.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  mobileNav.style.transform = "scaleY(0)";
  closeBtn.style.display = "none";
  menuBtn.style.display = "flex";
});

anchors.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    mobileNav.style.display = "none";
  });
});
