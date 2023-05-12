let boxText = document.querySelectorAll('.boxText');
console.log("Welcome");
let turn = "X";
let gameOver = false;
let gameWon = false;

// Generate random values for the red, green, and blue components of the color
const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);

// Create a string representing the RGB value of the color
const randomColor = `rgb(${r}, ${g}, ${b})`;

//Change Turn of User
const changeTurn = () => {
  return turn === "X"? "O":"X";
}

//Check for a win
const checkWin = () => {
  let boxText = document.querySelectorAll('.boxText');
  let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
  ]
  wins.forEach(e =>{
    if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")){
      document.querySelector("p").innerText ="Voila " + boxText[e[0]].innerText + " won!";
      gameOver = true;
      gameWon= true;
      //even after defining winner, the game still runs ;(
      }
      // document.querySelector("p").innerText = "The Game is tied !"
    })
  }
  
  //Game Logic
let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach(element => {
  let boxText = element.querySelector('.boxText');
  element.addEventListener('click', handleClick);
  function handleClick() {
    if (gameWon) {
      return;
    }
    if(boxText.innerText === ''){
      boxText.innerText = turn;
      document.querySelector(".main").style.background = randomColor;
      turn = changeTurn();
      checkWin();
      document.getElementsByTagName("span")[0].innerText = turn;
      // if(gameOver){
      //   element.addEventListener('click', handleClick);
      // }
      // else {
      //   document.getElementsByTagName("span")[0].innerText = turn;
      // }
    }
  }
})

// handle game logic here

// Set the background color of the page
// document.querySelector(".main").style.background = randomColor;

resetGame = ()=>{
  let boxText = document.querySelectorAll(".boxText");
  Array.from(boxText).forEach(e =>{
    e.innerText = "";
  })
  turn = "X";
  gameOver = false;
  gameWon = false;
  document.querySelector("p").innerHTML = "<p>Its <span>X</span>'s Turn</p>";
  document.querySelector(".main").style.background =  "rgba(7, 102, 75, 0.78)";
}
document.querySelector('#rst').addEventListener('click', resetGame);

// Array.from(boxes).forEach(element => {
//   let boxText = element.querySelector('.boxText');
//   element.addEventListener('click', handleClick);
//   function handleClick() {
//     if (gameWon) {
//       return;
//     }
//     if(boxText.innerText === ''){
//       boxText.innerText = turn;
//       document.querySelector(".main").style.background = randomColor;
//       turn = changeTurn();
//       checkWin();
//       if(gameOver){
//         element.removeEventListener('click', handleClick);
//       }
//       else {
//         document.getElementsByTagName("span")[0].innerText = turn;
//       }
//     }
//   }
// })