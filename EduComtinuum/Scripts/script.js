let submitForm = document.getElementById("submit-form");
let studentName = document.getElementById("student-name");
let studentEmail = document.getElementById("student-email");
let studentClass = document.getElementById("student-class");
let school = document.getElementById("student-school");

submitForm.addEventListener("submit", function (event) {
  event.preventDefault();

  localStorage.setItem("studentName", studentName.value);
  localStorage.setItem("studentClass", studentClass.value);
  localStorage.setItem("studentEmail", studentEmail.value);
  localStorage.setItem("studentSchool", school.value);

  window.location.href = "Pages/dashboard.html";
});
