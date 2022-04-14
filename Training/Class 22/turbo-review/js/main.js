// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = 'water'
console.log(favDrink.trim())
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multWords = 'apple b c'
console.log(multWords.search('apple'))
// let brokeWords = multWords.split(' ')
// brokeWords.forEach(element => {element === 'apple' ? true : false});
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rps() {
    let answer = Math.floor(Math.random() * 3)
    if (answer === 1){
        console.log('rock')
        return 'rock'
    } else if (answer === 2){
        console.log('paper')
        return 'paper'
    } else console.log('scissors')
        return 'scissors'
}
rps()

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function rpsCheck(choice) {
    console.log(choice)
    let bot = rps()
    if (choice === bot){
        console.log(`${choice}:${bot} It's a tie`)  
    } else if (choice === 'rock' && bot === 'scissors' || choice === 'paper' && bot === 'rock' || choice === 'scissors' && bot === 'paper') {
        console.log(`${choice}:${bot} you win`)
    } else console.log(`${choice}:${bot} you lose`)
}
let choice
//rpsCheck(prompt('rock, paper, or scissors',choice))

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function multiRPS(x){
    x.forEach(element => {
        rpsCheck(element)
    });
}

let arrChoices = ['rock','rock', 'rock']
multiRPS(arrChoices)