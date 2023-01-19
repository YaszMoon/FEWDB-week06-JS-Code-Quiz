// Timer
// Begins when person clicks start quiz
// counts down from ??

var timerEl = document.getElementById("time");
var endScreen = document.getElementById("end-screen");

function countdown() {
  var timeLeft = 90;
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = `${timeLeft}`;
    if (timeLeft === 0 || questionNumber == Object.keys(questions).length) {
      clearInterval(timeInterval);
      questionDiv.setAttribute("class", "hide");
      endScreen.setAttribute("class", "show");
      timerEl.textContent = "--";
    }
  }, 1000);
}

// Start Quiz
// Variables for Start Quiz Event Listener
var startScreen = document.querySelector("#start-screen");
var questionDiv = document.querySelector("#questions");
var startQuiz = document.querySelector("#start");

// Event Listener for Start Quiz button
// Hides start screen and displays questions
startQuiz.addEventListener("click", function (event) {
  startScreen.setAttribute("class", "hide");
  questionDiv.setAttribute("class", "show");

  displayQuestion();

  countdown();
});

// Quiz
// Variables for Quiz
var questionTitle = document.querySelector("#question-title");
var questionOptions = document.querySelector("#choices");
var optionsList = document.createElement("ol");
var questionArr = [
  questions.q1,
  questions.q2,
  questions.q3,
  questions.q4,
  questions.q5,
];
var questionNumber = 0;

// Function to display questions
function displayQuestion() {
  questionTitle.textContent = questionArr[questionNumber].question;

  // Assign each option to a button element and append to list
  for (let key in questionArr[questionNumber].options) {
    var optionsItem = document.createElement("button");
    optionsItem.setAttribute("class", "options-button");
    optionsItem.textContent = questionArr[questionNumber].options[key];
    optionsList.append(optionsItem);
  }

  // Adds list to Options div so it displays
  questionOptions.append(optionsList);
}

// Quiz Answers Event Listener
optionsList.addEventListener("click", function (event) {
  // Clear options
  optionsList.innerHTML = "";
  // Change question
  questionNumber += 1;
  // Display question
  displayQuestion();
});
