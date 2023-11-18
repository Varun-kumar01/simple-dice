var randomNumber1 = Math.floor((Math.random() * 6)+1);
var randomNumber2 = Math.floor((Math.random() * 6)+1);
var picker1="images/dice"+randomNumber1+".png";
var picker2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src", picker1);
document.querySelectorAll("img")[1].setAttribute("src", picker2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 WON";
}
if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}
if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 WON";
}
