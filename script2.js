class card {
    constructor (number, Q, A) {
        this.number = number
        this.Q = Q
        this.A = A
    }
}


let cards = [] //array of flashcards

// flash cards and content
cards.push(new card('1','How many Mk82 500lb bombs can the B-1b carry internally?', '84'))
cards.push(new card('2', 'How many crew memebers fly in the B-1b?', '4'))

let qDisplay = document.getElementById("question")
let aDisplay = document.getElementById("answer")

aDisplay.textContent = cards[0].A
qDisplay.textContent = cards[0].Q

let dCard = document.querySelector('.card')
// dCard.addEventListener( 'click', function() {
//   dCard.classList.toggle('is-flipped')
// });

let fButton = document.querySelector('.flipper')
fButton.addEventListener( 'click', function() {
    console.log("flip click")
    dCard.classList.toggle('is-flipped')
  });