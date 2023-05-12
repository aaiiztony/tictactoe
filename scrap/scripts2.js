let turn = "X";
let boxes = document.getElementsByClassName("box");
let gameOver = false;
let gameWon = false;

changeTurn=()=>{
   return turn === "X"?"O":"X";
}

checkWin=()=>{
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
}
})
}
const handleClick =()=>{
    let boxText = e.querySelector('.boxText');
    if (boxText.innerText === ''){
        boxText.innerText = turn;
        turn = changeTurn();
        document.getElementsByTagName("span")[0].innerText = turn;
        checkWin();
    }
    if (gameOver){
        return;
    }

}

Array.from(boxes).forEach(e=>{
    e.addEventListener('click', handleClick)
})

        