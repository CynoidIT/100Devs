//Sum of odd numbers

function rowSumOddNumbers(n) {
    let x = (n*n)-(n-1)
    let ans = x
    if(n===1){
      return 1
    }else for(i=1;i<n;i++){
      ans += x + (2*i)
    }
    return(ans)
  }