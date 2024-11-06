document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.getElementById("tic-tac-toe");
    let board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function createBoard() {
        gameContainer.innerHTML = "";
        board.forEach((cell, index) => {
            const cellDiv = document.createElement("div");
            cellDiv.classList.add("cell");
            cellDiv.dataset.index = index;
            cellDiv.innerText = cell;
            cellDiv.addEventListener("click", handleCellClick, { once: true });
            gameContainer.appendChild(cellDiv);
        });
    }

    function handleCellClick(event) {
        const cellIndex = event.target.dataset.index;
        if (board[cellIndex] === "") {
            board[cellIndex] = currentPlayer;
            event.target.innerText = currentPlayer;
            if (checkWin()) {
                alert(`${currentPlayer} wins!`);
                resetGame();
            } else if (board.every(cell => cell !== "")) {
                alert("It's a tie!");
                resetGame();
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    }

    function checkWin() {
        return winningCombinations.some(combination => {
            return combination.every(index => board[index] === currentPlayer);
        });
    }

    function resetGame() {
        board = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        createBoard();
    }

    createBoard();
});
