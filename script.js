//Random Numbers
var randomNumber1 = Math.floor(Math.random() *6) + 1;//Random No. From 1-6
var randomNumber2 = Math.floor(Math.random() *6) + 1;//Random No. From 1-6
//The Image (link) name
var randomDiceImage1 = "dice"+randomNumber1+".png";//dice1.png (1-6)
var randomDiceImage2 = "dice"+randomNumber2+".png";//dice2.png (1-6)
//The full image link
var randomImageSource1 = "images/"+randomDiceImage1;//images/dice1.png (1-6)
var randomImageSource2 = "images/"+randomDiceImage2;//images/dice2.png (1-6)

//Player 1's dice
var player1 = document.querySelectorAll("img")[0];
player1.setAttribute("src", randomImageSource1);
//Player 2's dice
var player2 = document.querySelectorAll("img")[1];
player2.setAttribute("src", randomImageSource2);


//Targets the Header messsage
var header = document.querySelector("h1");
if (randomNumber1 === randomNumber2){
  header.innerHTML = "DRAW!!";
}
else if (randomNumber1 > randomNumber2){
  header.innerHTML = "Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  header.innerHTML = "Player 2 Wins!";
}
