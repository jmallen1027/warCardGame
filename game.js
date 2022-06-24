import { player1, player2 } from './cards.js'

export function playerCardValue(card) {
    
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
    
export function playerSuite(card){

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

export function war(array){
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

export function result(winnings, loser, counter){

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

export function warCards(player, array){
    let playerCard = playerCardValue(array[0]); //Sets the value of Player One's Card
    let playerSuiteValue = playerSuite(array[0]); //Sets Suite of Player 1's Card for Image. 
    
    if(player.length < 4){
        player.array.forEach(element => {
            element.style.backgroundImage = `url(./cards/${playerSuiteValue}/${playerCard}.png)`; 
            element.style.visibility = 'visible';
            
        });
    }else{
        for(var i = 1; i < 4; i++){
            playerSuiteValue = playerSuite(array[i])
            playerCard = playerCardValue(array[i])
            player[i].style.backgroundImage=`url(./cards/${playerSuiteValue}/${playerCard}.png)`;
            player[i].style.visibility = 'visible'
            
    }
        };
   
};


    

