// Button Press
var arr = document.querySelectorAll(".drum");
var len = arr.length;
for(var i =0; i<len; i++)
{
  arr[i].addEventListener("click", function() {
    var character = this.innerHTML;
    makeSound(character);
    animation(character);
  });
}

// KeyBoard Button Press
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  animation(event.key);
});

// Responding to Press
function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom1.mp3");
      tom1.play();
      break;
    case 'a':
      var tom2 = new Audio("sounds/tom2.mp3");
      tom2.play();
      break;
    case 's':
      var tom3 = new Audio("sounds/tom3.mp3");
      tom3.play();
      break;
    case 'd':
      var tom4 = new Audio("sounds/tom4.mp3");
      tom4.play();
      break;
    case 'j':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case 'k':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case 'l':
      var kick = new Audio("sounds/kick.mp3");
      kick.play();
      break;
    default: console.log(key);
  }
}

// Animation
function animation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },200);
}
