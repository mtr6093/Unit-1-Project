// console.log("working")

class card {
    constructor (number, Q, A) {
        this.number = number
        this.Q = Q
        this.A = A
    }
}


let cards = [] //array of flashcards

// flash cards and content
cards.push(new card('1','How many Mk82 500lb boms can the B-1b carry internally?', '84'))
cards.push(new card('2', 'How many crew memebers fly in the B-1b?', '4'))

let displayedCard = document.querySelector('.card')

var tCard = document.querySelector('.card');
tCard.addEventListener( 'click', function() {
  displayedCard.classList.toggle('is-flipped');
});
console.log(cards[0].A)

let qDisplay = document.getElementById("question")
let aDisplay = document.getElementById("answer")
// console.log(cDisplay)

aDisplay.textContent = cards[0].A
qDisplay.textContent = cards[0].Q

let fButton = document.getElementById('flip')


fButton.addEventListener('click', flip) 

function flip() {
    displayedCard.classList.toggle('is-flipped')
}

// let cButton = document.getElementById('cor')
// let iButton = document.getElementById('inc')

// let cScore = 1
// let cScoreDisplay = document.getElementById('crc').textContent += cScore
// console.log("C", cScore)

// let iScore = 3
// let iScoreDisplay = document.getElementById('icrc').textContent += iScore

// cButton.addEventListener('click', correct )
// function correct(){
//     console.log("c clicked")
   
//     if (iScore == 0){
//         cScore = cScore +1
//         console.log(cScore)
//         console.log(iScore)
//         return(cScore)       
//     }else {
//         cScore = cScore +1
//         iScore = iScore -1
//         console.log(cScore)
//         console.log(iScore)
//         return(cScore)
//     }
    
// }




