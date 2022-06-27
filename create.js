const deck = document.querySelector('.no-mands-land');
const shufBtn = document.querySelector('#shuf');





function createDecks(num){

        let newCard = document.createElement("section");
        newCard.className ='card player-deck'
        newCard.id = `card${num}`
        deck.appendChild(newCard)

    
}




shufBtn.addEventListener('click', function(){
    shufBtn.style.visibility = 'hidden'
    for(let i =0; i< 53; i++){
        createDecks(i)
    }
    let card = document.querySelectorAll('.player-deck')
    var interval = 500; // how much time should the delay between two iterations be (in milliseconds)?
    
    card.forEach(function (el, index) {
        setTimeout(function () {
            if(index % 2 !== 0){
                el.style.transform = 'translate(450px, 750px)';
            }else{
                el.style.transform = 'translate(-450px, 750px)';
            }
            
          
                }, index * interval);
    });

})
    



