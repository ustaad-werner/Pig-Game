'use strict'
/*
FUNTIONALITY OF THE GAME -
* roll the dice and hold the highest score which will be equal to the number on dice.
* Automatically reset the score when the number comes as 1 on the dice.

* Winning part of the game : the first player to reach the score 100 will win the game.

* CTAs(buttons) are : `New game` `Roll dice` `Hold` alson the dice which when clicked will trigger an event of rolling a random number.

- Highest score to win = 100;
- user score will be reset `if` one

HOLD FUNCTIONALITY:----->

the current user can hold at a certain score 
if (score >= 100){
curretPlayer wins.
}else{
switch to the opponentPlayer 
}
*/ 

// put scores to zero
// hide the dice


                                                     

    function switchPlayer (){ // this was being repeated hence put it in a function which can be reused.
        document.getElementById(`current--${activePlayer}`).textContent = 0
        currentScore = 0; 
        activePlayer = activePlayer === 0 ? 1 : 0 ;
        player0El.classList.toggle('player--active');// toggles the class attribute
        player1El.classList.toggle('player--active');
    }


const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1')

// pointing/selecting the elements where the score is stored.
const score0El = document.getElementById('score--0'); 
const score1El = document.getElementById('score--1');

// the current score 
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1')

//dice 
const diceEl = document.querySelector('.dice');
// adding the dice roll
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


let scores;
let currentScore;
let activePlayer;
// state variable that holds the state of the game --->
let playing;


// starting conditions
function init() {

     scores = [ 0 , 0 ]// holds the score of both the players
     currentScore = 0;
     activePlayer = 0;
     playing = true;// state variable that holds the state of the game 

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active')

    score0El.textContent = 0;
    score1El.textContent = 0;
     
    current0El.textContent = 0;
    current1El.textContent = 0;

}
init();


//setting the initial values of the scored to be displayed as 0
score0El.textContent = 0;
score1El.textContent = 0;

// hiding the dice: the diceEl points to the dice element and the class slector hidden adds the attribute display none to the element by using classList method to add the attribute od display : none 
diceEl.classList.add('hidden')



// Rolling duice functionality
btnRoll.addEventListener('click' , function(){

    if (playing){
// generating a random dice roll.
const dice = Math.trunc(Math.random() * 6) + 1;
// Display the dice roll as a scroll.
diceEl.classList.remove('hidden');// removes the class for display : none.
diceEl.src = `dice-${dice}.png`; 
// check for rolled 1 : if score is 1(true) than reset the score & switch the player IF NOT(false) than add the score to the current score 

if (dice !== 1){ // add the dice number to the current score.
    currentScore = currentScore + dice; // CurrentScore with every click will be current plus the new Score which will have the value of dice added to it.
    document.getElementById(`current--${activePlayer}`).textContent = currentScore // dynamically change the current active player.
} else { // roll comes to 1 hence switch the player, Losing scenario for the player.
    // switch player function invoked
    switchPlayer();
        }
    }
}) 


btnHold.addEventListener('click', function(){
        //1- Add current score to activer players's score
        if (playing) {
        scores[activePlayer] += currentScore // scores[1] =scores[1] + currentScore

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

        //2- check if score is greater/equal to 100 if yes current player wins,game finished 
        if (scores[activePlayer] >= 20) {
            // finish the game.
            playing = false
            diceEl.classList.add('hidden') // hides the dice as the player wins the game/gets 20 points
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        } else {
        //  switch the player
         switchPlayer();
        }
    }
})


// reset game 

    btnNew.addEventListener('click', init)