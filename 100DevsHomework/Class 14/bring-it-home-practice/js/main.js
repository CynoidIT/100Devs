// *Variables*
// Create a variable and console log the value

let firstQuestion = 1

console.log(firstQuestion)

// Create a variable, add 10 to it, and alert the value

let secondQuestion = 1
secondQuestion = secondQuestion + 10
alert(secondQuestion)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function thirdQuestion() {
    let a = 1, b = 2, c = 3, d = 4
    let answer = a-b-c-d
    alert(answer)
}
thirdQuestion()

// Create a function that divides one number by another and returns the remainder
function fourthQuestion() {
    let a = 6, b = 5
    let answer = a%b
    console.log(answer)
}
fourthQuestion()

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function fifthQuestion() {
    let a = 40
    for (i = 1; i < 15; i++) {
        if (i+a<50) {
            console.log(i+a)
        }else {
            console.log('Jumanji')        
        }
    }
}
fifthQuestion()



// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function sixthQuestion() {
    for (a=1;a<10;a++){
        for (b=1;b<10;b++) {
            for (c=1;c<10;c++) {
                let answer = (a*b*c)
                if (answer%3 == 0) {
                    console.log('ZEBRA')
                } console.log(answer)
            }
        }
    }
}

sixthQuestion()