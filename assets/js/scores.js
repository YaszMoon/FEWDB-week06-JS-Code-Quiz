// Submit to Highscore
// On submit display textContent with initials and score in Highscore List

var submitScore = document.getElementById("submit");
var highscoreList = document.getElementById("highscores");
// var userInitials = document.getElementById("initials");
// var newScore = document.createElement("li");
// newScore.textContent = `${userInitials.value} - ${runningScore}`;

// Submit Score Event Listener
submitScore.addEventListener("click", function (event) {
  window.location.assign("highscores.html");
  endScreen.setAttribute("class", "hide");
  highscoreList.setAttribute("class", "scores");
});