//Vowel Count

function getCount(str) {
    let vowelsCount = 0;
    let a = (str.split(''))
    for (e in a){
      let b = str[e]
      if (b==='a'||b==='e'||b==='i'||b==='o'||b==='u'){
        vowelsCount++
      }
    }
    return vowelsCount;
  }