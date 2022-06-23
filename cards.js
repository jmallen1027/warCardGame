export const deck = { allCards: [] };

for(var i = 2; i < 54; i ++){
    let t = 0;
    deck.allCards.push(i)
};

export let player1 = { allCards: [] };

export let player2 = { allCards: [] };
 

function shuffleArray(array) {

   for (var i = array.length - 1; i > 0; i--){
    
        var j = Math.floor(Math.random() * (i + 1));
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