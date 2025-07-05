if (!sessionStorage.getItem("hasLoadedBefore")) {
  // First time: Show "Refresh Me" and default dice
  document.querySelector("h1").innerHTML = "Refresh Me";

  // Set the flag to mark the first load
  sessionStorage.setItem("hasLoadedBefore", "true");
}
else{
var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;
var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;
randomImage2="./images/dice"+randomNumber2+".png";
var randomImage="./images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomImage);
document.querySelector(".img2").setAttribute("src",randomImage2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Vansh lost.";
}

else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Vansh  wins,strangely...";
}

else{
    document.querySelector("h1").innerHTML="Draw";
}
document.querySelector(".button").addEventListener("click",lol);
function lol(){
    var m=new Audio("ABC.mp3");
    m.play();
}
}