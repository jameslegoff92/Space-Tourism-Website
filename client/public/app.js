const openNavBtn = document.querySelector(".js-open-nav");
const closeNavBtn = document.querySelector(".js-close-nav");
const navList = document.querySelector(".c-nav-list");

openNavBtn.addEventListener("click", openNav);
closeNavBtn.addEventListener("click", closeNav);

window.addEventListener("resize", function (e) {
  setMobileNav(e.currentTarget.innerWidth);
});

window.addEventListener("load", function (e) {
  setMobileNav(e.currentTarget.innerWidth);
});

//Function that opens the mobile navigation
function openNav() {
  openNavBtn.classList.add("js-hidden");
  closeNavBtn.classList.remove("js-hidden");
  navList.classList.remove("js-hidden");
}

//Function that closes the mobile navigation
function closeNav() {
  openNavBtn.classList.remove("js-hidden");
  closeNavBtn.classList.add("js-hidden");
  navList.classList.add("js-hidden");
}

//Function to determine window size and toggle mobile navigation control
function setMobileNav(width) {
  const windowWidth = width;
  const navSpans = Array.from(document.querySelectorAll(".js-span"));

  if (windowWidth > 650 && windowWidth < 1050) {
    //The 650 is the md-screen breakpoint
    openNavBtn.classList.add("js-hidden");
    closeNavBtn.classList.add("js-hidden");
    navList.classList.remove("js-hidden");
    navSpans.forEach((el) => {
      el.classList.add("js-hidden");
    });
  } else if (windowWidth >= 1050) {
    openNavBtn.classList.add("js-hidden");
    closeNavBtn.classList.add("js-hidden");
    navList.classList.remove("js-hidden");
    navSpans.forEach((el) => {
      el.classList.remove("js-hidden");
    });
  } else {
    openNavBtn.classList.remove("js-hidden");
    closeNavBtn.classList.add("js-hidden");
    navList.classList.add("js-hidden");
    navSpans.forEach((el) => {
      el.classList.remove("js-hidden");
    });
  }
}
