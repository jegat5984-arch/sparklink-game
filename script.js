const board = document.getElementById("game-board");
const statusText = document.getElementById("status");
const levelText = document.getElementById("level");
const movesText = document.getElementById("moves");
const coinsText = document.getElementById("coins");
const nextLevelBtn = document.getElementById("nextLevelBtn");

let level = Number(localStorage.getItem("sparkLevel")) || 1;
let coins = Number(localStorage.getItem("sparkCoins")) || 0;

let moves = 0;
let solved = false;

let cells = [];
let winPattern = [];

function generateLevel() {

    winPattern = [
        "⚡","━","┓","","",
        "","","┃","","",
        "","","┗","━","",
        "","","","┃","",
        "","","","💡",""
    ];

    cells = [...winPattern];

    const rotatableIndexes = [1, 2, 7, 12, 13, 18];

    const rotations = {
        "━": "┃",
        "┃": "━",
        "┓": "┛",
        "┛": "┗",
        "┗": "┏",
        "┏": "┓"
    };

    const shuffleCount = Math.min(level + 2, 12);

    for (let i = 0; i < shuffleCount; i++) {

        const randomIndex =
            rotatableIndexes[
                Math.floor(
                    Math.random() * rotatableIndexes.length
                )
            ];

        if (rotations[cells[randomIndex]]) {
            cells[randomIndex] =
                rotations[cells[randomIndex]];
        }
    }

    if (
        JSON.stringify(cells) ===
        JSON.stringify(winPattern)
    ) {
        generateLevel();
    }
}

function loadLevel() {

    solved = false;
    moves = 0;

    board.style.boxShadow =
        "0 0 25px rgba(0,255,255,.25)";

    board.style.transform = "scale(1)";

    movesText.textContent = moves;
    levelText.textContent = level;
    coinsText.textContent = coins;

    generateLevel();

    nextLevelBtn.style.display = "none";

    statusText.textContent =
        "Connect the power source to the bulb!";

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

    if (win && !solved) {

        solved = true;

        board.style.boxShadow =
            "0 0 80px #00ffcc";

        board.style.transform =
            "scale(1.03)";

        document
            .querySelectorAll(".cell")
            .forEach(cell => {
                cell.classList.add("powered");
            });

        document
            .querySelectorAll(".cell")
            .forEach(cell => {

                if (cell.textContent === "💡") {
                    cell.classList.add("bulb-on");
                }

            });

        coins += 10;

        coinsText.textContent = coins;

        localStorage.setItem(
            "sparkCoins",
            coins
        );

        localStorage.setItem(
            "sparkLevel",
            level
        );

        statusText.textContent =
            "🎉 Level Complete! +10 Coins";

        statusText.style.color =
            "#00ff66";

        nextLevelBtn.style.display =
            "inline-block";
    }
}

nextLevelBtn.addEventListener("click", () => {

    level++;

    localStorage.setItem(
        "sparkLevel",
        level
    );

    loadLevel();

});

loadLevel();