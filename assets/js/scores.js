// Submit to Highscore
// On submit display textContent with initials and score in Highscore List

var submitScore = document.getElementById("submit");
var highscoreList = document.getElementById("highscores");
var userInitials = document.getElementById("initials");

// Submit Score Event Listener
submitScore.addEventListener("click", function (event) {
  window.location.assign("highscores.html");
  highscoreList.setAttribute("class", "scores");
  localStorage.setItem("userInitials", userInitials.value);
});