var finalScore = document.getElementById("final-score");
var runningScore = 0;
finalScore.textContent = runningScore;
// if right answer clicked score plus 1
var userInitials = document.getElementById("initials");
// On submit display textContent with initials and score
var submitScore = document.getElementById("submit");
var feedback = document.getElementById("feedback");
submitScore.addEventListener("click", function (event) {
  endScreen.setAttribute("class", "hide");
  feedback.setAttribute("class", "feedback");
  feedback.textContent = `${userInitials.value} - ${runningScore}`;
});
