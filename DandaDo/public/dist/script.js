//moveToDiv("done1", "doing", "DoingAddButton");
//manipolazione dati api
function fetchRandom(pid) {
let currentP = document.getElementById(pid);
fetch('https://dummyjson.com/todos/random')
.then(res => res.json())
.then(res => {
  divProva.innerHTML = res.todo;
}
);
}

//spostamento dei todo nei container
function moveToDiv(divToMoveId, destinationId, buttonID) {
  let divToMove = document.getElementById(divToMoveId);
  let button = document.getElementById(buttonID);
  divToMove.remove();
  button.remove();
  document.getElementById(destinationId).appendChild(divToMove);
  document.getElementById(destinationId).appendChild(button);
}


//animazione burger-menu
window.addEventListener("load", function () {
  document
    .querySelector("#showMenu")
    .addEventListener("click", function (event) {
      document.querySelector("#mobileNav").classList.remove("hidden");
    });

  document
    .querySelector("#hideMenu")
    .addEventListener("click", function (event) {
      document.querySelector("#mobileNav").classList.add("hidden");
    });

  document.querySelectorAll("[toggleElement]").forEach((toggle) => {
    toggle.addEventListener("click", function (event) {
      const answerElement = toggle.querySelector("[answer]");
      const caretElement = toggle.querySelector("img");
      console.log(answerElement);
      if (answerElement.classList.contains("hidden")) {
        answerElement.classList.remove("hidden");
        caretElement.classList.add("rotate-90");
      } else {
        answerElement.classList.add("hidden");
        caretElement.classList.remove("rotate-90");
      }
    });
  });
});
