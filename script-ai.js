let turn = "X";
let boxes = document.getElementsByClassName("box");
let rst = document.getElementById('rst');
let gameOver = false;
let gameWon = false;
let moves = 0;
let gameTie = false;
const theme =  document.getElementById('theme');

theme.addEventListener("click", ()=>{
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let a = Math.floor(Math.random() * 255);
  let randomColor = `rgba(${r}, ${g}, ${b}, ${a})`;
  document.body.style.background = randomColor;
  // document.querySelector(".main").style.background = randomColor;

})
 
changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

checkWin = () => {
  let boxText = document.querySelectorAll(".boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxText[e[0]].innerText === boxText[e[1]].innerText &&
      boxText[e[2]].innerText === boxText[e[1]].innerText &&
      boxText[e[0]].innerText !== ""
    ) {
      document.querySelector("p").innerText =
        "Voila " + boxText[e[0]].innerText + " won!";
      gameOver = true;
      gameWon = true;
      playWinTheme()
    }
  }
  )};

const handleClick = (boxText) => {
  if (gameWon) {
    return;
  }
  if (boxText.innerText === "") {
    playAudio();
    boxText.innerText = turn;
    turn = changeTurn();
    document.getElementsByTagName("span")[1].innerText = turn;
    checkWin();
  }
  if (gameOver) {
    boxes.forEach((box) => box.removeEventListener("click", handleClick));

  }
  if (gameOver && !gameWon){
    document.querySelector("p").innerText = "THE GAME IS TIED!";
  }
  moves++;
};

const playAudio = () => {
  let audio = document.getElementById("audio");
  audio.play();
}

const playWinTheme = () =>{
  let gameWin = document.getElementById("gamewin");
  gameWin.play();
}

Array.from(boxes).forEach((e) => {
  e.addEventListener("click", () => {
  handleClick(e.querySelector(".boxText"));
});
});

reset =()=>{
  Array.from(boxes).forEach(box=>{
    let boxText = box.querySelector('.boxText');
    boxText.innerText = '';
  })
  document.querySelector("p").innerHTML = "<p>Its <span>X</span>'s Turn</p>";
  turn = "X";
  gameOver = false;
  gameWon = false;
}
rst.addEventListener('click', reset);