console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else { 
		alert("Sorry, try again.");
// It seems an 'if' statement does not necessitate an 'else' clause.
}}

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);