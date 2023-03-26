let grades = document.getElementById("showGrade");
function initialInp() {
  document.getElementById("grade-inp").value = 0;
  // grades.innerText = "Input your number and press calculate to find your grade.";
}
function showGrade() {
  let marks = parseInt(document.getElementById("grade-inp").value),
    subject = document.getElementById("sub-name").value;
  if (marks >= 80 && marks <= 100) {
    // grades.innerText = 'A+';
    subGrade.innerHTML = subject + ":   " + "A+";
  } else if (marks >= 70 && marks < 80) {
    // grades.innerText = 'A';
    subGrade.innerHTML = subject + ":   " + "A";
  } else if (marks >= 60 && marks < 70) {
    // grades.innerText = 'A-';
    subGrade.innerHTML = subject + ":   " + "A-";
  } else if (marks >= 50 && marks < 60) {
    // grades.innerText = 'B';
    subGrade.innerHTML = subject + ":   " + "B";
  } else if (marks >= 40 && marks < 50) {
    // grades.innerText = 'C';
    subGrade.innerHTML = subject + ":   " + "C";
  } else if (marks >= 33 && marks < 40) {
    // grades.innerText = 'D';
    subGrade.innerHTML = subject + ":   " + "D";
  } else if (marks >= 0 && marks < 33) {
    // grades.innerText = 'F';
    subGrade.innerHTML = subject + ":   " + "F";
  } else {
    subGrade.innerHTML = subject + ":   " + "Mark is not valid";
  }
}
initialInp();
