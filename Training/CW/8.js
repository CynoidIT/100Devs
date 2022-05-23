//Mumbling

function accum(s) {
    let arr = Array.from(s.toUpperCase())
    let answer = []
    for(i=0;i<arr.length;i++){
      for(j=0;j<=i;j++){
        if (j === 0){
        answer[i] = arr[i]
        }else answer[i] = answer[i] + arr[i].toLowerCase()
      }
    }
    return answer.join('-')
  }