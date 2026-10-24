const board = document.getElementById("game-board");

const cells = [
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
      rotateWire(index);
    });

    board.appendChild(div);
  });
}

function rotateWire(index) {
  const rotations = {
    "━":"┃",
    "┃":"━",
    "┓":"┛",
    "┛":"┗",
    "┗":"┏",
    "┏":"┓"
  };

  if (rotations[cells[index]]) {
    cells[index] = rotations[cells[index]];
  }

  drawBoard();
}

drawBoard();
