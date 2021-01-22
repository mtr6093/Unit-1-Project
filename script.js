
let accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
    let accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
        
  });
});

//Flashcard object builder
class card {
    constructor (number, Q, A) {
        this.number = number
        this.Q = Q
        this.A = A
    }
}

//array of flashcards
let cards = [] 

// flash cards and content
cards.push(new card('1','How many Mk82 500lb bombs can the B-1b carry internally?', '84'))
cards.push(new card('2', 'How many crew memebers fly in the B-1b?', '4'))
cards.push(new card('3', 'How many engines are on the B-1b?', '4'))
cards.push(new card('4', 'How many weapons bays does the B-1b have?', '3'))
cards.push(new card('5', 'What is the wingspan of the B-1b?', 'Forward: 137 feet;  Swept: 79 feet'))
cards.push(new card('6', 'How much did each B-1b cost?', '$317 million'))
cards.push(new card('7', 'How many B-1b aircraft were built?', '100'))
cards.push(new card('8', 'How many B-1b aircraft are still in service?', '62'))


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

 nButton.addEventListener('click', next)

 function next() {
     if(cards.length==0){
        document.querySelector('#next').disabled = true
     } else {
     cards.push((display)[0])
     display.splice(0,1)
     display.push((cards)[0])
     cards.splice(0,1)
     aDisplay.textContent = display[0].A
     qDisplay.textContent = display[0].Q
    }
 }
 
//  Pile of correct cards removed from deck
let cpile = []


// Flipping the card
let dCard = document.querySelector('.card')

let fButton = document.querySelector('.flipper')
fButton.addEventListener( 'click', cardF)

// function for card flipping
function cardF () {
    dCard.classList.toggle('is-flipped')
}

// Scoring Section
let cButton = document.getElementById('cor')
let iButton = document.getElementById('inc')
 let cScore = 0
let cScoreDisplay = document.getElementById('crcv')
let iScore = 0
let iScoreDisplay = document.getElementById('icrcv')

cButton.addEventListener('click', correct)

// function for marking correct answer
function correct() {
    if (iScore == 0){
        cScore = cScore +1
        cScoreDisplay.innerText = cScore
    }else{
        cScore = cScore +1
        iScore = iScore -1
        cScoreDisplay.innerText = cScore
        iScoreDisplay.innerText = iScore
    }  
    if (cards.length||0) {
        cpile.push(display)[0]
        display.splice(0,1)
        display.push((cards)[0])
        cards.splice(0,1)
        aDisplay.textContent = display[0].A
        qDisplay.textContent = display[0].Q
    }else {
        display.splice(0,1)
        aDisplay.textContent = "COMPLETE!"
        qDisplay.textContent = "COMPLETE!"
        document.querySelector('#cor').disabled = true
    }
}

iButton.addEventListener('click', incorrect)

// function for marking incorrect answer
function incorrect() { 
    if (cards.length==0) {
        document.querySelector('#inc').disabled = true
    } else {
    iScore = iScore +1
    iScoreDisplay.innerText = iScore
    cards.push((display)[0])
    display.splice(0,1)
    display.push((cards)[0])
    cards.splice(0,1)
    aDisplay.textContent = display[0].A
    qDisplay.textContent = display[0].Q
    }
}

// Keyboard shortcut keys
addEventListener("keydown", function(e){
    let keyName=e.code
    if (keyName == 'Space' && cards.length||0){ 
        console.log(keyName)
        next()
    }else if (keyName == "KeyC" && cards.length||0){
        console.log(keyName)
        correct()
    }else if (keyName== "KeyI" && cards.length||0) {
        console.log(keyName)
        incorrect()
    }else if (keyName== "KeyF") {
        console.log(keyName)
        cardF()
    }
})