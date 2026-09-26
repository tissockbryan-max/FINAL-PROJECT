const TEACHERS = {
  icon: [
    "fas fa-user",
    "fas fa-user",
    "fas fa-user",
    "fas fa-user",
    "fas fa-user",
    "fas fa-user",
    "fas fa-user",
    "fas fa-user",
    "fas fa-user",
    "fas fa-user",
    "fas fa-user",
    "fas fa-user",
  ],
  name: [
    "Mr. John Ndeh",
    "Mr. John Ndeh",
    "Mrs. Mary Fomba",
    "Mr. Peter Tanyi",
    "Mrs. Grace Nkeng",
    "Mr. Michael Ako",
    "Mrs. Linda Mbah",
    "Mr. David Bih",
    "Mrs. Sarah Wirba",
    "Mr. Paul Ngwa",
    "Mrs. Anna Fru",
    "Mr. Daniel Ashu",
  ],
  subject: [
    "Mathematics",
    "Chemistry",
    "Mathematics",
    "Physics",
    "English",
    "Biology",
    "Mathematics",
    "Computer Science",
    "Chemistry",
    "Physics",
    "English",
    "Biology",
  ],
  description: [
    "Specialist in algebra, calculus and exam preparation for Form 4 and 5 students.",
    "Experienced in organic chemistry and laboratory method for secondary students.",
    "Specialist in algebra, calculus and exam preparation for Form 4 and 5 students.",
    "Expert in mechanics and electricity with a focus on GCE A-Level preparation.",
    "Focuses on comprehension, essay writing and grammar for all secondary levels.",
    "Specialist in genetics, ecology and human biology for Form 3 to Upper Sixth.",
    "Helps students build strong foundations in arithmetic, fractions and algebra.",
    "Covers programming basics, algorithms and computer hardware for beginners.",
    "Makes atomic structure and chemical bonding simple and easy to understand.",
    "Strong in waves and motion, with a practical approach to Physics problem-solving.",
    "Passionate about vocabulary, reading and helping students write with confidence.",
    "Clear explanations of cells and human biology — ideal for Form 1 to Form 3.",
  ],
};

const teacherGrid = document.getElementById("teachers-grid");

for (let count = 0; count < TEACHERS.name.length; count++) {
  let teacherCard = document.createElement("article");
  teacherCard.id = "teacher-card";

  let teacherIcon = document.createElement("div");
  teacherIcon.id = "teacher-icon";

  let iconElement = document.createElement("i");
  iconElement.className = TEACHERS.icon[count];
  teacherIcon.appendChild(iconElement);

  let teacherName = document.createElement("h2");
  teacherName.id = "teacher-name";
  teacherName.textContent = TEACHERS.name[count];

  let teacherSubjectTag = document.createElement("p");
  teacherSubjectTag.id = "teacher-subject-tag";
  teacherSubjectTag.textContent = TEACHERS.subject[count];

  let teacherDesc = document.createElement("p");
  teacherDesc.id = "teacher-desc";
  teacherDesc.textContent = TEACHERS.description[count];

  let btn = document.createElement("a");
  btn.href = "dashboard.html";
  btn.id = "btn";
  btn.textContent = "View Teacher";

  btn.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "dashboard.html";
  });

  teacherCard.appendChild(teacherIcon);
  teacherCard.appendChild(teacherName);
  teacherCard.appendChild(teacherSubjectTag);
  teacherCard.appendChild(teacherDesc);
  teacherCard.appendChild(btn);

  teacherGrid.appendChild(teacherCard);
}
