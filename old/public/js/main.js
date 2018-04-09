// var cat = localStorage.getItem("myCat");
// localStorage.setItem('myCat', 'Tom');

var completedRaw = localStorage.getItem("bfctfCompleted");
var completed = [];

if (completedRaw != undefined) { // not first visit!
  completed = JSON.parse(completedRaw);
}

function addItem() {
  completed.push(1);
  localStorage.setItem("bfctfCompleted", JSON.stringify(completed));
}