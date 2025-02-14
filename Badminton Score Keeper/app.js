const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetIt = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;
let baseWinningScore = 5; // Store original winning score
let winningScore = baseWinningScore;
let isGameOver = false;
let gameTracker = 0; // Track the number of tie-breaks

p1Button.addEventListener("click", (e) => {
  e.preventDefault();
  if (!isGameOver) {
    p1Score++;
    p1Display.textContent = p1Score;
    gamePointCheck();
    checkWinner();
  }
});

p2Button.addEventListener("click", (e) => {
  e.preventDefault();
  if (!isGameOver) {
    p2Score++;
    p2Display.textContent = p2Score;
    gamePointCheck();
    checkWinner();
  }
});

function gamePointCheck() {
  // Check if both players are at one point below the current winning score
  if (p1Score === winningScore - 1 && p2Score === winningScore - 1) {
    if (gameTracker < 2) {
      winningScore++; // Extend the winning score by 1 point
      gameTracker++; // Increment the tie-break counter
    }
  }

  // Check if both players are at the current winning score
  if (p1Score === winningScore && p2Score === winningScore) {
    if (gameTracker < 2) {
      winningScore++; // Extend the winning score by 1 point
      gameTracker++; // Increment the tie-break counter
    }
  }
}

function checkWinner() {
  // Check if either player has reached the winning score
  if (p1Score >= winningScore || p2Score >= winningScore) {
    // If both scores are equal, do not declare a winner
    if (p1Score === p2Score) {
      return; // Don't end the game if it's still tied
    }
    isGameOver = true; // Set the game as over
    p1Button.disabled = true; // Disable player 1 button
    p2Button.disabled = true; // Disable player 2 button
    // Determine the winner and update display styles
    if (p1Score > p2Score) {
      p1Display.classList.add("has-text-success");
      p2Display.classList.add("has-text-danger");
    } else {
      p2Display.classList.add("has-text-success");
      p1Display.classList.add("has-text-danger");
    }
  }
}

winningScoreSelect.addEventListener("change", function () {
  baseWinningScore = parseInt(this.value);
  reset();
});

resetIt.addEventListener("click", reset);

function reset() {
  p1Score = 0;
  p2Score = 0;
  winningScore = baseWinningScore; // Reset to original winning score
  isGameOver = false;
  gameTracker = 0; // Reset tie-break counter
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("has-text-success", "has-text-danger");
  p2Display.classList.remove("has-text-success", "has-text-danger");
  p1Button.disabled = false;
  p2Button.disabled = false;
}
