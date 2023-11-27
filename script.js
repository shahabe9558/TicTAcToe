const gameInfo = document.querySelector('.gameInfo');
const boxes = document.querySelectorAll('.box');
const newGameBtn = document.querySelector('.btn');

let currentPlayer;
let gameGrid;

const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function initialize()
{
    // currentplayer ko x kar do 
    currentPlayer = "X";
//    dispatchEvent;ay content of player on screen 
    gameInfo.innerText = `Current-Player : ${currentPlayer}`;
//    make all boxes empty
    gameGrid = ["", "", "", "", "", "", "", "", ""];
    
    // Make Boxes Empty
    boxes.forEach((box,index) => {
        box.textContent = "";
        box.style.pointerEvents = "all";
        box.classList = `box box${index+1}`;
    });
    
    // Remove Active Class From Button
    newGameBtn.classList.remove("active");

}
initialize();

// Handle Click Game 
function handleClick(index){
    if(gameGrid[index] === "")
    {
        boxes[index].style.pointerEvents = "none";
        boxes[index].textContent = currentPlayer;
        gameGrid[index] = currentPlayer;
        swapTurns();
        gameInfo.textContent = `Current Player : ${currentPlayer}`;
        checkGameOver();
        
    }
}

function swapTurns(){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}


// Add Event Listener to all Boxes to Get Player Input
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
       handleClick(index);
    });
});

newGameBtn.addEventListener('click', initialize);
