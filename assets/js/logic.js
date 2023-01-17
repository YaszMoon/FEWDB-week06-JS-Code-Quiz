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
var optionsItem = document.createElement("li");

startQuiz.addEventListener("click", function(event) {
    startScreen.setAttribute("class", "hide");
    questionDiv.setAttribute("class", "show");
    questionTitle.textContent = questions.questions[0];

    

    for (var i=0; i < questions.options[0].length; i++) {
        optionsItem.textContent = questions.options[0][i];
        optionsList.append(optionsItem);
        console.log(optionsItem);
    }
    
    questionOptions.append(optionsList)
})

