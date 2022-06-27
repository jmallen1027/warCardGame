<<<<<<< HEAD
import { result, war, warCards, playerCardValue, playerSuite } from './game.js';
import {deal, player1, player2} from './cards.js';

const shuffleBtn = document.querySelector('#shuffle');
const warBtn = document.querySelector('#p2war');
const player1Deck = document.querySelector('#p1-deck')
const player2Deck = document.querySelector('#p2-deck')
const player1Score = document.querySelector('#score-p1');
const player2Score = document.querySelector('#score-p2');
const player1Styles = document.querySelectorAll('.player1-hand');
const player2Styles = document.querySelectorAll('.player2-hand');
=======
const shuffleBtn = document.querySelector('#shuffle')
const warBtn = document.querySelector('#war')
const player1Score = document.querySelector('.score-p1')
const player2Score = document.querySelector('.score-p2')
const player1Styles = document.querySelectorAll('.player1-hand');
const player2Styles = document.querySelectorAll('.player2-hand');

import { result, war, warCards, playerCardValue, playerSuite } from './game.js'
import {deal, player1, player2} from './cards.js'

let p1Deck = player1.allCards.length
let p2Deck = player2.allCards.length
>>>>>>> 22ac17dd0df3f79a44d8c2404fcf2f421159d5fe

const visibleDocs = [warBtn, player1Deck, player2Deck];

shuffleBtn.addEventListener('click', function(){
    
    deal()
    shuffleBtn.style.visibility = 'hidden'
    visibleDocs.forEach(element => {
        element.style.visibility = 'visible';
    });

    console.log(player1.allCards);
    console.log(player2.allCards);

 })

warBtn.addEventListener('click', function(){

    for(let i = 0; i < 3; i++){
        let q = i + 1
        player1Styles[q].style.visibility =`hidden`;
        player2Styles[q].style.visibility =`hidden`;
    }
    
    document.querySelector('#player1-score').innerHTML = player1.allCards.length
    document.querySelector('#player2-score').innerHTML = player2.allCards.length
    
    let playerOneCard = playerCardValue(player1.allCards[0]); //Sets the value of Player One's Card
    let playerTwoCard = playerCardValue(player2.allCards[0]); //Sets the value of Player Two's Card
    let playerOneSuite = playerSuite(player1.allCards[0]); //Sets Suite of Player 1's Card for Image. 
    let playerTwoSuite = playerSuite(player2.allCards[0]);
    
    player1Styles[0].style.visibility = 'visible'
    player1Styles[0].style.backgroundImage=`url(./cards/${playerOneSuite}/${playerOneCard}.png)`; //Sets the Image based on the Document Element of the Card. 
    player2Styles[0].style.backgroundImage=`url(./cards/${playerTwoSuite}/${playerTwoCard}.png)`;

    if(playerOneCard > playerTwoCard){
        console.log('Player 1 Wins')
        result(player1.allCards, player2.allCards, 1)
        
    }else if(playerOneCard < playerTwoCard) {
        console.log('Player 2 wins')
        result(player2.allCards, player1.allCards, 1);
    
    }else if(playerOneCard === playerTwoCard){
        warCards(player1Styles, player1.allCards)
        warCards(player2Styles, player2.allCards)

        let playerOneWar = war(player1.allCards)
        let playerTwoWar = war(player2.allCards)

        if(playerOneWar > playerTwoWar){
            result(player1.allCards, player2.allCards, 3)
            console.log('Player 1 Wins')
        }else{
            result(player2.allCards, player1.allCards, 3);
            console.log('Player 2 wins')
        }


    }

<<<<<<< HEAD
=======

>>>>>>> 22ac17dd0df3f79a44d8c2404fcf2f421159d5fe
    
})



