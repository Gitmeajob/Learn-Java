// let firstName = "Jonah ";
// let lastName = "Kroll";

// let fullName = firstName + lastName;

// console.log(fullName);

// let herName  = "Linda"
// let greeting = "Hi there"

// console.log(greeting, herName, "!")

// Arrays

//  let featuredPost = [
//     "check out my netflix clone",
//      "Heres code for my project", 
//      "I've relaunched my portfolio"
//     ]

/* let cards = [7,4]

cards.push(6)

let message = [
    "Hey how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately"
]

let newMessage = "Same here!"

message.push(newMessage);

for (let i = 0; i < 5; i += 1) {

}


// Counting in Java
/* for (let i = 10; i < 101; i += 10) {
    console.log(i)
 }

 for (let i = 20; i < 80; i += 2) {
    console.log(i)
 }
 */

/*let cards = [7,3,9]

for (i = 0; i < cards.length; i ++) {
    console.log(cards[i])
} */

/* let sentence = ["Hello ", "my ", "name ", "is ", "Jonah"]
let greetingEl = document.getElementById("greeting-el")

for (let i = 0; i < sentence.length; i ++) {
    greetingEl.textContent += sentence[i]
}
*/

// Return function

// let player1Time = 102
// let player2Time = 177
// let totalTime = player1Time + player2Time
//  // crtl+d to center
// function getFastestRaceTime() {
//     if(player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()

// function raceTime() {
//     return player1Time + player2Time
// }

// let bothTimes = raceTime()

// console.log(bothTimes)

//Random Numbers

//  function rollDice() {
//     let randomNumber = Math.floor(Math.random()*7)
//     return randomNumber
// }

// console.log( rollDice() )

//  let hasCompletedCourse = true
//  let giveCertificate = true

//  if (hasCompletedCourse === true && giveCertificate === true) {
//      generateCertificate()
//  } 

//  function generateCertificate() {
//      console.log("Generating Certificate.......")
//  }

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if(hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution()
// }

// function showSolution() {
//     console.log("Showing the Solution......")
// }
// let likesDocumentaries = true 
// let likesStarups = false

// if (likesDocumentaries === true || likesStarups === true) {
//     recommendMovie()
// }

// function recommendMovie() {
//     console.log("Hey check out this movie!")
// }

//Objects

// let course = {
//     title: "Learn CSS grid for free",
//     lessons: 16,
//     creator: "Jonah",
//     length: 63,
//     level:2,
//     free: true,
//     tags: ["html", "css"]
// }

// let airbnbCastle = {
//     superListing: true,
//     title: "Haunted Manor",
//     price: 300,
//     tags: ["affordable", "beautiful scenary", "historical"]
// }

// console.log(airbnbCastle.superListing);
// console.log(airbnbCastle.rooms);
// console.log(airbnbCastle.tags);
// console.log(airbnbCastle.title);

function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random()* arr.length)
    // get random drink item
    const item = arr[randomIndex]

    return item
}
const array = [1, "hello", 5, 8]


const result = getRandomItem(array)
console.log(result)
