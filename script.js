// Create gameboard object 3x3 array

function generateBoard() {
    const board = new Array(9);

    // Render dummy values
    for (let i = 0; i < board.length; i++) {
        if (i%2 == 0) {
            board[i] = "X";
        }
        else {
            board[i] = "O";
        }
    };

    return board;
}

let Gameboard = generateBoard();

// Display gameboard in HTML formate

function displayController() {
    const content = document.querySelector('#content');
    for (let i = 0; i < Gameboard.length; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('id',i);
        cell.textContent = Gameboard[i];
        content.appendChild(cell);
    };
};

displayController();

// Reset board state

function resetBoard() {
    const elements = document.querySelectorAll('.cell');

    elements.forEach((element) => {
      element.remove();
    });
};

// Create Player objects

const Player = (name) => {
    let points = 0;
};

// Create object to control the flow of the game

const playGame = function() {
    return console.log("Game being played");
};