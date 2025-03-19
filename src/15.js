
<script>
const students = ["Alice", "Bob", "Charlie"];
const subjects = ["Math", "Science", "English"];

function getGrades() {
  let grades = [];
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    for (let j = 0; j < subjects.length; j++) {
      const subject = subjects[j];
      const grade = getGrade(student, subject);
      grades.push({ student, subject, grade });
    }
  }
  return grades;
}

function getGrade(student, subject) {
  // Generate a random grade between 0 and 100
  const grade = Math.floor(Math.random() * 100);
  console.log(`${student}'s ${subject} grade is ${grade}.`);
  return grade;
}
</script>