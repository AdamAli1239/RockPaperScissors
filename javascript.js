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
    if(totalRounds==5){
        if(points>2){
            alert("You won!!! Congrats!");
        }
        else if(points <2){
            alert("you lost, don't worry you'll get em next time.");
        }
        else if(points==2){
            alert("Tie game. Wanna play again?");
        }
    }
    return result;
}
console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());