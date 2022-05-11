/*------------  Tic-Tac-Toe Game  ------------*/

//temporary values
let player1Name = 'Mike'
let player2Name = 'Tim'
let player1Token = 'url("https://placekitten.com/g/200/200")'
let player2Token = 'url("https://placedog.net/200/200?random")'



//Set global ariables
let style = 0
let boardState = [0,0,0,0,0,0,0,0,0]
let winner = ''
let players = []
let currentPlayer = 0
let winningPattern = []
const boardLocations = document.querySelectorAll('.boardLocation')
const solution = [[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,4,6],[2,5,8], [3,4,5], [6,7,8]]


//Functions
function initGame() {
    const player1 = new Player(player1Name, player1Token)
    const player2 = new Player(player2Name, player2Token) 
    players = [player1,player2]
}

function resetGame() {
    style = 0
    boardState = [0,0,0,0,0,0,0,0,0]
    winner = ''
    players = []
    currentPlayer = 0
    document.getElementById('winner').innerText = '' 
    document.getElementById('resetGame').className = 'hidden'
    boardLocations.forEach(location => {
        document.getElementById(location.id).style.backgroundImage = ''
    }
    )
    addEventWatchers()
    initGame()
}

function addEventWatchers() {
    document.getElementById('resetGame').addEventListener('click', resetGame)
    boardLocations.forEach(location => {
        location.addEventListener('click', clickBoard)})
}

function clickBoard(x) {
    const square = parseInt(x.target.id)
    //console.log('click')

    if (blankSquare(square) === false){
        return
    } else {
        //console.log('board',boardState)
        playerTurn(square)
        //console.log(players)
        if (checkWin(`player${currentPlayer}`) === true){
            document.getElementById('winner').innerText = `Player ${currentPlayer+1} wins` 
            document.getElementById('resetGame').className = ''
            boardLocations.forEach(location => {
                location.removeEventListener('click', clickBoard)})
    //         boardLocations.forEach(location => {
    //                 console.log(solution[winningPattern],location.id)
    //             if (solution[winningPattern].includes(location.id) ===true){
    //                 console.log(solution[winningPattern],location.id, 'false')
    //                 document.getElementById(location.id).className = 'fade'
    //             }
    //    })
                
        }else if (checkDraw() === true){
            document.getElementById('winner').innerText = `It's a draw` 
            document.getElementById('resetGame').className = ''
            boardLocations.forEach(location => {
                location.removeEventListener('click', clickBoard)})
        }else {
            currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0
            //console.log('Keep playing')
        }    
    }
}

function blankSquare(x) {
    if (boardState[x] !== 0){
        return false
    }else {
        boardState[x] = 1
        return true
    }
}

function checkWin(player) {
    //console.log('win check', player)
    for(i=0;i<=7;i++){
        if(solution[i].every(e => players[currentPlayer].squares.includes(e))===true){
            winningPattern = i
            return true
        }
    }
}

function checkDraw() {
    if(winner === "" && checkBoardState() === 9){
        return true
    }
}

function checkBoardState() {
    return boardUsed = boardState.reduce((a,b) => a+b)
}

function checkCurrentPlayer(){
    if (players[0].turn === 1){
        return 'player1'
    }else return 'player2'
}

function playerTurn(square){
    //console.log(players[currentPlayer])
    document.getElementById(square).style.backgroundImage = players[currentPlayer].token
    players[currentPlayer].squares.push(square)
}

class Player{
    constructor(name,token){
        this._name = name
        this._token = token
        this.squares = []
    }
    get name(){
        return this._name
    }
    get token(){
        return this._token
    }

}

//Start game

addEventWatchers()
resetGame()
initGame()

//show initial state
console.log('current player:',currentPlayer,'board state',boardState,'winner',winner,'players',players)
