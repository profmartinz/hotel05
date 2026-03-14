const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".menu-close");

if (toggle && menu) {

  toggle.addEventListener("click", () => {
    menu.classList.add("active");
  });

}

if (closeBtn && menu) {

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });

}