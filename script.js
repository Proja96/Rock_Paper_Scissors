function getComputerChoice() {
    let strings = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random()*strings.length);
    let stringRandom = strings[random];
    return stringRandom;
}

let player = 0;
let pc = 0;

function playRound(playerSelection, computerSelection) {
    if (player === 5) {
        alert('You win');
    }
    else if (pc === 5) {
        alert('YOu lose');
    }
    else{
        if (playerSelection === 'rock' && computerSelection === 'rock') {
             player += 1;
             pc += 1;
             
        }
        else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
             pc += 1;
             console.log(player, pc);
        }
        else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
             player += 1;
             console.log(player, pc);
        }
        else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
             player += 1;
             console.log(player, pc);
        }
        else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
             player += 1;
             pc += 1;
             console.log(player, pc);
        }
        else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
             pc += 1;
             console.log(player, pc);
        }
        else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
             pc += 1;
             console.log(player, pc);
        }
        else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
             player += 1;
             console.log(player, pc);
        }
        else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') {
             player += 1;
             pc += 1;
             console.log(player, pc);
        }
    }
 };
let rock = document.getElementById('rock');
rock.addEventListener("click", () => {
    playRound('rock', getComputerChoice());
    div.textContent = 'player = ' + player + ' computer = ' + pc;
});

let paper = document.getElementById('paper');
paper.addEventListener("click", () => {
    playRound('paper', getComputerChoice());
    div.textContent = 'player = ' + player + ' computer = ' + pc;
});

let scissors = document.getElementById('scissors');
scissors.addEventListener("click", () => {
    playRound('scissors', getComputerChoice());
    div.textContent = 'player = ' + player + ' computer = ' + pc;
});

let div = document.getElementById('cover');
div.textContent = 'player = ' + player + ' computer = ' + pc;


