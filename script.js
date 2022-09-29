function getComputerChoice() {
    let strings = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random()*strings.length);
    let stringRandom = strings[random];
    return stringRandom;
}

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

rock.addEventListener("click", function(e){ 
    if (computerSelection === 'rock') {
        console.log('1')
    }
    else if (computerSelection === 'paper') {
        console.log('1')
    }
    else if (computerSelection === 'scissors') {
        console.log('1')
    }
    
    const computerSelection = getComputerChoice();

    }
 );
