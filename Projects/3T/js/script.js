//Start new game
//Set event listeners
//Set player
//Click event
//Update board
//check if win
//check if draw
//switch player


let claimedSpots = [1,2,3]
let winner = ""


let player1 = []
let player2 = []



//Start new game
    //Clear board
    //Clear player data
    //Clear game conditions
    //Build board



//Draw board

//Switch players

//Take a turn

//Update board



//Board state
function boardState(){
    let board = [0,0,0,0,0,0,0,0,0]
    return boardUsed = board.reduce((a,b) => a+b)
}

//Check for a win
function checkWin(){
    const solution = [[1,2,3], [1,4,7], [1,5,9], [2,5,8], [3,5,7],[3,6,9], [4,5,6], [7,8,9]]
    for(i=0;i<8;i++){
        return solution[i].every(e => claimedSpots.includes(e))
    }
}

//Check for a draw
function checkDraw(){
    if(winner !== "" && boardUsed === 9){
        console.log("Draw")
    }
}
