import { player1, player2 } from './cards.js'

function playerCardValue(card) {
    
    if(card > 14 && card < 28){
        card = card - 13
    }
    else if(card > 27 && card < 41){
        card = card - 26;
    }
    else if(card > 40 && card < 54){
        card = card - 39
    } 
    return card
};
    
function playerSuite(card){

    let cardSuite;

    if (card > 1 && card < 15){
        
        cardSuite = 'spades';
        
        }
    else if(card > 14 && card < 28){
        
        cardSuite = 'clubs';
        }
    else if(card > 27 && card < 41){
        
        cardSuite = 'diamonds';
        }
    else if(card > 40 && card < 54){
        
        cardSuite = 'hearts';
        }
    
    return cardSuite
};


function war(array){
    let t = 0;
    if(array.length < 4){
        for(var i = 0; i < array.length; i++){
            t = t + array[i]
        }
    }else{
        for(var i = 0; i < 4; i++){
        t = t + array[i]
    }
        return t;
    };
};

function result(winnings, loser, counter){

    if(counter !== 0){
        console.log(`Losing : ${loser[0]}`)
        winnings.push(loser[0])
        winnings.push(winnings[0])
        loser.splice(0, 1)
        winnings.splice(0, 1);
        result(winnings, loser, counter-1)
        
        
    }
    
    if(loser.length === 0){
        console.log('You lose')
    }
    
    
}

export function draw(p1, p2){
    console.log(player1.allCards)
    console.log(player2.allCards)
    
    let playerOneCard = playerCardValue(player1.allCards[0]); //Sets the value of Player One's Card
    let playerTwoCard = playerCardValue(player2.allCards[0]); //Sets the value of Player Two's Card
    console.log(player1.allCards[0])
    console.log(player2.allCards[0])
    console.log(playerOneCard)
    console.log(playerTwoCard)
    let playerOneSuite = playerSuite(player1.allCards[0]); //Sets Suite of Player 1's Card for Image. 
    let playerTwoSuite = playerSuite(player2.allCards[0]); //Sets Suite of Player 2's Card for Image. 
    
    p1.style.backgroundImage=`url(./cards/${playerOneSuite}/${playerOneCard}.png)`; //Sets the Image based on the Document Element of the Card. 
    p2.style.backgroundImage=`url(./cards/${playerTwoSuite}/${playerTwoCard}.png)`; //Sets the Image based on the Document Element of the Card. 

    if(playerOneCard > playerTwoCard){
        console.log('Player 1 Wins')
        result(player1.allCards, player2.allCards, 1)
        
    }else if(playerOneCard < playerTwoCard) {
        console.log('Player 2 wins')
        result(player2.allCards, player1.allCards, 1);
    }
    else if(playerOneCard === playerTwoCard){
        
        let playerOneWar = war(player1.allCards);
        let playerTwoWar = war(player2.allCards);
        console.log(playerOneWar)
        console.log(playerTwoWar)
        
        if(playerOneWar > playerTwoWar){
            result(player1.allCards, player2.allCards, 3)
            console.log('Player 1 Wins')
        }else{
            result(player2.allCards, player1.allCards, 3);
            console.log('Player 2 wins')
        }

    }
    
    
    


};
    

