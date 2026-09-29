/**
 * Name: Tsoala Tissock Ranjoy Bryan
 * Project: EduContinuum Landing Page.
 * date: 09/23/2026
 */

let submitForm = document.getElementById("submit-form");
let studentName = document.getElementById("student-name");
let studentEmail = document.getElementById("student-email");
let studentClass = document.getElementById("student-class");
let school = document.getElementById("student-school");
let errorName = document.getElementById("errorForName");
let errorEmail = document.getElementById("errorForEmail");
let errorSchool = document.getElementById("errorForSchool");

/**
 *Function to validate the input form that is to be filled by the student,
 * returns a boolean that is used in an if statement within the forms eventlistener,
 * takes the following as parameters:
 * studentName, studentEmail, studentClass, school
 *
 * If statement that acts on the input form.
 * submitForm -> stores the form being gotten by id.
 * studentName -> stores the student's name.
 * studentEmail -> stores the student's email.
 * studentClass -> stores the student's class.
 * school -> stores name of the student's school.
 */

function validateStudentForm(studentName, studentEmail, school) {
  errorName.textContent = "";
  errorEmail.textContent = "";
  errorSchool.textContent = "";
  studentName = studentName.value.trim();
  studentEmail = studentEmail.value.trim();
  school = school.value.trim();

  let valid = true;
  if (studentName === "") {
    errorName.textContent = "Full name required";
    // errorName.style.color = "white";
    valid = false;
  } else if (!isNaN(studentName)) {
    errorName.textContent = "Name can not be a number";
    // errorName.style.color = "white";
    valid = false;
  }
  if (studentEmail === "") {
    errorEmail.textContent = "Email is required";
    // errorName.style.color = "white";
    valid = false;
  } else if (
    studentEmail.slice(studentEmail.indexOf("@") + 1) !== "gmail.com"
  ) {
    errorEmail.textContent = "Invalid email address";
    valid = false;
  }
  if (school === "") {
    errorSchool.textContent = "School is required";
    // errorName.style.color = "white";
    valid = false;
  } else if (!isNaN(school)) {
    errorSchool.textContent = "School can not be a  number";
    // errorName.style.color = "white";
    valid = false;
  }

  console.log("done!");
  return valid;
}

submitForm.addEventListener("submit", (e) => {
  /**
   * Event listener for the input form.
   * event.preventDefault() to prevent page
   * from refreshing defaultly.
   */
  e.preventDefault();
  const result = validateStudentForm(studentName, studentEmail, school);
  if (!result) {
    return;
  } else {
    // Change page that the user is viewing to the dashboard page.
    window.location.href = "Pages/dashboard.html";
    localStorage.setItem("studentName", studentName.value.trim());
    localStorage.setItem("studentClass", studentClass.value);
    localStorage.setItem("studentEmail", studentEmail.value.trim());
    localStorage.setItem("studentSchool", school.value.trim());
  }
});

var email = "tissockbryan@gmail.com";
console.log(email.slice(email.indexOf("@") + 1));
