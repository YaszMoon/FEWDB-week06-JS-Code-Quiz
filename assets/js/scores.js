// Add New Score
// Variables for new score
var highscoreList = document.querySelector("#highscores");
var wrapperEl = document.querySelector(".wrapper");
wrapperEl.setAttribute("class", "scores");

// Function for adding new score
function addNewScore() {
  var newHighscore = document.createElement("li");
  var userInitials = localStorage.getItem("userInitials");
  var newScore = localStorage.getItem("newScore");
  newHighscore.textContent = `${userInitials} - ${newScore}`;
  highscoreList.append(newHighscore);
}

addNewScore();

// Clear highscores
var clearScores = document.querySelector("#clear");
// Clear Scores Event Listener
clearScores.addEventListener("click", function () {
  highscoreList.innerHTML = "";
});
