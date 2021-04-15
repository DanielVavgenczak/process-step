const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentAction = 1;

next.addEventListener("click", () => {
  currentAction++;

  // enquanto não for maior o click executa
  if (currentAction > circles.length) {
    currentAction = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentAction--;

  if (currentAction < circles.length) {
     currentAction-1;
  }
  console.log(typeof(currentAction))
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentAction) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  })

  const actives = document.querySelectorAll('.active');   
  let width = (actives.length -1) / (circles.length - 1) * 100 + '%';
  
  progress.style.width = width;

  if(currentAction === 1){
      prev.disabled = true;
  }else if( currentAction === circles.length){
      next.disabled = true;
  }else{
      prev.disabled = false;
      next.disabled = false;
  }

}
