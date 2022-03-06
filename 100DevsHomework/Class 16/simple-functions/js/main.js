//---Easy
//create a function that subtracts two numbers and alerts the difference
function sub2(a,b) {
    alert(a-b)
}
//sub2(100,33)

//create a function that divides three numbers and console logs the quotient
function div3(a,b,c){
    console.log(a/b/c);
}
//div3(12,4,3)

//create a function that multiplys three numbers and returns the product
function mult3(a,b,c){
    return(a*b*c)
}
let tool = mult3(5,10,2)

//alert(tool)

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function med1(a,b,c){
    return ((a+b)%c)
}
let med2 = med1(3,3,2)
alert(med2)

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function hard1(a,b,c,d){
    let answer = a*b
    if (answer > 100) {
        console.log(c+d)
    } else if (answer > 100) {
        console.log(c-d);
    } else {
        alert((a*b*c)%d)
    }
}
//hard1(1,2,3,4)