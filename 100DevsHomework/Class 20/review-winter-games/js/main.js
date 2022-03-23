//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function evenSpit(a) {
    let answer = []
    a.forEach(element => {
          if(element%2 === 0) {
            answer.push(element)
          }
    })

    return answer
}


console.log(evenSpit([1,2,3,4,5,6,7,8]))