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

let count = 0;

for (let count; count <= SUBJECTS.name.length; count++) {
  let subjectGrid = document.getElementById("subject-grid");

  //CREATE THE ARTICLE

  let subjectCard = document.createElement("article");
  article.id = "subject-card";

  // FOR ICON
  let subjectIcon = document.createElement("div");
  subjectIcon.id = "subject-icon";
  subjectIcon.textContent = SUBJECTS.icon[count];

  // FOR NAME
  let subjectName = document.createElement("h3");
  subjectName.textContent = SUBJECTS.name[count];

  // FOR LESSONS
  let subjectLesson = document.createElement("p");
  subjectName.id = "subject-desc";
  subjectLesson.textContent = SUBJECTS.lesson[count];

  // FOR AMOUNT LESSONS
  let numberOfLesson = document.createElement("p");
  numberOfLesson.id = "subject-lessons";
  numberOfLesson.textContent = SUBJECTS.lessonNumber[count];

  // FOR BUTTON CONTAINER
  let btnContainer = document.createElement("div");
  btnContainer.id = "card-btn";
  //FOR BUTTON
  let btn = document.createElement("button");
  btn.id = "btn";
  btn.textContent = "Continue";
  btnContainer.appendChild(btn);

  subjectCard.appendChild(subjectIcon);
  subjectCard.appendChild(subjectIcon);
  subjectCard.appendChild(subjectLesson);
  subjectCard.appendChild(btnContainer);

  subjectGrid.appendChild(subjectCard);
}
