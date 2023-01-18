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
var optionsList = document.createElement("ol");

// Event Listener for Start Quiz button
// Changes view to first question in bank
startQuiz.addEventListener("click", function(event) {
    startScreen.setAttribute("class", "hide");
    questionDiv.setAttribute("class", "show");
    questionTitle.textContent = questions.questions[0];

    // For loop to populate options to list
    for (var i=0; i < questions.options[0].length; i++) {
        var optionsItem = document.createElement("li");
        optionsItem.textContent = questions.options[0][i];
        optionsList.append(optionsItem)
    }

    // Adds list to Options div so it displays
    questionOptions.append(optionsList)
})

