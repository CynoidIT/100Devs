//*****Carousel 1

// let turn = 10

// while (turn <= 10) {
//     console.log(turn)
//     turn++
// }

//******Carousel 2

// let turn = prompt("Number of turns")

// for (i=1;i <= turn; i++){
//     console.log(i)
// }

//****Parity

// let start = prompt("Starting number:")
// let end = prompt("Ending number:")

// for (i=start;i<end;i++) {
//     if (i % 2 !== 0) {
//         console.log(i + " is an odd number.")
//     }
// }

//*****Input Validation

// let firstNumber = 0

// ask()


// function ask(){
//     firstNumber = prompt('Pick a number between 50 and 100.')
//     check();
// }

// function check() {
//     if (firstNumber <= 100 && firstNumber >= 50) {
//         alert("Good Job!");
//     }else {
//         alert("Try again!");
//         ask();
//     }
// }

//*****Multiplication Table

// let number = 0

// ask()

// function ask(){
//     number = prompt('Enter a number between 2 and 9:')
//     check();
// }

// function check() {
//     if (number <= 9 && number >= 2) {
//         showTable(number);
//     }else {
//         alert("Try again!");
//         ask();
//     }
// }

// function showTable(number) {
//     for (i=1; i<=12; i++) {
//     console.log(number + " X " + i + " = " + number*i);
//     }
// }


//*********Neither Yes nor No

// let answer

// ask()

// function ask() {
//     answer = prompt("Enter yes or no.");
//     check(answer);
// }

// function check(answer) {
//     if (answer.toLowerCase()== "no" || answer.toLowerCase() == "yes") {
//         alert("Game Over");
//     } else {
//         alert("That is neither yes nor no!");
//         ask();
//     }
// }

//*******FizzBuzz

for (i=1;i<100;i++) {
    fizzBuzz = ""
    if (i % 3 !== 0 && i % 5 !== 0) {
        console.log(i);
    } else {
    if (i % 3 == 0) {
        fizzBuzz = fizzBuzz + "Fizz";
    }
    if (i % 5 == 0) {
        fizzBuzz = fizzBuzz + "Buzz";
    }
    console.log(fizzBuzz);
    }
}
