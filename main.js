const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const statusText = document.getElementById("status-text");
const difficultyText = document.getElementById("difficulty-text");
const playerText = document.getElementById("player-text");

const newGameBtn = document.getElementById("new-game-btn");
const difficultyBtn = document.getElementById("difficulty-btn");
const colorBtn = document.getElementById("color-btn");
const aiBtn = document.getElementById("ai-btn");

const CANVAS_SIZE = 640;

let difficulty = "Easy";
let playerColor = "흑돌";

function initCanvas() {
  canvas.width = CANVAS_SIZE;
  canvas.height = CANVAS_SIZE;

  drawStartScreen();
}

function drawStartScreen() {
  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

  ctx.fillStyle = "#e7b96f";
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

  ctx.fillStyle = "#3b2412";
  ctx.font = "bold 34px Arial";
  ctx.textAlign = "center";
  ctx.fillText("OMOK", CANVAS_SIZE / 2, CANVAS_SIZE / 2 - 20);

  ctx.font = "20px Arial";
  ctx.fillText("Canvas Ready", CANVAS_SIZE / 2, CANVAS_SIZE / 2 + 25);
}

function setStatus(message) {
  statusText.textContent = message;
}

function handleNewGame() {
  setStatus("새 게임 준비 완료");
  drawStartScreen();
}

function handleDifficulty() {
  if (difficulty === "Easy") {
    difficulty = "Normal";
  } else if (difficulty === "Normal") {
    difficulty = "Hard";
  } else {
    difficulty = "Easy";
  }

  difficultyText.textContent = `난이도: ${difficulty}`;
  setStatus(`난이도 변경: ${difficulty}`);
}

function handleColorChange() {
  if (playerColor === "흑돌") {
    playerColor = "백돌";
  } else {
    playerColor = "흑돌";
  }

  playerText.textContent = `플레이어: ${playerColor}`;
  setStatus(`플레이어 변경: ${playerColor}`);
}

function handleAiMove() {
  setStatus("AI 기능은 다음 단계에서 추가합니다");
}

newGameBtn.addEventListener("click", handleNewGame);
difficultyBtn.addEventListener("click", handleDifficulty);
colorBtn.addEventListener("click", handleColorChange);
aiBtn.addEventListener("click", handleAiMove);

initCanvas();