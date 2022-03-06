//create a function that adds two numbers and alerts the sum

document.querySelector('#add2').addEventListener('click', add)

function add() {
    let num1 = parseInt(document.querySelector('#inputOne').value)

    let num2 = parseInt(document.querySelector('#inputTwo').value)

    let answer = num1 + num2

    console.log("add")

    document.querySelector('#outputAnswer').innerText = answer
}



//create a function that multiplys three numbers and console logs the product


document.querySelector('#times3').addEventListener('click', timesThree)

function timesThree() {

    let num1 = parseInt(prompt('Enter the first number'))

    let num2 = parseInt(prompt('Enter the second number'))

    let num3 = parseInt(prompt('Enter the third number'))

    let answer = num1 * num2 * num3

    console.log("times")

    document.querySelector('#outputAnswer').innerText = answer
}


//create a function that divides two numbers and returns the ???

document.querySelector('#divide').addEventListener('click', divide)

function divide() {
    let num1 = parseInt(document.querySelector('#inputOne').value)

    let num2 = parseInt(document.querySelector('#inputTwo').value)

    let answer = num1 / num2

    console.log("divide")

    document.querySelector('#outputAnswer').innerText = answer
}