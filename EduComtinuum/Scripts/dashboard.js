/**
 * Name: Tsoala Tissock Ranjoy Bryan
 * Project: EduContinuum Dashboard.
 * date: 09/23/2026
 */

const SUBJECTS = {
  /**
   * SUBJECTS_OBJECT -> Stores each subject can will be displayed in the site.
   * icon -> list of icons used for each subject card.
   * name -> list of sibjects on the page.
   * lesson -> Details and subtopics about the subjects provided
   */

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

// subject grid -> container where each subject card will be displayed.
const subjectGrid = document.getElementById("subject-grid");

for (let count = 0; count < SUBJECTS.name.length; count++) {
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

// let continueBtn = (event) => {
//   event.preventDefault();
//   window.location.href = "404.html";
// };
