//Exes and Ohs

function XO(str) {
    let x=0,o=0
    let arr = Array.from(str)
      for (i=0;i<arr.length;i++){
        if (arr[i].toLowerCase() === 'x'){
          x++
        }else if (arr[i].toLowerCase() === 'o'){
          o++
        }
      }
      return x === o
    }