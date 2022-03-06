//--- Easy
//create a variable and assign it a number
let a = 1
//minus 10 from that number
a = a - 10
//print that number to the console
console.log(a)
//--- Medium
//create a variable that holds a value from the input
let b = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
b = b + 25
//alert that number
alert(b)
console.log(b);
//--- Hard
//create a variable that holds the h1
let c = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
c.addEventListener('click', power)

function power() {
    console.log(a + Number(b))
}

