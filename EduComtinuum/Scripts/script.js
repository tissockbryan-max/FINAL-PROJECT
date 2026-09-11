let submitForm = document.getElementById("submit-form");

if (submitForm) {
  let studentName = document.getElementById("student-name");
  let studentEmail = document.getElementById("student-email");
  let studentClass = document.getElementById("student-class");
  let school = document.getElementById("student-school");

  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();

    localStorage.setItem("studentName", studentName.value.trim());
    localStorage.setItem("studentClass", studentClass.value);
    localStorage.setItem("studentEmail", studentEmail.value);
    localStorage.setItem("studentSchool", school.value);

    window.location.href = "Pages/dashboard.html";
  });
}

const firstLetter = document.getElementById("first-letter");
const name = document.getElementById("name");
const savedStudentName = localStorage.getItem("studentName");

if (firstLetter && name) {
  firstLetter.textContent = savedStudentName.charAt(0).toUpperCase();
  name.textContent = savedStudentName;
}

let header = document.querySelector("header");
let hamburgerMenu = document.getElementById("hamburger-menu");
let cancel = document.getElementById("cancel");

if (header && hamburgerMenu && cancel) {
  hamburgerMenu.addEventListener("click", function () {
    header.classList.add("menu-open");
  });

  cancel.addEventListener("click", function () {
    header.classList.remove("menu-open");
  });
}
