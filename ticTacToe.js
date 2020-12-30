let gameBoard = [
  ['_','_','_'],
  ['_','_','_'],
  ['_','_','_']
];
let currentMove = 0;

function move(row, column, movePiece){
  // console.log(gameBoard[x][y])
  gameBoard[row][column] = movePiece;
  currentMove++;
  // Check if board spot is occupied -> Do nothing
}

function playerOne(row, column){
  move(row, column, 'X')
}

function playerTwo(row, column){
  move(row, column, 'O')
}

function playGame(row, column){
  if (currentMove % 2 === 0) {
    playerOne(row, column)
  } else {
    playerTwo(row, column)
  }
}

function getFirstRow(){

}

function getSecondRow(){

}

function getThirdRow(){

}

function getFirstColumn(){

}

function getSecondColumn(){

}

function getThirdColumn(){

}

function getFirstDiagonal(){

}

function getSecondDiagonal(){

}

function isThreeInARow(list){

}

function isGameOver(){
  
}

console.log(playGame(0, 0));
console.log(playGame(2, 2));
console.log(currentMove);
console.log(gameBoard);


// Write display function