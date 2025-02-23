var RandomNumber1 = Math.floor(Math.random()*6)+1;
var RandomNumber2 = Math.floor(Math.random()*6)+1;


var RandomDiceImage1 = "images/dice" + RandomNumber1 +".png";

var RandomDiceImage2 = "images/dice" + RandomNumber2 +".png";

var Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src" , RandomDiceImage1);

document.querySelectorAll("img")[1].setAttribute("src" , RandomDiceImage2);


if(RandomNumber1 > RandomNumber2){
    document.querySelector("h1").innerHTML = "🇮🇳Player 1 Wins!"
}

else if(RandomNumber1 < RandomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🇮🇳"
}

else{
     document.querySelector("h1").innerHTML = "Dr🤗aw  "
}

