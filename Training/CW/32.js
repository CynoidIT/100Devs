//Is this a triangle?


function isTriangle(a,b,c){
    let arr = [a,b,c]
    arr.sort((a,b)=>a-b)
    if(arr[0] + arr[1] <= arr[2]){
      return false
    }else return true
  }