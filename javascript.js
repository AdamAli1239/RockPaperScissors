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
    if(playerSelection.toUpperCase()=="ROCK" && computerSelection=="Rock"){
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
function playGame(){
    
    let userInput = prompt("Please enter your choice (Rock,Paper,Scissors): ");
    let computerChoice=getComputerChoice();
    let result=playRound(userInput, computerChoice);

    return result;
}
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');

const divide = document.createElement('div');

//how do I change all my consoles.log into dom methods

rock.onclick=playRound;
paper.onclick=playRound;
scissors.onclick=playRound;