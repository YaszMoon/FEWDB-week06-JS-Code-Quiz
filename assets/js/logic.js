// Timer
// Variables for timer
var timerEl = document.getElementById("time");
var endScreen = document.getElementById("end-screen");
var timeLeft = 90;
// Timer countdown function
function countdown() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = `${timeLeft}`;
    if (timeLeft === 0 || questionNumber == questions.length) {
      clearInterval(timeInterval);
      questionDiv.setAttribute("class", "hide");
      endScreen.setAttribute("class", "show");
      feedback.setAttribute("class", "hide");
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
  // Display first question
  displayQuestion();
  // Start countdown
  countdown();
});

// Quiz
// Variables for Quiz
var questionTitle = document.querySelector("#question-title");
var questionOptions = document.querySelector("#choices");
var optionsList = document.createElement("ol");
var questionNumber = 0;

// Function to display questions
function displayQuestion() {
  if (questionNumber < questions.length) {
    var currentQ = questions[questionNumber];
    questionTitle.textContent = currentQ.question;
    // Assign each option to a button element and append to list
    for (let key in currentQ.options) {
      var optionsItem = document.createElement("button");
      optionsItem.setAttribute("class", "options-button");
      optionsItem.setAttribute("data-answer", key === currentQ.answer);
      optionsItem.textContent = currentQ.options[key];
      optionsList.append(optionsItem);
    }
    // Adds list to Options div so it displays
    questionOptions.append(optionsList);
  }
}

// Feedback and Score Tracking
var feedback = document.getElementById("feedback");
var finalScore = document.getElementById("final-score");
var score = 0;
// var correctAnswer = new Audio("../sfx/correct.wav")
// var wrongAnswer = new Audio("../sfx/incorrect.wav")

// Function for Feedback Display
// Input should be value of data-answer
function showFeedback(isAnswerCorrect) {
  // Change class for feedback display
  feedback.setAttribute("class", "feedback");
  if (isAnswerCorrect) {
    score += 1;
    // correctAnswer.play();
    feedback.textContent = "Correct!";
  } else {
    feedback.textContent = "Wrong!";
    // wrongAnswer.play();
    timeLeft -= 5;
  }
  // Update score on end screen
  finalScore.textContent = score;
}

// Quiz Answers Event Listener
optionsList.addEventListener("click", function (event) {
  if (event.target.className == "options-button") {
    // Clear options
    optionsList.innerHTML = "";
    // Change question
    questionNumber += 1;
    // Feedback
    showFeedback(event.target.dataset.answer === "true");
    // Display question
    displayQuestion();
  }
});

// Save Initials and Score to local storage
var submitScore = document.querySelector("#submit");
var userInitials = document.querySelector("#initials");

// Submit Score Event Listener
submitScore.addEventListener("click", function () {
  localStorage.setItem("userInitials", userInitials.value);
  localStorage.setItem("newScore", score);
  window.location.assign("highscores.html");
});
