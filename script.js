let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".message");
let playerx = true;
let reset = document.querySelector(".reset");
let player1Winns = 0;
let points1 = document.querySelector(".pointsO");
let points2 = document.querySelector(".pointsX");
let player2Winns = 0;
let newGame = document.querySelector(".newGame");
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerx) {
      box.innerHTML = "O";
      box.style.color = "#6528F7";
      playerx = false;
    } else {
      box.innerHTML = "X";
      box.style.color = "red";
      playerx = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};
const enableBoxes = () => {
  boxes.forEach((box) => {
    box.innerHTML = "";
    msg.innerText = "Let's Play";
    box.disabled = false;
  });
};
reset.addEventListener("click", () => {
  points1.innerText = `0`;
  points2.innerText = `0`;
  player1Winns = 0;
  player2Winns = 0;
  enableBoxes();
});

newGame.addEventListener("click", () => {
  enableBoxes();
});
const checkwinner = () => {
  for (let patterns of winpattern) {
    let x = boxes[patterns[0]].innerText;
    let y = boxes[patterns[1]].innerText;
    let z = boxes[patterns[2]].innerText;
    if (x != "" && y != "" && z != "") {
      if (x === y && y === z) {
        showWinner(x);
      }
    }
  }
};

const showWinner = (winner) => {
  if (winner === "X") {
    player1Winns++;
  } else {
    player2Winns++;
  }
  msg.innerText = `Congratulations winner is ${winner}`;
  points2.innerText = `${player1Winns}`;
  points1.innerText = `${player2Winns}`;

  disableBoxes();
};
