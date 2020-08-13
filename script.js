// JS 2 [popular tour] toggle

const navBtn = document.querySelectorAll(".navigation-button");

Array.from(navBtn).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});
