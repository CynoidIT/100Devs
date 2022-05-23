//Find the next perfect square!

function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))){
      sq++
      while(Number.isInteger(Math.sqrt(sq)) !== true){
        sq++
      } return sq
    } else return -1
  }