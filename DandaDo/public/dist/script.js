//manipolazione dati api
assignToDo();

const counterToDo = 4;
const counterDoing = 4;

function fetchRandom(pid) {
let currentP = document.getElementById(pid);
fetch('https://dummyjson.com/todos/random')
.then(res => res.json())
.then(res => {
  currentP.innerHTML = res.todo;
}
);
}

function removeDiv(id) {
  let divToRemove = document.getElementById(id);
  divToRemove.remove();
}

function assignToDo(){
  for(i = 1; i <= 3; i++){
    fetchRandom("todoText" + i);
    fetchRandom("doingText" + i);
    fetchRandom("doneText" + i);
  }
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

function showDiv1(){  
    $("#aggiuntaNewActivity").fadeToggle("slow");
}

  function showDiv2(){    
      $("#aggiuntaOngoingActivity").fadeToggle("slow");
  }

function addToDo(){
   $("#ToDoAddButton").before(`<div class="flex bg-black rounded-2xl text-white py-3 text-lg justify-between ma" id="done${counterToDo}">
   <p id="doneText${counterToDo}">${document.getElementById("inputModulo1").value}</p>
   <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>         
   
     <div x-data="{ dropdownOpen: false }" class="relative">
       <button @click="dropdownOpen = !dropdownOpen" class="relative z-10 block bg-gray-800 rounded p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
         <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
         </svg>
       </button>
   
       <div x-show="dropdownOpen" @click="dropdownOpen = false" class="fixed inset-0 h-full w-full z-10"></div>
   
       <div x-show="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-20 text-black">
         <a onclick="moveToDiv('done${counterToDo}', 'done', 'DoneAddButton')" class="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200"><span class="text-gray-600">Mark as: Done</span></a>
         <a onclick="moveToDiv('done${counterToDo}', 'doing', 'DoingAddButton')" class="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200"><span class="text-gray-600">Mark as: Doing</span></a>
         <a onclick="removeDiv('done${counterToDo}')" class="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200"><span class="text-gray-600">Remove</span></a>
       </div>
     </div> 
  </div>
  `);  
  }
  function addDoing(){

    $("#DoingAddButton").before(`<div class="flex bg-black rounded-2xl text-white py-3 text-lg justify-between ma" id="done${counterDoing}">
    <p id="doneText${counterDoing}">${document.getElementById("inputModulo2").value}</p>
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>         
    
      <div x-data="{ dropdownOpen: false }" class="relative">
        <button @click="dropdownOpen = !dropdownOpen" class="relative z-10 block bg-gray-800 rounded p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
          <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </button>
    
        <div x-show="dropdownOpen" @click="dropdownOpen = false" class="fixed inset-0 h-full w-full z-10"></div>
    
        <div x-show="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-20 text-black">
          <a onclick="moveToDiv('done${counterDoing}', 'done', 'DoneAddButton')" class="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200"><span class="text-gray-600">Mark as: Done</span></a>
          <a onclick="moveToDiv('done${counterDoing}', 'doing', 'DoingAddButton')" class="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200"><span class="text-gray-600">Mark as: Doing</span></a>
          <a onclick="removeDiv('done${counterDoing}')" class="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200"><span class="text-gray-600">Remove</span></a>
        </div>
      </div> 
   </div>
   `);
   }

   $(document).ready(function () {
    $('#panel').DataTable();
  });
  
  $(document).ready(function(){
  $("#TitTable").click(function(){
  $("#panel").fadeToggle("slow");
  
  });
  });
  
  
  $(document).ready(function(){
  $("#TitTable").click(function(){
  $("#panel_filter").fadeToggle("slow");
  
  });
  });
  
  $(document).ready(function(){
  $("#panel_paginate").remove();
  });
  
  $(document).ready(function(){
  $("#panel_info").remove();
  });
  
  $(document).ready(function(){
  $("#panel_length").remove();
  });
  
  var time= 0;
  var tempo = 0;
  const count = document.getElementById("timer");
  
  function setTimerSetup(){
    time = document.getElementById("inputTimer").value;
    tempo = time * 60;
  }

  function startTimer(){
    setInterval(aggiornatimer,1000)
    $("#timerContainer").fadeToggle("slow");
  }

  function aggiornatimer(){
    
    
    if(startTimer<60){
        let minuti = Math.floor(tempo/60)
        let secondi = tempo % 60
        secondi = secondi < 10 ? '0' + secondi : secondi
        count.innerHTML = `${minuti}:${secondi}`
    }
    else{
        let ore = Math.floor((tempo/60)/60)
        let minuti = Math.floor(tempo/60)%60
        let secondi = tempo % 60
        secondi = secondi < 10 ? '0' + secondi : secondi
        minuti = minuti < 10 ? '0' + minuti : minuti
        count.innerHTML = `${ore}:${minuti}:${secondi}`
    }
     
    tempo--
}

function showTimerSetup(){
  $("#aggiuntaTimer").fadeToggle("slow");
}



