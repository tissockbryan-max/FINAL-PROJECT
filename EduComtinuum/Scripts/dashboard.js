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

const subjectGrid = document.getElementById("subject-grid");

for (let count = 0; count < SUBJECTS.name.length; count++) {
  //CREATE THE ARTICLE
  let subjectCard = document.createElement("article");
  subjectCard.id = "subject-card";

  // FOR ICON
  let subjectIcon = document.createElement("div");
  subjectIcon.id = "subject-icon";
  subjectIcon.textContent = SUBJECTS.icon[count];

  // FOR NAME
  let subjectName = document.createElement("h3");
  subjectName.textContent = SUBJECTS.name[count];

  // FOR LESSONS
  let subjectLesson = document.createElement("p");
  subjectLesson.id = "subject-desc";
  subjectLesson.textContent = SUBJECTS.lesson[count];

  // FOR AMOUNT LESSONS
  let numberOfLesson = document.createElement("p");
  numberOfLesson.id = "subject-lessons";
  numberOfLesson.textContent = SUBJECTS.lessonNumber[count] + " Lessons";

  // FOR BUTTON CONTAINER
  let btnContainer = document.createElement("div");
  btnContainer.id = "card-btn";
  //FOR BUTTON
  let btn = document.createElement("button");
  btn.id = "btn";
  btn.textContent = "Continue";
  btnContainer.appendChild(btn);
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "404.html";
  });

  subjectCard.appendChild(subjectIcon);
  subjectCard.appendChild(subjectIcon);
  subjectCard.appendChild(subjectLesson);
  subjectCard.appendChild(numberOfLesson);
  subjectCard.appendChild(btnContainer);

  subjectGrid.appendChild(subjectCard);
}

// let continueBtn = (event) => {
//   event.preventDefault();
//   window.location.href = "404.html";
// };
