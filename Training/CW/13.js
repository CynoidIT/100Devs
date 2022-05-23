//Beginner Series #3 Sum of Numbers


function getSum( a,b ){
    let answer = 0
    if (a<b){
      for (i=a;i<=b;i++){
        answer = answer + i
        }
      }else for (i=b;i<=a;i++){
        answer = answer + i
      }      
    return answer
  }