const SUBJECTS = [
  {
    icon: [],
    name: [],
    lesson: [],
    lessonNumber: [],
  },
];

//CREATE THE ARTICLE

let subjectCard = document.createElement("article");
article.id = "subject-card";

// FOR ICON
let subjectIcon = document.createElement("div");
icon.id = "subject-icon";
icon.textContent = SUBJECTS[i].icon[i];

// FOR NAME
let subjectName = document.createElement("h3");
subjectName.textContent = SUBJECTS[i].name[i];

// FOR LESSONS
let subjectLesson = document.createElement("p");
subjectName.id = "subject-desc";
subjectLesson.textContent = SUBJECTS[i].lesson[i];

// FOR AMOUNT LESSONS
let numberOfLesson = document.createElement("p");
numberOfLesson.id = "subject-lessons";
numberOfLesson.textContent = SUBJECTS[i].lessonNumber[i];

// FOR BUTTON CONTAINER
let btnContainer = document.createElement("div");
btnContainer.id = "card-btn";
//FOR BUTTON
let btn = document.createElement("button");
btn.id = "btn";
btn.textContent = "Continue";
