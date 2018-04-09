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

