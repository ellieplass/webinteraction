var element = document.querySelector(".fridgedoor");
element.addEventListener("click", toggleDoor);

function toggleDoor() {
  element.classList.toggle("doorOpen");
}

setTimeout(function(){
     element.classList.toggle("doorOpen");
},1000)