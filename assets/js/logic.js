// Timer
// Begins when person clicks start quiz
// counts down from ??

// Start Quiz
// Display first question
// Loop through questions by going to next when an answer is selected
// If ... then i+1

// Variables for Start Quiz Event Listener
var startScreen = document.querySelector("#start-screen");
var questionDiv = document.querySelector("#questions");
var startQuiz = document.querySelector("#start");

// Event Listener for Start Quiz button
// Changes view to first question in bank
startQuiz.addEventListener("click", function (event) {
  startScreen.setAttribute("class", "hide");
  questionDiv.setAttribute("class", "show");

  displayQuestion();
});

// Quiz
// Variables for Quiz
var questionTitle = document.querySelector("#question-title");
var questionOptions = document.querySelector("#choices");
var optionsList = document.createElement("ol");
var questionNumber = 0;

// Function to display questions
function displayQuestion() {
  questionTitle.textContent = questions.questions[questionNumber];

  // For loop to populate options to list
  for (var i = 0; i < questions.options[questionNumber].length; i++) {
    var optionsItem = document.createElement("button");
    optionsItem.setAttribute("class", "options-button");
    optionsItem.textContent = questions.options[questionNumber][i];
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