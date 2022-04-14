//Create a button that adds 1 to a botScore stored in localStorage 

document.querySelector('button').addEventListener('click', oneUp)

if(!localStorage.getItem('score')){
localStorage.setItem('score',0)
}

function oneUp(){
    let score = Number(localStorage.getItem('score'))
    score += 1
    localStorage.setItem('score',score)
    document.querySelector('h2').innerText = localStorage.getItem('score')
}