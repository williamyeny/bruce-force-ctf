var completedRaw = localStorage.getItem("bfctfCompleted");
var completed = [];
var challenges = document.getElementsByClassName("challenge");

if (completedRaw != undefined) { // not first visit!
  completed = JSON.parse(completedRaw);
  console.log(completed);
  for (i = 0; i < completed.length; i++) {
    challenges[completed[i]].firstChild.innerHTML += " ✓";
  }
}

var cTitles = document.getElementsByClassName("challenge-title");

for (i = 0; i < cTitles.length; i++) {
  cTitles[i].addEventListener("click", function () {
    this.nextSibling.classList.toggle("show");
    this.classList.toggle("selected");
  });
}

document.getElementsByClassName("showhide")[0].addEventListener("click", function() {
  document.getElementsByClassName("sidebar")[0].classList.toggle("sidebar-hide");

  // hide challenges
  for (i = 0; i < challenges.length; i++) {
    challenges[i].classList.toggle("hide");
  }

  // toggle text
  if (document.getElementsByClassName("showhide")[0].innerHTML == "hide") {
    document.getElementsByClassName("showhide")[0].innerHTML = "show";
  } else {
    document.getElementsByClassName("showhide")[0].innerHTML = "hide";
  }
})

var cScore = 0;
var cAnswers = document.getElementsByClassName("answer-button");
for (i = 0; i < cAnswers.length; i++) {
  cAnswers[i].HTMLindex = i;
  cAnswers[i].addEventListener("click", function() {
    if (completed.indexOf(this.HTMLindex) > -1) {
      alert("You've already answered this one!");
    } else {
      if (this.previousSibling.value == this.parentElement.parentElement.getAttribute("data-answer")) {
        completed.push(this.HTMLindex);
        console.log(completed);
        localStorage.setItem("bfctfCompleted", JSON.stringify(completed));
        cScore += 10;
        document.getElementById("scoreboard").innerHTML=cScore.toString();
        challenges[this.HTMLindex].firstChild.innerHTML += " ✓";
      } else {
        alert("That wasn't correct :(");
        console.log("u wrong lol");
      }
    }
  })
}
