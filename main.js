const mobileNav = document.querySelector("#mobile-nav-bar");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close");

menuBtn.addEventListener("click", () => {
  mobileNav.style.display = "flex";
});

closeBtn.addEventListener("click",()=>{
    mobileNav.style.display = "none";
})