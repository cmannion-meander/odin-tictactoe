// Check to see if there is a winner
function checkWinner(board) {
    // Win conditions:
    // 1,2,3
    // 4,5,6
    // 7,8,9
    // 1,4,7
    // 2,5,8
    // 3,6,9
    // 1,5,9
    // 3,5,7
    if (areEqual([board[0], board[1], board[2]])) {
        return true
    } else if (areEqual([board[3], board[4], board[5]])) {
        return true
    } else if (areEqual([board[6], board[7], board[8]])) {
        return true
    } else if (areEqual([board[0], board[3], board[6]])) {
        return true
    } else if (areEqual([board[1], board[4], board[7]])) {
        return true
    } else if (areEqual([board[2], board[5], board[8]])) {
        return true
    } else if (areEqual([board[0], board[4], board[8]])) {
        return true
    } else if (areEqual([board[2], board[4], board[6]])) {
        return true
    } else {
        return false;
    };
};

function areEqual(cells){
    var len = cells.length;
    for (var i = 1; i<len; i++) {
        if (cells[i] === "" || cells[i] !== cells[i-1]) {
            return false;
        };
    }
    return true;
}

// Create gameboard object 3x3 array

function generateBoard() {
    const board = new Array(9);

    // Render dummy values
    for (let i = 0; i < board.length; i++) {
        if (i%2 == 0) {
            board[i] = "";
        }
        else {
            board[i] = "";
        }
    };

    return board;
};

// Change contents of cell

function selectCell(id) {
    // Checks player and returns X or O
    let cellID = id.currentTarget.id;
    if (Gameboard[cellID] != "") {
        return alert("Please select a blank cell!!");
    }
    else if (currentPlayer == 1) {
        Gameboard[cellID] = 'X';
    } else {
        Gameboard[cellID] = 'O';
    };
    if (checkWinner(Gameboard) == true) {
        return alert(`Player Number ${currentPlayer} wins!!`);
    };
    currentPlayer = alternatePlayers();
    displayController();
};

// Alternate players

function alternatePlayers() {
    if (currentPlayer == 1) {
        return 2;
    } else {
        return 1;
    }
};

// Display gameboard in HTML format

function displayController() {
    // Remove existing rendered cells
    const cellElements = document.querySelectorAll('.cell');
    cellElements.forEach((cellElement) => {
        cellElement.remove();
    });
    const playerElements = document.querySelectorAll('.playerID');
    playerElements.forEach((playerElement) => {
        playerElement.remove();
    });
    // Display current player
    const header = document.querySelector('#playerDetails');
    const player = document.createElement('div');
    player.classList.add('playerID');
    player.textContent = `It's Player Number ${currentPlayer}'s turn.`;
    header.appendChild(player);
    // Generate playboard based on array
    const content = document.querySelector('#content');
    for (let i = 0; i < Gameboard.length; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('id',i);
        cell.textContent = Gameboard[i];
        cell.addEventListener("click", selectCell, false);
        content.appendChild(cell);
    };
    
};

// Reset board state

function resetBoard() {
    const elements = document.querySelectorAll('.cell');

    elements.forEach((element) => {
      element.remove();
    });
    loadBoard();
};

// Set starting conditions
let currentPlayer = 1;
let Gameboard = generateBoard(); 

function loadBoard() { 
    currentPlayer = 1;
    Gameboard = generateBoard();
    displayController();
};

// Add button functionality
const startGame = document.querySelector('.start');
startGame.addEventListener("click", loadBoard, false);
const newGame = document.querySelector('.reset');
newGame.addEventListener("click", resetBoard, false);
