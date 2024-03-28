let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleCellClick(index) {
  if (gameBoard[index] === '' && gameActive) {
    gameBoard[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;

    if (checkWinner()) {
      alert(`${currentPlayer} wins!`);
      resetGame();
    } else if (gameBoard.every(cell => cell !== '')) {
      alert("It's a tie!");
      resetGame();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
  });
}

function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;

  const cells = document.getElementsByClassName('cell');
  Array.from(cells).forEach(cell => {
    cell.innerText = '';
  });
}