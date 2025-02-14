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
let gameTracker = 0;

p1Button.addEventListener("click", (e) => {
  e.preventDefault();
  if (!isGameOver) {
    p1Score++;
    gamePointCheck();
    p1Display.textContent = p1Score;
    checkWinner();
  }
});

p2Button.addEventListener("click", (e) => {
  e.preventDefault();
  if (!isGameOver) {
    p2Score++;
    gamePointCheck();
    p2Display.textContent = p2Score;
    checkWinner();
  }
});

function gamePointCheck() {
  if (p1Score === winningScore - 1 && p2Score === winningScore - 1) {
    if (gameTracker < 2) {
      winningScore++; // Extend the game
      gameTracker++;  // Track tie-breaks
    }
  }
}

function checkWinner() {
  if (p1Score >= winningScore || p2Score >= winningScore) {
    if (p1Score === p2Score) {
      return; // Don't end the game if it's still tied
    }
    isGameOver = true;
    p1Button.disabled = true;
    p2Button.disabled = true;
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
  gameTracker = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("has-text-success", "has-text-danger");
  p2Display.classList.remove("has-text-success", "has-text-danger");
  p1Button.disabled = false;
  p2Button.disabled = false;
}
