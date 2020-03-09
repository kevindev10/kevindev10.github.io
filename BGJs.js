
var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer', _.without(array,5) )


var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var body =document.getElementById("body");
var h3 =document.querySelector("h3");

function changeGradient(){
	body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";

} 

h3.textContent =(body.style.background +";") ;

color1.addEventListener("input",changeGradient)

color2.addEventListener("input",changeGradient) 


