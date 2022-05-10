// *Variables*
// Create a variable and console log the value
let a = 1
console.log(a);
// Create a variable, add 10 to it, and alert the value
let b = 1
b += 10
alert(b)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(x,y,z,g) {
    alert(x-y-z-g)
}
sub4(1,2,3,4)
// Create a function that divides one number by another and returns the remainder
function div2r(a,b){
    return(a%b)
}
console.log(div2r(1,2));
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addJum(a,b){
    let cat=(a+b)
    if (cat > 50){
        alert('Jumanji')
    }
}
addJum(30,21)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function mult3(a,b,c) {
    let dog = a*b*c
    if (dog%3 == 0) {
        alert('Zebra')
    }
}
mult3(1,2,3)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordNumber(a,b) {
    for (i=1;i <= b; i++) {
        console.log(a);
    }
}
wordNumber('Moose', 5)