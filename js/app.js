// cards array holds all cards
let card = document.getElementsByClassName('card');
let cards = [...card]
console.log(cards);




const time = document.querySelector(".time");
let timer;
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
const pause = document.querySelector(".pause");
const play = document.querySelector(".play");
const restart = document.querySelector(".restart");
const tableElements = [diamond, diamond, paper-plane-o, paper-plane-o, anchor, anchor, bolt, bolt, cube, cube, leaf, leaf, bicycle, bicycle, bomb, bomb];


//the play button
play.onclick = function startTimer() {
	timer = setInterval(function() {
		seconds.textContent++;
		if(seconds.textContent == 60) {
      seconds.textContent = 0;
      minutes.textContent++;
		}
	}, 1000);
return timer;
}

//the pause button
pause.onclick = function stopTimer () {
	clearInterval(timer);
}

//restart the game
restart.onclick = function restartGame() {
  minutes.textContent = 0;
  seconds.textContent = 0;
}

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

//flip cards
card.addEventListener("click", flipCards() {
       if(card.style.display === "none") {
  card.style.display = "block";
} else {
  card.style.display = "none";
}
 });

//remove stars one by one
function removeStars() {
  document.querySelector(".stars li:first-child()").classList.remove("star-fade");
	document.querySelector(".stars li:second-child()").classList.remove("star-fade");
}