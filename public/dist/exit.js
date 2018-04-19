var completedRaw = localStorage.getItem("bfctfCompleted");
var completed = [];
var score = 0;

completed = JSON.parse(completedRaw) || [];
for (i = 0; i < completed.length; i++) {
  score += 10
}

var scoreboard = document.getElementById("scoreboard")
if (scoreboard !== null){
  document.getElementById("scoreboard").innerHTML = score.toString()
  localStorage.clear()
}
