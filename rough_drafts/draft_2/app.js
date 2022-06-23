const playerOne = document.querySelector('.player1')
const playerTwo = document.querySelector('.player2')
const warBtn = document.querySelector('.war')
const shuffleBtn = document.querySelector('.shuffle')
let style = getComputedStyle(playerOne)
//import { draw, deal, player1, player2 } from './deck.js'
import { draw, deal, player1, player2 } from './game.js'


shuffleBtn.addEventListener('click', function(){
    
    deal()
    
    shuffleBtn.style.visibility =`hidden`;
    warBtn.style.visibility =  'visible'

 })

warBtn.addEventListener('click', function(){
    
    draw(playerOne, playerTwo)
    
})

