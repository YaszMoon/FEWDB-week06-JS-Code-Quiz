var runningScore = 0;
var feedback = document.getElementById("feedback");

// Feedback and score tracking
// Function for displaying feedback
function feedbackCountdown() {
  var timeLeft = 3;
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = `${timeLeft}`;
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      feedback.setAttribute("class", "hide");
    }
  }, 1000);
}

// Feeback Event Listener
// When option selected
// feedback.setAttribute("class", "feedback");
// feedbackCountdown();
// // if correct
// runningScore += 1;
// feedback.textContent = "Correct!";
// // if wrong
// feedback.textContent = "Wrong!";

// Submit to Highscore
// On submit display textContent with initials and score in Highscore List
var finalScore = document.getElementById("final-score");
finalScore.textContent = runningScore;
var submitScore = document.getElementById("submit");
var highscoreList = document.getElementById("highscores");
var userInitials = document.getElementById("initials");

// Submit Score Event Listener
submitScore.addEventListener("click", function (event) {
  var newScore = document.createElement("li");
  newScore.textContent = `${userInitials.value} - ${runningScore}`;
  highscoreList.append(newScore);
  endScreen.setAttribute("class", "hide");
  highscoreList.setAttribute("class", "scores");
});
