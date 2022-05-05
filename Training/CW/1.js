//return price without vat
function excludingVatPrice(price){
    if (price === 0){
      return 0
      }else if (!price){
        console.log(price)
        return -1
      }else {
        let answer = (price /(1+.15))
        return(parseFloat(answer.toFixed(2)))
      } 
  }


// create a function which returns an RNA sequence from the given DNA sequence
function DNAtoRNA(dna) {
    return dna.replace(/T/g,'U')
}

//Count the Monkeys!
function monkeyCount(n) {
    let arr = []
    for (i=1;i<=n;i++){
      arr.push(i)
    }
    return arr
  }


//Sentence smash  
  function smash (words) {
    return words.join(' ')
 };


// Write here your multiply-function

function multiply(n1,n2){
    return n1*n2
  }


//If you can't sleep, just count sheep!!
var countSheep = function (num){
    let answer = ''
    for (i=1;i<=num;i++){
      answer += `${i} sheep...`
    }
    return answer
  }


//Transportation on vacation 
function rentalCarCost(d) {
    let subT = d*40
    if (d>=7){
      return subT - 50
    }else if (d>=3){
      return subT - 20
    }else {
      return subT
    }
  }

//How good are you really?

function betterThanAverage(classPoints, yourPoints) {
  let x = yourPoints
  classPoints.forEach(e=>x+=e)
  return(x/(classPoints.length+1)<yourPoints)
  }
  

//Area or perimeter

const areaOrPerimeter = function(l , w) {
  if (l === w) {
    return l*w
  } else {
    return 2*w + 2*l
    }
};