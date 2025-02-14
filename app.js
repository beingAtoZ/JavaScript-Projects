const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetIt = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;
let gameTracker = 0;

function handlePlayer1Click() {
  if (!isGameOver) {
    p1Score++;
    gamePointCheck();
    p1Display.textContent = p1Score;
    if (p1Score === winningScore) {
      p1Display.classList.add("has-text-success");
      p2Display.classList.add("has-text-danger");
      isGameOver = true;
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
  }
}

function handlePlayer2Click() {
  if (!isGameOver) {
    p2Score++;
    gamePointCheck();
    p2Display.textContent = p2Score;
    if (p2Score === winningScore) {
      p2Display.classList.add("has-text-success");
      p1Display.classList.add("has-text-danger");
      isGameOver = true;
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
  }
}

p1Button.addEventListener("click", handlePlayer1Click);
p1Button.addEventListener("touchstart", handlePlayer1Click);

p2Button.addEventListener("click", handlePlayer2Click);
p2Button.addEventListener("touchstart", handlePlayer2Click);

function gamePointCheck() {
  if (p1Score == winningScore - 1 && p2Score == winningScore - 1) {
    if (gameTracker < 2) {
      winningScore++;
      gameTracker++;
    }
  }
}

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetIt.addEventListener("click", reset);
resetIt.addEventListener("touchstart", reset);

function reset() {
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Score = 0;
  p2Score = 0;
  isGameOver = false;
  p1Display.classList.remove("has-text-success", "has-text-danger");
  p2Display.classList.remove("has-text-success", "has-text-danger");
  p1Button.disabled = false;
  p2Button.disabled = false;
}
