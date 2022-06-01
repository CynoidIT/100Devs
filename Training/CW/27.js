//Count the smiley faces!

function countSmileys(arr) {
    const smiles = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"]
    return(arr.filter(e=>smiles.includes(e)).length)
  }