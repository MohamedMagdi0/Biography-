const navBar = document.getElementById("navBar");
const navBtn = document.getElementById("navBtn");
const navImg = document.getElementById("navImg");
const body = document.getElementsByTagName("body")[0];
let isNavOpen = false;
const toggleNavBar = () => {
  if (!isNavOpen) {
    navBar.classList.add("nav-overlay");
    navBtn.classList.add("nav-overlay-btn");
    navImg.src = "./img/cancel.svg";
    body.style.height = "100vh";
    body.style.overflow = "hidden";
  } else {
    resetStyles();
  }
  isNavOpen = !isNavOpen;
};

const closeNav = () => {
  isNavOpen = false;
  resetStyles();
};

const resetStyles = () => {
  navBar.classList.remove("nav-overlay");
  navBtn.classList.remove("nav-overlay-btn");
  navImg.src = "./img/menu.svg";
  body.style.overflow = "auto";
};
