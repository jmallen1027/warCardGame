/** This Program contains the functions for the card game War */


const deck = {

    /** This class represents the suites that are contained in the deck. 
     *         11 = Jack, 12 = Queen, 13 = King, 14 = Ace. 
     *        **** Example ****
     *        deck.spades[2] = 3
     *
     */

    spades: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
    hearts: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
    diamonds: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
    clubs: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]


};

export function shuffleArray(array) {

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


 //** Shuffling the suites within the deck. */
 shuffleArray(deck.spades);
 shuffleArray(deck.diamonds);
 shuffleArray(deck.clubs);
 shuffleArray(deck.hearts);

 

// Classes containing the decks of each player. 
let player1 = {
    spades: [],
    hearts: [],
    diamonds: [],
    clubs: []
 } ;

 let player2 = {
    spades: [],
    hearts: [],
    diamonds: [],
    clubs: []
 };
 
 // For loop using array function to push the random cards into the player decks. The loop increments based on the length of the array. 
 
 //export function deal(){for(i = 0; i < deck.spades.length; i++){
for(let i = 0; i < deck.spades.length; i++){
    if(i % 2 === 0){
        player1.diamonds.push(deck.diamonds[i]);
        player1.spades.push(deck.spades[i]);
        player1.hearts.push(deck.hearts[i]);
        player1.clubs.push(deck.clubs[i]);
    }else {
        player2.diamonds.push(deck.diamonds[i]);
        player2.spades.push(deck.spades[i]);
        player2.hearts.push(deck.hearts[i]);
        player2.clubs.push(deck.clubs[i]);
        }
    }





export function player1Draw() {
    
    /**
    * 
    * player1Draw and player2Draw functions draw a random card from the players Deck. 
    */ 
    
    const suite = Math.floor(Math.random() * 4); // Random number for the suite. 
    let cardSuite; //Var for storing the suite 

    
    if (suite === 0){
        cardSuite = 'spades';
    }else if(suite === 1){
        cardSuite = 'clubs';
    }
    else if(suite === 2){
        cardSuite = 'diamonds';
    }
    else if(suite === 3){
        cardSuite = 'hearts';
    }

    return cardSuite
}

export function player2Draw(){

    //** See player1Draw Function for description.  */
    const suite = Math.floor(Math.random() * 4);
    let cardSuite;

    if (suite === 0){
        cardSuite = 'spades';
    }else if(suite === 1){
        cardSuite = 'clubs';
    }
    else if(suite === 2){
        cardSuite = 'diamonds';
    }
    else if(suite === 3){
        cardSuite = 'hearts';
    }

    return cardSuite
}

let p1War = player1Draw();
let p2War = player2Draw();




function war(){

    let p1War = player1Draw();
    let p2War = player2Draw();
    const p1RandomCard = Math.floor(Math.random() * player1[p1War].length);
    const p2RandomCard = Math.floor(Math.random() * player2[p2War].length);
    const playerOneCard = Number(player1[p1War][p1RandomCard])
    const playerTwoCard = Number(player2[p2War][p2RandomCard])

    if(playerOneCard > playerTwoCard){
        player1[p2War].push(player2[p2War][p2RandomCard])
        player2[p2War].splice(p2RandomCard, 1);
        console.log('player 1 wins')
    
    }else{
        player2[p1War].push(player1[p1War][p1RandomCard])
        player1[p1War].splice(p1RandomCard, 1);
        console.log('player 2 wins')






    }
    
}


console.log(player1)
console.log(player2)
war()
war()
war()
war()
war()
war()
war()
war()
console.log(player1)
console.log(player2)

