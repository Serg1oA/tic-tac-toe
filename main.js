document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".square");
  const gameStateHolder = document.querySelector("#gameState");
  const nextRoundButton = document.querySelector("#nextRound");
  const newGameButton = document.querySelector("#newGame");

  let boardState = Array(9).fill(null);
  let currentPlayer = "X";
  let gameActive = true;
  let playerXScore = 0;
  let playerOScore = 0;

  const playerXScoreSpan = document.getElementById("playerXScore");
  const playerOScoreSpan = document.getElementById("playerOScore");

  const winningLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  const checkWinner = () => {
    for (const line of winningLines) {
      const [a, b, c] = line;
      if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
        gameStateHolder.innerText = `Player ${boardState[a]} wins!`;
        gameActive = false;
        if (boardState[a] === "X") {
          playerXScore++;
          playerXScoreSpan.innerText = playerXScore;
        } else {
          playerOScore++;
          playerOScoreSpan.innerText = playerOScore;
        }
        return;
      }
    }

    if (!boardState.includes(null)) {
      gameStateHolder.innerText = "It's a draw!";
      gameActive = false;
    }
  };

  const handleClick = (square, index) => {
    if (boardState[index] || !gameActive) return;

    boardState[index] = currentPlayer;
    square.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    if (gameActive) {
      gameStateHolder.innerText = `Player ${currentPlayer}'s turn`;
    }
  };

  const resetBoard = () => {
    boardState = Array(9).fill(null);
    squares.forEach(square => {
      square.innerText = "";
    });
    currentPlayer = "X";
    gameActive = true;
    gameStateHolder.innerText = `Player ${currentPlayer}'s turn`;
  };

  const newGame = () => {
    playerXScore = 0;
    playerOScore = 0;
    playerXScoreSpan.innerText = 0;
    playerOScoreSpan.innerText = 0;
    resetBoard();
  };

  squares.forEach((square, index) => {
    square.addEventListener("click", () => handleClick(square, index));
  });
  newGameButton.addEventListener("click", newGame);

  nextRoundButton.addEventListener("click", resetBoard);

  resetBoard(); // Initialize game on load
});