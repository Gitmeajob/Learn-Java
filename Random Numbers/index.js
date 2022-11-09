let message = ""
let messageEl = document.getElementById("message-el")
let numberEL = document.getElementById("number-el")

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 20) + 1
    if (randomNumber < 9) {
        return randomNumber
    } if (randomNumber === 10) {
        return randomNumber
    } else {
        return randomNumber
    }
}

function startRandomizer() {
    isActive = true
    let firstNumber = getRandomCard()
    drinkNumber = [firstNumber]
    renderDrink()
}

function renderDrink() {
    numberEL.textContent = "Number: "
    for (let i = 0; i < drinkNumber.length; i ++) {
        numberEL.textContent += drinkNumber[i] + " "
    }

    if(rollDice() < 9) {
       message = "Did you guess correctly?????" 
    } else if (rollDice() === 10 ) {
       message = "Did you guess correctly???? "
    } else {
        message = "Did you guess correctly??? "     
    }
    messageEl.textContent = message
}

 function rollDice() {
     let randomNumber = Math.floor(Math.random() * 20) + 1
     return randomNumber
  }