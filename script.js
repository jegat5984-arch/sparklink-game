const board = document.getElementById("game-board");
const statusText = document.getElementById("status");
const levelText = document.getElementById("level");
const movesText = document.getElementById("moves");
const nextLevelBtn = document.getElementById("nextLevelBtn");

let level = 1;
let moves = 0;
let solved = false;

const puzzleLayouts = [
{
cells: [
"⚡","┃","┓","","",
"","","┃","","",
"","","┗","━","",
"","","","┃","",
"","","","💡",""
],
win: [
"⚡","━","┓","","",
"","","┃","","",
"","","┗","━","",
"","","","┃","",
"","","","💡",""
]
},
{
cells: [
"⚡","┃","┓","","",
"","","┃","","",
"","","┗","┃","",
"","","","┃","",
"","","","💡",""
],
win: [
"⚡","━","┓","","",
"","","┃","","",
"","","┗","━","",
"","","","┃","",
"","","","💡",""
]
}
];

let cells = [];
let winPattern = [];

function loadLevel() {
    solved = false;
    moves = 0;

    movesText.textContent = moves;
    levelText.textContent = level;

    const data = puzzleLayouts[(level - 1) % puzzleLayouts.length];

    cells = [...data.cells];
    winPattern = [...data.win];

    nextLevelBtn.style.display = "none";

    statusText.textContent = "Connect the power source to the bulb!";
    statusText.style.color = "white";

    drawBoard();
}

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

        moves++;
        movesText.textContent = moves;

        drawBoard();
    }
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

        statusText.textContent = "🎉 Level Complete!";
        statusText.style.color = "#00ff66";

        nextLevelBtn.style.display = "inline-block";
    }
}

nextLevelBtn.addEventListener("click", () => {
    level++;
    loadLevel();
});

loadLevel();