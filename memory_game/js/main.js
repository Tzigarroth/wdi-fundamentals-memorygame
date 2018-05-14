console.log("Up and running!");

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
	cardsInPlay = [];
}

var flipCard = function() {
	card = cards[this.getAttribute('data-id')];
	cardsInPlay.push(card.rank);
	console.log("User flipped " + card.rank);
	console.log(card.cardImage);
	console.log(card.suit);
	this.setAttribute('src', card.cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.setAttribute('class', 'card');
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

var reset = function() {
	var allCards = document.querySelectorAll('.card');
	for (var x = 0; x < allCards.length; x++) {
		allCards[x].setAttribute('src', 'images/back.png');
	}
}

document.getElementById('reset').addEventListener('click', reset);
createBoard();
//flipCard(0);
//flipCard(2);