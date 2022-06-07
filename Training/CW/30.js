//Complementary DNA

function DNAStrand(dna){
    return dna.split('')
    .map(e=>{
      if (e == 'A'){
        return 'T'
      }else if (e == 'T'){
        return 'A'
      }else if(e=='G'){
        return 'C'
      }else return 'G'
    })
    .join('')
  }