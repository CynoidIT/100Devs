//7kyu - Highest and Lowest


function highAndLow(numbers){
    const arr = numbers.split(' ').map(e => Number(e)).sort((a,b) => a - b)
    return (`${arr[arr.length-1]} ${arr[0]}`)
  }


console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "Answer: 42 -9")
console.log(highAndLow("1 2 3"), "Answer: 3 1")

