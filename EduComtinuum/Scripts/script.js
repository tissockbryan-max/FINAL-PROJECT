/**
 * Name: Tsoala Tissock Ranjoy Bryan
 * Project: EduContinuum Landing Page.
 * date: 09/23/2026
 */

// submitForm -> stores the form being gotten by id.
let submitForm = document.getElementById("submit-form");

if (submitForm) {
  /**
   * If statement that acts on the input form.
   * studentName -> stores the student's name.
   * studentEmail -> stores the student's email.
   * studentClass -> stores the student's class.
   * school -> stores name of the student's school.
   */
  let studentName = document.getElementById("student-name");
  let studentEmail = document.getElementById("student-email");
  let studentClass = document.getElementById("student-class");
  let school = document.getElementById("student-school");

  submitForm.addEventListener("submit", function (event) {
    /**
     * Event listener for the input form.
     * event.preventDefault() to prevent page
     * from refreshing defaultly.
     */

    event.preventDefault();
    localStorage.setItem("studentName", studentName.value.trim());
    localStorage.setItem("studentClass", studentClass.value);
    localStorage.setItem("studentEmail", studentEmail.value);
    localStorage.setItem("studentSchool", school.value);

    // Change page that the user is viewing to the dashboard page.
    window.location.href = "Pages/dashboard.html";
  });
}

/**
 * savedStudentName -> stores the saved studentName that was stored inside the localStorage.
 * firstLetter -> stores the 1st letter of the students name.
 * userName -> stores the user's name to be displayed in the name container.
 * nameOnWelcome -> stores the name thath will be displayed in the hero-section beside the image.
 */
const savedStudentName = localStorage.getItem("studentName") || "Student";

// for the name container.
const firstLetter = document.getElementById("first-letter");
firstLetter.textContent = savedStudentName.charAt(0).toUpperCase();
const userName = document.getElementById("name");
userName.textContent = savedStudentName.slice(0, savedStudentName.indexOf(" "));

const name0nWelcome = document.getElementById("welcome-name");
name0nWelcome.textContent = savedStudentName.slice(
  savedStudentName.indexOf(" "),
  savedStudentName.lastIndexOf(" "),
);

/**
 * for the navigation bar.
 * head -> stores the header of the page.
 * hamburgerMenu -> icon button for opening navbar manualy when on small sized screens.
 * cancel -> stores the cancel button which switches with thw hamburgerMenu when clicked
 * and also removes the navbar from display.
 */
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
