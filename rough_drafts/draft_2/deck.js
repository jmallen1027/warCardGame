/**
 * Need a function to check Player List is 0. 
 * 
 * Need to make sure the deck is shuffled. 
 * 
 * More CSS and HTML Animations for War & Player won Round 
 * 
 * Organize the functions and create more modules. 
 * 
 * Do some better planning. Good use of the console in the browser 
 * 
 * Login for Users, Database, Docker, and Serve on Internet. 
 * 
 * Try and use Array Methods.
 */

const deck = {
    
    spades: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
    hearts: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
    diamonds:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
    clubs: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
    allCards: []

};

for(var i = 2; i < 54; i ++){
    let t = 0;
    deck.allCards.push(i)
};

export let player1 = {
    allCards: []
};

export let player2 = {
    allCards: []
};
 

function shuffleArray(array) {

    /** This function will shuffle the deck suites (deck class elements) randomly using a for loop.  */
    
    for (var i = array.length - 1; i > 0; i--) {  //For Loop incrementing through the selected array. 
    
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
        
        // The temp var is set to the array element position in the loop. It is then set to the random element. 
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
};



 export function deal(){
    
        shuffleArray(deck.allCards)
        player1.allCards = deck.allCards.splice(26, 54)
        player2.allCards = deck.allCards.splice(0, 26)

        shuffleArray(player1.allCards)
        shuffleArray(player2.allCards)
        
};

function player1Draw(card) {
    
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
    
function player2Draw(card){
    
        /*//** See player1Draw Function for description.  */
        //const suite = Math.floor(Math.random() * 4);
        let cardSuite;

        if (card > 1 && card < 15){
            cardSuite = 'spades';
        
        }else if(card > 14 && card < 28){
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



function playerWar(array){
    let t = 0;
    if(array.length < 4){
        for(var i = 0; i < array.length; i++){
            t = t + array[i]
        }
    }else{
    for(var i = 0; i < 4; i++){
        t = t + array[i]
    }
    return t
}
};

function gameChecker(){
    if(player1.allCards.length === 0){
        console.log('Player 2 Wins the Game!')
    }else if(player2.allCards.length  === 0){
        console.log('Player 1 Wins the Game!!')
    };

};

export function draw(p1, p2){
    console.log(player1.allCards[0])
    console.log(player2.allCards[0])
    let playerOneCard = player1Draw(player1.allCards[0]);
    let playerTwoCard = player1Draw(player2.allCards[0]);
    console.log(playerOneCard)
    console.log(playerTwoCard)
    let playerOneSuite = player2Draw(player1.allCards[0]);
    let playerTwoSuite = player2Draw(player2.allCards[0]);
    console.log(playerOneSuite)
    console.log(playerTwoSuite)

    p1.style.backgroundImage=`url(./cards/${playerOneSuite}/${playerOneCard}.png)`
    p2.style.backgroundImage=`url(./cards/${playerTwoSuite}/${playerTwoCard}.png)`

    if(playerOneCard > playerTwoCard){
        player1.allCards.push(player2.allCards[0])
        player1.allCards.push(player1.allCards[0])
        player2.allCards.splice(0, 1);
        player1.allCards.splice(0, 1);
        console.log('player 1 wins round')
    }
    else if(playerTwoCard > playerOneCard){
        player2.allCards.push(player1.allCards[0])
        player2.allCards.push(player2.allCards[0])
        player1.allCards.splice(0, 1);
        player2.allCards.splice(0, 1);
        console.log('player 2 wins round ')
    }
    else if(playerOneCard === playerTwoCard){
        let player1War = playerWar(player1.allCards)
        let player2War = playerWar(player2.allCards)
        console.log(player1War)
        console.log(player2War)
        
        if(player1War > player2War){
            player1.allCards.push(player2.allCards[0]);
            player1.allCards.push(player2.allCards[1]);
            player1.allCards.push(player2.allCards[2]);
            player1.allCards.push(player2.allCards[3]);
            player1.allCards.push(player1.allCards[0]);
            player1.allCards.push(player1.allCards[1]);
            player1.allCards.push(player1.allCards[2]);
            player1.allCards.push(player1.allCards[3]);
            player1.allCards.splice(0, 4);
            player2.allCards.splice(0, 4);
            console.log('player 1 wins round ')
        }else{
            player2.allCards.push(player2.allCards[0]);
            player2.allCards.push(player2.allCards[1]);
            player2.allCards.push(player2.allCards[2]);
            player2.allCards.push(player2.allCards[3]);
            player2.allCards.push(player1.allCards[0]);
            player2.allCards.push(player1.allCards[1]);
            player2.allCards.push(player1.allCards[2]);
            player2.allCards.push(player1.allCards[3]);
            player2.allCards.splice(0, 4);
            player2.allCards.splice(0, 4);
            console.log('player 2 wins round')
        }
    }


};
    

