var cTitle = document.getElementsByClassName("challenge-title");

for (i = 0; i < cTitle.length; i++) {
  cTitle[i].addEventListener("click", function () {
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