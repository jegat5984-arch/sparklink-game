const board = document.getElementById("game-board");

board.innerHTML = "";

for(let i = 0; i < 25; i++){

    const div = document.createElement("div");

    div.className = "cell";

    div.textContent = "⚡";

    board.appendChild(div);

}