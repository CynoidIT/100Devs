//Isograms

function isIsogram(str){
    const arr = (str.split('').map(e=>e.toLowerCase()))
    for (i=0;i<arr.length;i++){
      const answer = arr.filter(e => e == arr[i])
      if (answer.length > 1){
        console.log(answer.length)
        return false
      }
    }return true
  }