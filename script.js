var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


function getRandomColor() {
  var signs = '0123456789ABCDEF';
  var randomColor='#';
   for (var i = 0; i < 6; i++) {
    randomColor += signs[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}

function generate(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ getRandomColor()
	+ ", " 
	+ getRandomColor()
	+ ")";
	css.textContent = body.style.background + ";";
}


setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", generate);

