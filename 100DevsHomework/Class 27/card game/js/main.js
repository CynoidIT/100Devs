// document.querySelector('button').addEventListener('click', drawOne)

// if(!localStorage.getItem('deck1')){
//   localStorage.setItem('deck1',0)
//   localStorage.setItem('deck2',0)
//   localStorage.setItem('p1Card',0)
//   localStorage.setItem('p2Card',0)
//   initializeGame()
// }

// function initializeGame(){
//   getDeck(1)
//   getDeck(2)
// }
// function drawOne(){
//   takeTurn(1)
//   takeTurn(2)

//   checkDraw()
// }

// async function getDeck(player) {
//   const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

//   const response = await fetch(url)
//   const data = await response.json()

//   localStorage.setItem(`deck${player}`,data.deck_id)
// }

// async function takeTurn(player){
//   const deck = localStorage.getItem(`deck${player}`)
//   const url = `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
//   //localStorage.setItem(`p${player}Card`,0)

//   const response = await fetch(url)
//   const data = await response.json()

//   console.log(data)
  
//   document.getElementById(`p${player}Image`).src = data.cards[0].image
//   localStorage.setItem(`p${player}Card`,(convertCardValue(data.cards[0].value)))
// }

// function checkDraw(){
//   const p1Card = localStorage.getItem('p1Card')    
//   const p2Card = localStorage.getItem('p2Card') 
   
//   console.log('checking',p1Card,p2Card)

//   if (p1Card > p2Card) {
//     document.querySelector('h2').innerText = 'Player 1 wins'
//   }else if (p1Card < p2Card) {
//     document.querySelector('h2').innerText = 'Player 2 wins'
//   }else document.querySelector('h2').innerText = "It's WAR!!!!"

// }

// function convertCardValue(val){
//   if (val == 'ACE'){
//     return 14
//   }else if (val == 'KING'){
//     return 13
//   }else if (val == 'QUEEN'){
//     return 12
//   }else if (val == 'JACK'){
//     return 11
//   }else return Number(val)
// }



let deckId = ''

fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        deckId = data.deck_id
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo(){
  const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#p1Image').src = data.cards[0].image 
        document.querySelector('#p2Image').src = data.cards[1].image
        let player1Val = convertToNum(data.cards[0].value)
        let player2Val = convertToNum(data.cards[1].value)
        if(player1Val > player2Val){
          document.querySelector('h2').innerText = 'Player 1 Wins'
        }else if(player1Val < player2Val){
          document.querySelector('h2').innerText = 'Player 2 Wins'
        }else{
          document.querySelector('h2').innerText = 'Time for War!'
        }

        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function convertToNum(val){
  if(val === 'ACE'){
    return 14
  }else if(val === 'KING'){
    return 13
  }else if(val === 'QUEEN'){
    return 12
  }else if(val === 'JACK'){
    return 11
  }else{
    return Number(val)
  }
}