const navbar = document.getElementById("navbar");

const sticky = navbar.offsetTop;

window.onscroll = function () {
  if (window.scrollY > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

// toggle nav menu
const navBtn = document.getElementById("nav-btn");
const navMenu = document.getElementById("nav-menu");

navBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  if (navMenu.classList.contains("show")) {
    navBtn.innerHTML = `<i class='bx bx-x'></i>`;
  } else {
    navBtn.innerHTML = `<i class='bx bx-menu'></i>`;
  }
});
