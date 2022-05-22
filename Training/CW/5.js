//Square Every Digit

function squareDigits(num){
    return Number(String(num).split('').map((num)=>{return Number(num*num)}).join(''))
  }