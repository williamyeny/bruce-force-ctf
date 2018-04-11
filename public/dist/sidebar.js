var challenges = document.getElementsByClassName("challenge-title");

for (i = 0; i < challenges.length; i++) {
  challenges[i].addEventListener("click", function () {
    this.nextSibling.classList.toggle("show");
    this.classList.toggle("selected");
  });
}