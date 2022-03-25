//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arrNums = [1,2,3,4,5]
alert(arrNums.reduce((a,b)=> a+=b))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function sqrArray(arr){
    return arr.map(element=>element*element)
}
console.log(sqrArray(arrNums))

//Create a function that takes string
//Print the reverse of that string to the console
function reverseStr(str){
    return str.split('').reverse().join('')   
}

console.log(reverseStr('cat'))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palCheck(str){
    if(str === reverseStr(str)){
        console.log('It is a palindrome')
    } else console.log('not a palindrome')
}

palCheck('mad')
palCheck('dad')