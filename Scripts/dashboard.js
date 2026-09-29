/**
 * Name: Tsoala Tissock Ranjoy Bryan
 * Project: EduContinuum Dashboard.
 * date: 09/23/2026
 */

/**
 * SUBJECTS_OBJECT -> Stores each subject can will be displayed in the site.
 * icon -> list of icons used for each subject card.
 * name -> list of sibjects on the page.
 * lesson -> Details and subtopics about the subjects provided
 */
const SUBJECTS = {
  icon: ["📚", "🧪", "🌿", "📖", "💻", "⚛", "🧠"],
  name: [
    "Mathematics",
    "Chemistry",
    "Biology",
    "English",
    "Computer Science",
    "Physics",
    "Further Mathematics",
  ],
  lesson: [
    "Numbers, algebra, geometry and problem solving.",
    "Atoms, reactions, acids, bases and organic chemistry.",
    "Cells, genetics, ecology and the human body",
    "Grammar, comprehension, essay writing and vocabulary.",
    "Algorithms, programming, hardware and data structures.",
    "Forces, Energy, Electricity Mechanics.",
    "Complex Numbers, Further Mechanics, Angular Momentumand Complex Problem Solving.",
  ],
  lessonNumber: [10, 12, 9, 5, 13, 10, 15],
};

/**
 * For loop for iterating through the subjects
 * to be displayed.
 *
 * count -> the iterator used in the loop.
 * subjectCard -> stores the created article that makes up the card.
 * subjectIcon -> stores the created div that further stores the icon.
 * subjectName -> stores the created h3 used for the subject name.
 * subjectLesson -> stores the paragraph containing the subject subtopics.
 * numberOfLesson -> stores the paragraph containing the number of lessons for each subject.
 * btnContainer -> stores the div created to contain a button.
 * btn -> stores the created button which is inside the btnContainer.
 */
function subjectItems() {
  // subject grid -> container where each subject card will be displayed.
  const subjectGrid = document.getElementById("subject-grid");

  for (let count = 0; count < SUBJECTS.name.length; count++) {
    // article
    let subjectCard = document.createElement("article");
    subjectCard.id = "subject-card";

    // icon
    let subjectIcon = document.createElement("div");
    subjectIcon.id = "subject-icon";
    subjectIcon.textContent = SUBJECTS.icon[count];

    // name
    let subjectName = document.createElement("h3");
    subjectName.textContent = SUBJECTS.name[count];

    // lessons
    let subjectLesson = document.createElement("p");
    subjectLesson.id = "subject-desc";
    subjectLesson.textContent = SUBJECTS.lesson[count];

    // amount lesson
    let numberOfLesson = document.createElement("p");
    numberOfLesson.id = "subject-lessons";
    numberOfLesson.textContent = SUBJECTS.lessonNumber[count] + " Lessons";

    // button container
    let btnContainer = document.createElement("div");
    btnContainer.id = "card-btn";

    // button
    let btn = document.createElement("button");
    btn.id = "btn";
    btn.textContent = "Continue";
    btnContainer.appendChild(btn);
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "404.html";
    });

    // appending each element into the card
    subjectCard.appendChild(subjectIcon);
    subjectCard.appendChild(subjectIcon);
    subjectCard.appendChild(subjectLesson);
    subjectCard.appendChild(numberOfLesson);
    subjectCard.appendChild(btnContainer);

    // append subject card into the subjectGrid
    subjectGrid.appendChild(subjectCard);
  }
}

/**
 * for the navigation bar.
 * head -> stores the header of the page.
 * hamburgerMenu -> icon button for opening navbar manualy when on small sized screens.
 * cancel -> stores the cancel button which switches with thw hamburgerMenu when clicked
 * and also removes the navbar from display.
 */
function navigationBar() {
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
}

/**
 * savedStudentName -> stores the saved studentName that was stored inside the localStorage.
 * firstLetter -> stores the 1st letter of the students name.
 * userName -> stores the user's name to be displayed in the name container.
 * nameOnWelcome -> stores the name thath will be displayed in the hero-section beside the image.
 */
function headerAndHero() {
  const savedStudentName = localStorage.getItem("studentName") || "Student";

  // for the name container.
  const firstLetter = document.getElementById("first-letter");
  firstLetter.textContent = savedStudentName.charAt(0).toUpperCase();
  const userName = document.getElementById("name");
  userName.textContent = savedStudentName.slice(
    0,
    savedStudentName.indexOf(" "),
  );

  const name0nWelcome = document.getElementById("welcome-name");
  name0nWelcome.textContent = savedStudentName.slice(
    savedStudentName.indexOf(" "),
  );
}

subjectItems();
navigationBar();
headerAndHero();
