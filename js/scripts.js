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

    const animal = document.querySelector("input#enterAnimalInput").value;

    if (animal === "turtle") {
      turtleFacts.removeAttribute("class");
    } else if (animal === "snake") {
      snakeFacts.removeAttribute("class");
    } else if (animal === "insect") {
      insectFacts.removeAttribute("class");
    } else {
      chimaeraFacts.removeAttribute("class");
    }

    event.preventDefault();
  };
};