var challenges = document.getElementsByClassName("challenge");

for (i = 0; i < challenges.length; i++) {
  challenges[i].addEventListener("click", function () {
    this.getElementsByClassName("content")[0].classList.toggle("show");
  });
}