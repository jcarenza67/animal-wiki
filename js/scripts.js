window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    let turtleFacts = document.getElementById("Turtle");
    turtleFacts.setAttribute("class", "hidden");
    let snakeFacts = document.getElementById("Snake");
    snakeFacts.setAttribute("class", "hidden");
    let insectFacts = document.getElementById("insect");
    insectFacts.setAttribute("class", "hidden");
    let chimaeraFacts = document.getElementById("realFalse");
    chimaeraFacts.setAttribute("class", "hidden");
    event.preventDefault();
  }
}