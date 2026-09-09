let startBtn = document.querySelector(".start-learning-btn");
if (startBtn) {
  startBtn.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "Pages/dashboard.html";
  });
}

let navToggle = document.querySelector("#nav-toggle");
let mobileNav = document.querySelector("#nav-mobile");

if (navToggle && mobileNav) {
  navToggle.addEventListener("click", function () {
    if (mobileNav.classList.contains("is-open")) {
      mobileNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    } else {
      mobileNav.classList.add("is-open");
      navToggle.setAttribute("aria-expanded", "true");
    }
  });
}
