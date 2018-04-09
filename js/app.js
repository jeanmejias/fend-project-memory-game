// cards array holds all cards
let card = document.getElementsByClassName('card');
let cards = [...card]
console.log(cards);


// deck of all cards in game
const deck = document.getElementById('card-deck');

// declaring move variable
let move = 0;
let counter = document.querySelector('.moves');

// declare variables for star icons
const stars = document.querySelectorAll('.fa-star');

// declare variable of matchedCards
let matchedCards = document.getElementsByClassName('match');

// stars list
let starsList = document.querySelectorAll('.stars li');

// close icon in modal
let closeIcon = document.querySelector('.close');

// declare modal
let modal = document.getElementById('popup1');

// array for opened cards
const openedCards = [];

// description shuffle cards
//shuffle array

function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// description shuffle cards when the page is refreshed / loads

document.body.onload =startGame();

// function to start a new play game

function startGame() {
  cards = shuffle(cards);
  for (let i = 0; i < cards.length; i++) {

    deck.innerHTML = '';
    [].forEach.call(cards, function(item) {
      deck.appendChild(item);
    });
    cards[i].classList.remove('show', 'open', 'match', 'disabled');
  }
//  reset moves
moves = 0;
counter.innerHTML = moves;

//  reset rating
for (let i= 0; i <stars.length; i++) {
  stars[i].style.color = "#FFD700";
  stars[i].style.visibility = 'visible';
}

// reset timer
second = 0;
minute = 0;
hour = 0 ;
const timer = document.querySelector('.timer');
timer.innerHTML = "0 mins 0 secs";
clearInterval(interval);
}

// Toggles Open and Show class to display cards

const displayCard = function() {
  this.classList.toggle('open');
  this.classList.toggle('show');
  this.classList.toggle('disabled');
};

// description add opened cards to OpenedCards list and deck if cards are match or not 
function cardOpen () {
  openedCards.push(this);
  const len = openedCards.length;
  if (len === 2) {
    movecounter();
    if(openedCards[0].type === openedCards[1].type) {
      matched ();
    } else {
      unmatched();
    }
  }
};