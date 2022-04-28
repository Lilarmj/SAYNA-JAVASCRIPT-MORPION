const items = document.getElementsByClassName('grid-item');

let board = ["", "", "", "", "", "", "", "", ""];
let activeGame = true
let activePlayer = "X"

var chooser = document.querySelector('layer');
var clicked = 0;
var choice = 9;
var player = {
  name: 'Player 1',
  team: '',
  arr: []
};
  
var cpu = {
  name: 'Computer',
  team: '',
  arr: []
};

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const win = () => "Le joueur ${activePlayer} a gagné"
const egalite = () => "Match nul"
const playerTurn = () => "C'est au tour du joueur ${activePlayer}"

statut.innerHTML = playerTurn()

document.querySelectorAll(".grid-container").forEach(item => item.addEventListener("click", choiseCase))
document.querySelector("reset").addEventListener("click", reset)

function choiseCase(){
  let indexItem = this.id;
  let cases = document.getElementById(indexItem)

  if(board[[...items].indexOf(this)]!== "" || !activeGame){
    return
  }

board[[...items.indexOf(this)]] = activePlayer
cases.innerHTML = activePlayer

verifWinner()
}

function verifWinner(){
  let winnerTurn = false
  for(let winningCondition of winningConditions) {
    let val1 = board[winningCondition[0]]
    let val2 = board[winningCondition[1]]
    let val3 = board[winningCondition[2]]

    if(val1 === "" || val2 === "" || val3 === ""){
      continue
    }

    if(val1 === val2 && val2 === val3){
      winnerTurn = true
      break
    }
  }

  if(winnerTurn) {
    statut.innerHTML = win()
    activeGame = false
    return
  }

  if(!board.includes("")){
    statut.innerHTML = egalite()
    activeGame = false
    return
  }

  activePlayer = activePlayer === "X" ? "O" : "X"
  statut.innerHTML = playerTurn()
}

function reset(){
  activePlayer = ""
  activeGame = true
  board = ["", "", "", "", "", "", "", "", ""]
  statut.innerHTML = playerTurn()
  document.querySelectorAll(".grid-container").forEach(item => item.innerHTML = "")
}
