'use strict';

//selecting elements 

const player0EL=document.querySelector('.player--0');
const player1EL=document.querySelector('.player--1');
const score0EL=document.querySelector('#score--0');
const score1EL=document.querySelector('#score--1');
const current0EL=document.getElementById('current--0');
const current1EL=document.getElementById('current--1');


const diceEL=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');


let scores, currentScore, activePlayer,playing


//starting conditions
const init= function(){
    scores=[0, 0];
    currentScore=0;
    activePlayer=0;
    playing=true;

    score0EL.textContent=0;
    score1EL.textContent=0;
    current0EL.textContent=0;
    current1EL.textContent=0;

    diceEL.classList.add('hidden');

    player0EL.classList.remove(".player--winner");
    player1EL.classList.remove(".player--winner");

    player0EL.classList.add(".player--active");
    player1EL.classList.remove(".player--active");
};
init();