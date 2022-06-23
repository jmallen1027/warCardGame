const playerOne = document.querySelector('.player1')
const playerTwo = document.querySelector('.player2')
const warBtn = document.querySelector('.war')
const shuffleBtn = document.querySelector('.shuffle')
const player1Score = document.querySelector('.score-p1')
const player2Score = document.querySelector('.score-p2')
let style = getComputedStyle(playerOne)

import { draw } from './game.js'
import {deal, player1, player2} from './cards.js'

let p1Deck = player1.allCards.length
let p2Deck = player2.allCards.length


shuffleBtn.addEventListener('click', function(){
    
    deal()
    
    shuffleBtn.style.visibility =`hidden`;
    warBtn.style.visibility =  'visible'

 })

warBtn.addEventListener('click', function(){
    let p1Deck = player1.allCards.length
    let p2Deck = player2.allCards.length
    
    draw(playerOne, playerTwo)
    
    player1Score.textContent = p1Deck;
    player2Score.textContent = p2Deck;
    
})

