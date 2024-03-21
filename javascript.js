let points = 0;
let totalRounds = 0;
function getComputerChoice(){
    let choice="none";
    let num = Math.floor(Math.random()*3);
    if(num ==0){
        choice = "Rock";
    }
    else if(num ==1){
        choice="Paper"
    }
    else{
        choice="Scissors"
    }
    return choice;
}
function playRound(playerSelection, computerSelection){
    let message = "";
    let num = 0;
    if(playerSelection.toUpperCase() =="ROCK" && computerSelection=="Rock"){
        message="Both of you chose Rock, play again";
        totalRounds=totalRounds+1;
    }
    else if(playerSelection.toUpperCase()=="ROCK" && computerSelection=="Scissors"){
        message="You Won! Nice job.";
        points = points + 1;
        totalRounds=totalRounds+1;
    }
    else if(playerSelection.toUpperCase()=="ROCK" && computerSelection=="Paper"){
        message="You lost :( try again.";
        totalRounds=totalRounds+1;
    }
    else if(playerSelection.toUpperCase()=="SCISSORS" && computerSelection=="Paper"){
        message="You Won! Nice job.";
        points = points + 1;
        totalRounds=totalRounds+1;
    }
    else if(playerSelection.toUpperCase()=="SCISSORS" && computerSelection=="Rock"){
        message="You lost :( try again.";
        totalRounds=totalRounds+1;
    }
    else if(playerSelection.toUpperCase()=="SCISSORS" && computerSelection=="Scissors"){
        message="Both of you chose Scissors, play again.";
        totalRounds=totalRounds+1;
    }
    else if(playerSelection.toUpperCase()=="PAPER" && computerSelection=="Scissors"){
        message="You lost :( try again.";
        totalRounds=totalRounds+1;
    }
    else if(playerSelection.toUpperCase()=="PAPER" && computerSelection=="Rock"){
        message="You Won! Nice job.";
        points = points + 1;
        totalRounds=totalRounds+1;
    }
    else if(playerSelection.toUpperCase()=="PAPER" && computerSelection=="Paper"){
        message="Both of you chose Paper, play again";
        totalRounds=totalRounds+1   
        

    }

    return message;
}
function playGame(userChoice){
    
   // let userInput = prompt("Please enter your choice (Rock,Paper,Scissors): ");
    let computerChoice=getComputerChoice();
    let result=playRound(userChoice, computerChoice);

    return result;
}

const container = document.querySelector('div');
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button')
rock.innerText='Rock';
document.body.appendChild(rock);

paper.innerText='Paper';
document.body.appendChild(paper);
scissors.innerText='scissors';
document.body.appendChild(scissors);

const divvy = document.createElement('div');
let outcome = document.createElement('span');

//how do I change all my consoles.log into dom methods
const score = document.createElement('span');
rock.addEventListener('click',()=>{
    outcome.textContent=playGame("rock");
    divvy.appendChild(outcome);
 
});
paper.addEventListener('click',()=>{
    outcome.textContent= playGame("paper");
    divvy.appendChild(outcome);
});

scissors.addEventListener('click',()=>{
    outcome.textContent = playGame("scissors")
    divvy.appendChild(outcome);
});


document.body.appendChild(divvy)