const playAudio = new Audio("https://files.gospeljingle.com/uploads/music/2023/02/The_Weeknd_-_Reminder.mp3");
const endAudio =new Audio("")
const winGif = document.getElementById("winGIf");
const gameGrid=document.getElementsByClassName("game-grid");
const body = document.body;
body.addEventListener('click', () => {
    playAudio.play();
    winGif.style.display = "block";
})
let Turn = "X";
let gameOver = false; 

// function to change the turn between players
const changeTurn = () => {
    return Turn === "X" ? "O" : "X";
}
//Game Logic
//insert the value of turn in the clicked box if box is empty 

let boxes = document.getElementsByClassName("box");           //selected all the boxes from the grid
Array.from(boxes).forEach(element => {                        // applied forEach loop to each box in grid 
    let boxText = element.querySelector('.box-text');      // selecting the text of the element being selected
    element.addEventListener('click', () => {
        if (boxText.innerText === "") {
            boxText.innerText = Turn;
            Turn = changeTurn();
            checkWIn();
            if (!gameOver) {
                document.getElementById("turnTextInfo").innerText = "Turn of Player : " + `"${Turn}"`;
            }
        }

    })
})


//function for win condition
const checkWIn = () => {
    let boxes = document.getElementsByClassName("box"); 
    let boxTexts = document.getElementsByClassName("box-text");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach((e) => {
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) && (boxTexts[e[0]].innerText !== "")) {
            document.getElementById("turnTextInfo").innerText = boxTexts[e[0]].innerText + " : Player Won";
            gameOver = true;
            boxes[e[0]].style.backgroundColor="black";
            boxes[e[1]].style.backgroundColor="black";
            boxes[e[2]].style.backgroundColor="black";
            gameGrid[0].style.pointerEvents="none";
            window.navigator.vibrate(300);
        }
    })
}

function reload(){
    window.location.reload();
}
