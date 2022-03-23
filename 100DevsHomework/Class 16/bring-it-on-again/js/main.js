// *Variables*
// Declare a variable, assign it a value, and alert the value

let firstVar = 1
//alert(firstVar)

// Create a variable, divide it by 10, and console log the value

let secondVar = 10
//console.log(secondVar/10)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multThree(x,y,z) {
    alert(x*y*z)
}
//multThree(2,3,4)

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

function mathOne(a,b,c,d) {
    console.log(a+b-c-d)
}
//mathOne(1,2,3,4)

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

function mathTwo(a,b,c) {
    let x = (100 + a - b)/c
    if (x > 25) {
        console.log('WE HAVE A WINNNA');
    } 
}
//mathTwo(3,2,1)

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

function dayCheck() {
    let day = prompt('Enter a day of the week: ')
    if (day.toLowerCase() == 'saturday' || day.toLowerCase() == 'sunday') {
        alert('Weekend')
    } else alert('Try Again!')
}
//dayCheck()

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function countNumbers(x) {
    for (let i=1; i<=x; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}

countNumbers(prompt('Enter a number: '))