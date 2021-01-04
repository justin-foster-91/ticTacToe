let sp = ' '
let gameBoard = [
  [sp,sp,sp],
  [sp,sp,sp],
  [sp,sp,sp]
];
let currentMove = 0;
let playerOneWins = 0;
let playerTwoWinds = 0;

function move(row, column, movePiece){
  if (gameBoard[row][column] === sp){
    gameBoard[row][column] = movePiece;
    currentMove++;
  }
}

function playerOne(row, column){
  move(row, column, 'X')
}

function playerTwo(row, column){
  move(row, column, 'O')
}

function playGame(row, column){
  if (isGameOver() === false) {
    if (currentMove % 2 === 0) {
      playerOne(row, column)
    } else {
      playerTwo(row, column)
    }
  } else {
    return ((currentMove - 1) % 2 === 0) ? 'Player one' : 'Player two';
  }
}

function getFirstRow(){
  return gameBoard[0]
}

function getSecondRow(){
  return gameBoard[1]
}

function getThirdRow(){
  return gameBoard[2]
}

function getFirstColumn(){
  return [gameBoard[0][0], gameBoard[1][0], gameBoard[2][0]]
}

function getSecondColumn(){
  return [gameBoard[0][1], gameBoard[1][1], gameBoard[2][1]]
}

function getThirdColumn(){
  return [gameBoard[0][2], gameBoard[1][2], gameBoard[2][2]]
}

function getFirstDiagonal(){
  return [gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]]
}

function getSecondDiagonal(){
  return [gameBoard[0][2], gameBoard[1][1], gameBoard[2][0]]
}

const checkSetsOfThree = [
  getFirstRow,
  getSecondRow,
  getThirdRow,
  getFirstColumn,
  getSecondColumn,
  getThirdColumn,
  getFirstDiagonal,
  getSecondDiagonal
]

// I'd originally returned a boolean, but changed it to record whether X or O won
// List -> Object
function whoIsThreeInARow(list){
  let countX = 0, countO = 0;
  let result = {winnerX: false, winnerO: false}
  list.map(char => {
    if (char === 'X') countX++;
    if (char === 'O') countO++;
  })

  if (countX === 3) result.winnerX = true;
  if (countO === 3) result.winnerO = true;

  return result;
}

function isGameOver(){
  let finished = false;
  let winner = '';
 
  checkSetsOfThree.map(func => {
    let list = func()
    if (whoIsThreeInARow(list).winnerX) {
      finished = true
      winner = 'Player One'
    }
    if (whoIsThreeInARow(list).winnerO) {
      finished = true
      winner = 'Player Two'
    }
  })
  
  return finished ? winner : false;
}

function display(){
  console.log('Game Board: ');
  console.log(gameBoard[0])
  console.log(gameBoard[1])
  console.log(gameBoard[2])
}
/*
function gameLoop(){
  while (!isGameOver()){
    // Print board
    display();
    // Get input from user
    const prompt = require('prompt-sync')();
    // Inputs as X, X
    let playerMove = prompt('Where would you like to move?');
    if (playerMove === 'break') break;
    // Call PlayGame with above input
    playerMove = playerMove.split(',').map(num => Number(num.trim()))
    // [ X, X ]
    playGame(playerMove[0], playerMove[1]);
  }
  display();
  console.log(isGameOver());
  
}

gameLoop();
*/

// console.log(playGame(0, 0));
// console.log(playGame(2, 2));
// console.log(playGame(2, 1));
// console.log("Current Move: ", currentMove);
// console.log(gameBoard);
// display();
// console.log(' ');
// console.log(() => checkSetsOfThree.getFirstRow);
// console.log(whoIsThreeInARow(() => checkSetsOfThree.getFirstRow));

// console.log('First row: ', whoIsThreeInARow(getFirstRow()));

// console.log(isGameOver())

