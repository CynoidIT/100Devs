//Simple Pig Latin

function pigIt(str){
  
    let last = str.charAt(str.length-1)
    let answer = (str.split(' ').map(e =>e += `${e[0]}ay`).map(e=>e.slice(1)).join(' '))
  
    if(last === '!' || last === '?' || last === '.'){
      answer = answer.slice(0, answer.length-2)
    }
    
    return(answer)
  }