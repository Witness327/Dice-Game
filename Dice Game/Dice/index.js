

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "DRAW!";
}



// var randomNumber1 = Math.random();
// randomNumber1 = randomNumber1 * 6;
//
// randomNumber1 = Math.floor(randomNumber1) + 1;

// var randomNumber2 = Math.random();
// randomNumber2 = randomNumber2 * 6;
// randomNumber2 = Math.floor(randomNumber2) + 1;




// function getRandom(){
//      var RandomNumber1 = Math.floor(Math.random() * 6) + 1;
//      var RandomNumber2 = Math.floor(Math.random() * 6) + 1;
//
//      document.getElementById('result').innerHTML = '<img src="dice' + RandomNumber1 + '.png">';
//      document.getElementById('result').innerHTML += '<img src="dice' + RandomNumber2 + '.png">';
// }

//document.getElementById('result').innerHTML = '<img src="dice' + RandomNumber1 + '.png">';

// function getRandom() {
// //One Liner
// var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
//
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// }
