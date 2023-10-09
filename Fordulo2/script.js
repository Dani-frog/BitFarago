const board = document.getElementById('board');
const pieces = ['♜', '♞', '♝', '♛', '♚', '♟', '♖', '♘', '♗', '♕', '♔', '♙'];

let selectedPiece = null;
let isWhiteTurn = true;

function createBoard() {
    let isWhite = true;
    for (let i = 0; i < 8; i++) {
        isWhite = !isWhite;
        for (let j = 0; j < 8; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add((isWhite) ? 'white' : 'black');
            isWhite = !isWhite;
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', handleCellClick);
            board.appendChild(cell);
        }
    }
}

function addChessPieces() {
    const cells = document.querySelectorAll('.cell');

    for (let i = 0; i < cells.length; i++) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.innerHTML = pieces[i];
        cells[i].appendChild(piece);
    }
}

function handleCellClick(event) {
    const clickedCell = event.target;

    if (selectedPiece) {
        const isValidMove = checkMove(selectedPiece, clickedCell);

        if (isValidMove) {
            clickedCell.appendChild(selectedPiece);
            selectedPiece.classList.remove('selected');
            selectedPiece = null;
            isWhiteTurn = !isWhiteTurn;

            const isCheckmate = checkMate();
            if (isCheckmate) {
                alert(`${isWhiteTurn ? 'Fehér' : 'Fekete'} győzött!`);
            }
        }
    } else {
        if (clickedCell.childElementCount > 0 && (isWhiteTurn && clickedCell.firstElementChild.innerHTML.charCodeAt() < 9818) || (!isWhiteTurn && clickedCell.firstElementChild.innerHTML.charCodeAt() > 9812)) {
            selectedPiece = clickedCell.firstElementChild;
            selectedPiece.classList.add('selected');
        }
    }
}

function checkMove(piece, targetCell) {
    const rowDiff = Math.abs(targetCell.dataset.row - piece.parentElement.dataset.row);
    const colDiff = Math.abs(targetCell.dataset.col - piece.parentElement.dataset.col);

    const isMoveValid = validateMove(piece.innerHTML, rowDiff, colDiff);

    return isMoveValid;
}

function validateMove(pieceType, rowDiff, colDiff) {
    switch (pieceType) {
        case '♜':
            return rowDiff === 0 || colDiff === 0;
        case '♞':
            return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);
        case '♝':
            return rowDiff === colDiff;
        case '♛':
            return rowDiff === 0 || colDiff === 0 || rowDiff === colDiff;
        case '♚':
            return rowDiff <= 1 && colDiff <= 1;
        case '♟':
            return rowDiff === 1 && colDiff === 0;
        case '♖':
            return rowDiff === 0 || colDiff === 0;
        case '♘':
            return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);
        case '♗':
            return rowDiff === colDiff;
        case '♕':
            return rowDiff === 0 || colDiff === 0 || rowDiff === colDiff;
        case '♔':
            return rowDiff <= 1 && colDiff <= 1;
        case '♙':
            return rowDiff === 1 && colDiff === 0;
        default:
            return false;
    }
}

function checkMate() {
    const kings = document.querySelectorAll(`.piece`);
    let isCheckmate = true;

    kings.forEach(king => {
        const kingRow = parseInt(king.parentElement.dataset.row);
        const kingCol = parseInt(king.parentElement.dataset.col);
        const pieceType = king.innerHTML;

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;
                if (kingRow + i >= 0 && kingRow + i < 8 && kingCol + j >= 0 && kingCol + j < 8) {
                    const targetCell = document.querySelector(`[data-row="${kingRow + i}"][data-col="${kingCol + j}"]`);

                    if (!targetCell.firstElementChild || (isWhiteTurn && targetCell.firstElementChild.innerHTML.charCodeAt() > 9812) || (!isWhiteTurn && targetCell.firstElementChild.innerHTML.charCodeAt() < 9818)) {
                        const isValidMove = validateMove(pieceType, Math.abs(i), Math.abs(j));
                        if (isValidMove) {
                            isCheckmate = false;
                        }
                    }
                }
            }
        }
    });

    return isCheckmate;
}

createBoard();
addChessPieces();