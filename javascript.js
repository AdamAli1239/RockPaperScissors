let points = 0;
let totalRounds = 0;
let computerPoints=0
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
        computerPoints=computerPoints+1
    }
    else if(playerSelection.toUpperCase()=="SCISSORS" && computerSelection=="Paper"){
        message="You Won! Nice job.";
        points = points + 1;
        totalRounds=totalRounds+1;
    }
    else if(playerSelection.toUpperCase()=="SCISSORS" && computerSelection=="Rock"){
        message="You lost :( try again.";
        totalRounds=totalRounds+1;
        computerPoints=computerPoints+1
    }
    else if(playerSelection.toUpperCase()=="SCISSORS" && computerSelection=="Scissors"){
        message="Both of you chose Scissors, play again.";
        totalRounds=totalRounds+1;
    }
    else if(playerSelection.toUpperCase()=="PAPER" && computerSelection=="Scissors"){
        message="You lost :( try again.";
        totalRounds=totalRounds+1;
        computerPoints=computerPoints+1
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
    
   
    let computerChoice=getComputerChoice();
    let result=playRound(userChoice, computerChoice);
// why does this if and else if work in here but not down at the bottom of this file?
if(points==5){
    alert("CONGRATS YOU WIN!!!!!");
}
else if(computerPoints==5){
    alert("You lost :( play again?");
}
    return result;
}


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
document.body.appendChild(divvy)

const orderList = document.createElement('ol')




divvy.appendChild(orderList)

const divForScore=document.createElement('div');
document.body.appendChild(divForScore)
let playerScore=document.createElement('span');
let computerScore=document.createElement('span');
playerScore.textContent="0 ";
computerScore.textContent="0 ";

divForScore.appendChild(playerScore)
divForScore.appendChild(computerScore)

rock.addEventListener('click',()=>{
    const outcome = document.createElement('span');
    outcome.textContent=playGame("rock");
    const item = document.createElement('li')
   item.appendChild(outcome)
   orderList.appendChild(item)
   if(outcome.textContent=="You Won! Nice job."){
    playerScore.textContent=parseInt(playerScore.textContent)+1;
    divForScore.appendChild(playerScore)
   }
   else if(outcome.textContent=="You lost :( try again."){
    computerScore.textContent=parseInt(computerScore.textContent)+1;
    divForScore.appendChild(computerScore)
   }


  

});
paper.addEventListener('click',()=>{
    const outcome = document.createElement('span');
    outcome.textContent= playGame("paper");
    const item = document.createElement('li')
    item.appendChild(outcome)
    orderList.appendChild(item)
    if(outcome.textContent=="You Won! Nice job."){
        playerScore.textContent=parseInt(playerScore.textContent)+1;
        divForScore.appendChild(playerScore)
       }
       else if(outcome.textContent=="You lost :( try again."){
        computerScore.textContent=parseInt(computerScore.textContent)+1;
        divForScore.appendChild(computerScore)
       }

});

scissors.addEventListener('click',()=>{
    const outcome = document.createElement('span');
    outcome.textContent = playGame("scissors")
    const item = document.createElement('li')
    item.appendChild(outcome)
    orderList.appendChild(item) 
    if(outcome.textContent=="You Won! Nice job."){
        playerScore.textContent=parseInt(playerScore.textContent)+1;
        divForScore.appendChild(playerScore)
       }
       else if(outcome.textContent=="You lost :( try again."){
        computerScore.textContent=parseInt(computerScore.textContent)+1 ;
        divForScore.appendChild(computerScore)
       }


});