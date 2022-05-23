//Get the Middle Character


function getMiddle(s){
    let arr = (Array.from(s))
    let arrlen = arr.length
    let answer
    arrlen%2 === 0 ? answer = `${arr[(arrlen/2)-1]}${arr[arrlen/2]}` : answer = arr[(Math.floor(arrlen/2))]
    return answer
  }