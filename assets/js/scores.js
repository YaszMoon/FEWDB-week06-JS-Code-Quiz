// Submit to Highscore
// On submit display textContent with initials and score in Highscore List

var submitScore = document.querySelector("#submit");
var userInitials = document.querySelector("#initials");
// var highscoreList = document.getElementById("highscores");

// var userInitials = document.getElementById("initials");
// highscoreList.setAttribute("class", "scores");
// window.location.assign("highscores.html");

// Submit Score Event Listener
submitScore.addEventListener("click", function () {
  localStorage.setItem("userInitials", userInitials.value);
  localStorage.setItem("newScore", score);
//   
});
