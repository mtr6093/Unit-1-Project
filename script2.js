
//Flashcard builder section
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
cards.push(new card('3', 'How many engines are on the B-1b?', '4'))
cards.push(new card('4', 'How many weapons bays does the B-1b have?', '3'))
cards.push(new card('5', 'What is the wingspan of the B-1b?', 'Forward: 137 feet;  Swept: 79 feet'))
cards.push(new card('6', 'How much did each B-1b cost?', '$317 million'))
cards.push(new card('7', 'How many B-1b aircraft were built?', '100'))
cards.push(new card('7', 'How many B-1b aircraft are still in service', '62'))


//Flashcard showing section
let display = []
    display.push((cards)[0])
    cards.splice(0,1)
    
let qDisplay = document.getElementById("question")
let aDisplay = document.getElementById("answer")

aDisplay.textContent = display[0].A
qDisplay.textContent = display[0].Q

 //handle next button
 let nButton = document.getElementById('next')
 nButton.addEventListener('click', function() {
     cards.push((display)[0])
     display.splice(0,1)
     display.push((cards)[0])
     cards.splice(0,1)
     aDisplay.textContent = display[0].A
     qDisplay.textContent = display[0].Q
     console.log(display)
    console.log(cards)
 })
let cpile = []


// Flipping the card
let dCard = document.querySelector('.card')

let fButton = document.querySelector('.flipper')
fButton.addEventListener( 'click', function() {
    console.log("flip click")
    dCard.classList.toggle('is-flipped')
  });




// Scoring Section
let cButton = document.getElementById('cor')
let iButton = document.getElementById('inc')

let cScore = 1
let cScoreDisplay = document.getElementById('crc').textContent += cScore
console.log("C", cScore)

let iScore = 3
let iScoreDisplay = document.getElementById('icrc').textContent += iScore

cButton.addEventListener('click', function(){
    console.log("c clicked")
   
    if (iScore == 0){
        cScore = cScore +1
        console.log(cScore)
        console.log(iScore)
        return(cScore)       
    }else {
        cScore = cScore +1
        iScore = iScore -1
        console.log(cScore)
        console.log(iScore)
        return(cScore)
    }    
})


iButton.addEventListener('click', function(){
    console.log("i clicked")
}
)