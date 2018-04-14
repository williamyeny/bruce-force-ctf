var completedRaw = localStorage.getItem("bfctfCompleted");
var completed = [];
var challenges = document.getElementsByClassName("challenge");
var countDownDate = localStorage.getItem("timeRemain");

if (localStorage.getItem("timeRemain") === null) {
  var countDownDate = new Date().getTime() + 1000 * 60 * 60;
}

if (completedRaw != undefined) { // not first visit!
  completed = JSON.parse(completedRaw);
  console.log(completed);
  for (i = 0; i < completed.length; i++) {
    challenges[completed[i]].firstChild.innerHTML += " ✓";
  }
}

var x = setInterval(function() {
  localStorage.setItem("timeRemain", countDownDate);
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

  document.getElementById("time").innerHTML =  minutes + ": " + seconds;


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    alert("game over");
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);


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

var cAnswers = document.getElementsByClassName("answer-button");
for (i = 0; i < cAnswers.length; i++) {
  cAnswers[i].HTMLindex = i;
  cAnswers[i].addEventListener("click", function() {
    if (completed.indexOf(this.HTMLindex) > -1) {
      alert("You already completed this, dummy!");
    } else {

      if (this.previousSibling.value == this.parentElement.parentElement.getAttribute("data-answer")) {
        completed.push(this.HTMLindex);
        console.log(completed);
        localStorage.setItem("bfctfCompleted", JSON.stringify(completed));
        alert("Correct!");
        challenges[this.HTMLindex].firstChild.innerHTML += " ✓";
      } else {
        alert("That wasn't correct :(");
        console.log("u wrong lol");
      }
    }
  })
}
