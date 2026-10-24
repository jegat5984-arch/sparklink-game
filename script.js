const board = document.getElementById("game-board");
const statusText = document.getElementById("status");

let solved = false;

const cells = [
  "⚡","┃","┓","","",
  "","","┃","","",
  "","","┗","━","",
  "","","","┃","",
  "","","","💡",""
];

const winPattern = [
  "⚡","━","┓","","",
  "","","┃","","",
  "","","┗","━","",
  "","","","┃","",
  "","","","💡",""
];

function drawBoard() {
  board.innerHTML = "";

  cells.forEach((cell, index) => {
    const div = document.createElement("div");

    div.className = "cell";
    div.textContent = cell;

    div.addEventListener("click", () => {
      if (!solved) {
        rotateWire(index);
      }
    });

    board.appendChild(div);
  });

  checkWin();
}

function rotateWire(index) {
  const rotations = {
    "━": "┃",
    "┃": "━",
    "┓": "┛",
    "┛": "┗",
    "┗": "┏",
    "┏": "┓"
  };

  if (rotations[cells[index]]) {
    cells[index] = rotations[cells[index]];
  }

  drawBoard();
}

function checkWin() {
  let win = true;

  for (let i = 0; i < cells.length; i++) {
    if (cells[i] !== winPattern[i]) {
      win = false;
      break;
    }
  }

  if (win) {
    solved = true;
    statusText.innerHTML =
      "🎉 Level Complete! Bulb Powered Successfully!";
    statusText.style.color = "#00ff66";
  }
}

drawBoard();