// Timer
// Begins when person clicks start quiz
// counts down from ??

// Start Quiz
// Display first question
// Loop through questions by going to next when an answer is selected
// If ... then i+1

var startScreen = document.querySelector("#start-screen")
var questionDiv = document.querySelector("#questions")
var startQuiz = document.querySelector("#start")
var questionTitle = document.querySelector("#question-title")
var questionOptions = document.querySelector("#choices")

startQuiz.addEventListener("click", function(event) {
    startScreen.setAttribute("class", "hide");
    questionDiv.setAttribute("class", "show");
    questionTitle.textContent = questions.questions[0];
    questionOptions.textContent = questions.options[0]
})

