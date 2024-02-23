const mobileNav = document.querySelector("#mobile-nav-bar");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close");

const anchors = document.querySelectorAll("a");

menuBtn.addEventListener("click", () => {
  mobileNav.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  mobileNav.style.display = "none";
});

anchors.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    mobileNav.style.display = "none";
  });
});

// Carousel Controller
const leftBtn = document.querySelector("#button-left");
const rightBtn = document.querySelector("#button-right");

const testimonyDiv = document.querySelector(".testimony");
const testimonyDivWidth = testimonyDiv.offsetWidth;

const testimonyWindow = document.querySelector(".testimony-window");

let translatedValue = 0;

const stubValue = 10; //adjust small sliding value 10px

const numberOfSlides = document.querySelectorAll(".testimony").length - 1; //since initial slide is already visible we subtract 1 from the total length

/**
 * takes direction as parameter and transaltes the slide window as required
 * if transalated value is 0 and left button is pressed then it simply returns
 * if right button is pressed and the translated value is greater it returns void avoiding further sliding
 * @param {string} direction 
 * @returns void
 */
const handleCarouselSlide = (direction) => {
  if (direction == "left") {
    if (translatedValue == 0) return;
    translatedValue = translatedValue + testimonyDivWidth + stubValue;
    testimonyWindow.style.transform = `translateX(${translatedValue}px)`;
  } else if (direction == "right") {
    if (translatedValue < -testimonyDivWidth * numberOfSlides) return;
    translatedValue = translatedValue - testimonyDivWidth - stubValue;
    testimonyWindow.style.transform = `translateX(${translatedValue}px)`;
  }
};
rightBtn.addEventListener("click", ()=>handleCarouselSlide("right"));
leftBtn.addEventListener("click", ()=>handleCarouselSlide("left"));
