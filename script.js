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

console.log(cards[0].A)

let cDisplay = document.getElementById("d1")

console.log(cDisplay)

cDisplay.textContent = cards[0].Q

let fButton = document.getElementById('flip')

fButton.addEventListener('click', flip)

let cButton = document.getElementById('cor')
let iButton = document.getElementById('inc')
// function to flip card
let cScore= 1
let cScoreDisplay = document.getElementById('crc').textContent += cScore

let iScore = 3
let iScoreDisplay = document.getElementById('icrc').textContent += iScore

cButton.addEventListener('click', correct )
function correct(){
    console.log("c clicked")
    if (iScore == 0){
        cScore ++
        console.log(cScore)
        console.log(iScore)
        return(cScore)
        
    }else {
        cScore = cScore +1
        iScore = iScore -1
        console.log(cScore)
        console.log(iScore)
    }
}




