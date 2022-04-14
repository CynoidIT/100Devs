// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let varHoliday
varHoliday = "none"
console.log(varHoliday.toUpperCase())

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let varString = 'abcdef'
alert(varString.slice(varString.length-3,varString.length))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function fiveNums(a,b,c,d,e) {
    alert(Math.abs(100-a-b-c-d-e))
}
fiveNums(1,2,3,4,5)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function threeNums(a,b,c) {
    let tempArr = [a,b,c]
    tempArr.sort()
    console.log(tempArr[0], tempArr[2])
}
threeNums(2,3,1)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

// function headsTails() {
//     let result = Math.floor(Math.random()*2)
//     let coin = result === 1 ? 'Heads' : 'Tails'
//     console.log(coin)
// }

const headsTails = _ => Math.random() < .5 ? 'Heads' : 'Tails'

console.log(headsTails())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flips(x) {
    for (i=1;i<x;i++){
        console.log(headsTails())
    }
}

flips(15)