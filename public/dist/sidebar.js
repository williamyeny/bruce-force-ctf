var cTitles = document.getElementsByClassName("challenge-title");

for (i = 0; i < cTitles.length; i++) {
  cTitles[i].addEventListener("click", function () {
    this.nextSibling.classList.toggle("show");
    this.classList.toggle("selected");
  });
}

document.getElementsByClassName("showhide")[0].addEventListener("click", function() {
  document.getElementsByClassName("sidebar")[0].classList.toggle("sidebar-hide");

  var challenges = document.getElementsByClassName("challenge");
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
//map

var cAnswers = document.getElementsByClassName("answer-button");
for (i = 0; i < cAnswers.length; i++) {
  cAnswers[i].addEventListener("click", function() {
    if (this.previousSibling.value == this.parentElement.parentElement.getAttribute("data-answer")) {
      cScore += 10; //todo: make it so that you can only enter an answer once //keep track of id in another data structure?
      alert(cScore);
    }
  })
}
