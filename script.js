
const textPlace = document.querySelector(".text-change");
const textAr = "Welcome to my site!".split("");

function writeText(i) {
  if(textAr[i] == " "){
    textPlace.innerHTML += "&nbsp;";
  }
  else{
    textPlace.innerHTML += textAr[i];
  }
  if(i == textAr.length-1){ clearInterval(xd);}
}

let i = 0;

var xd = setInterval(function(){writeText(i); i++;}, 200);
