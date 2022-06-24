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


shuffleBtn.addEventListener('click', function(){
    
    deal()
    
    shuffleBtn.style.visibility =`hidden`;
    warBtn.style.visibility =  'visible'

    console.log(player1.allCards)
    console.log(player2.allCards)
    let test = []
    for(var x = 0; x < 4; x++){
        test[x] = player1.allCards[x]
    }
    console.log(test)
 })

warBtn.addEventListener('click', function(){

    
    
    let playerOneCard = playerCardValue(player1.allCards[0]); //Sets the value of Player One's Card
    let playerTwoCard = playerCardValue(player2.allCards[0]); //Sets the value of Player Two's Card
    let playerOneSuite = playerSuite(player1.allCards[0]); //Sets Suite of Player 1's Card for Image. 
    let playerTwoSuite = playerSuite(player2.allCards[0]);

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


    
})



