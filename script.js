// JS 2 <pupular tours> tag
const navBtn = document.querySelectorAll(".navigation-button");

Array.from(navBtn).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});

// JS 4 . Put colors on 'close-navbar-icon'

const colors = ["red", "blue", "green", "yellow", "orange"];

let i = 0;

const navLink = document.querySelectorAll(".nav-link");

Array.from(navLink).forEach((item) => {
  item.style.cssText = `background-color:${colors[i++]}`;
});

// JS 6 navbar icon click - navbar wrapper coming out

const container = document.querySelector(".container");

const openNavbar = document.querySelector(".open-navbar-icon");
const closeNavbar = document.querySelector(".close-navbar-icon");

openNavbar.addEventListener("click", () => {
  container.classList.add("change");
});
closeNavbar.addEventListener("click", () => {
  container.classList.remove("change");
});
