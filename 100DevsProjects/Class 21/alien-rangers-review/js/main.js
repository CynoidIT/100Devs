//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let arrShows = ['a' , 'b' ,'c']

arrShows.forEach( x => console.log(x))


//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

let arrNums =[1,2,3]
let newArrNums = arrNums.filter(x => x%2==0)
console.log(newArrNums)

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function arrNum(arr){
    arr.sort((a,b) => a-b)
    let answer = [arr[1], arr[arr.length-2]]
    alert(answer)
    console.log(arr)
    console.log(answer)
}

let arrInput = [1,4,7,3,7,8,5]
arrNum(arrInput)