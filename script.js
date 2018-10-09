
const textPlace = document.querySelector(".text-change");
const textAr = "Welcome to my site!".split("");
const NAV = document.querySelector(".navigator");
let whenNavChange = document.querySelector(".about-me").offsetTop;

function changeNav() {
  if(window.scrollY >= whenNavChange - NAV.offsetHeight){
    NAV.classList.add("change-color");
  }
  else {
    NAV.classList.remove("change-color");
  }
}

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
window.addEventListener('scroll', changeNav);
