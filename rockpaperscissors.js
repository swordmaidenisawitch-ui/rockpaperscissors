 
 

const PromptSync = require('prompt-sync');
const prompt = PromptSync();

 function gethumanchoice() {
     let choice = prompt("Your Turn :")
    
    return choice.charAt(0).toUpperCase()+choice.slice(1).toLowerCase() ;
 }

function getcomputerchoice () {
    
    let generate = Math.floor(Math.random() * 3 )//, function body:return string values likr rock paper  scissor
 switch (generate ) {
    case 0:
          console.log("Computer: Rock");
        return "Rock";
        
        case 1:
            console.log("Computer: Paper");
            return "Paper";
         
            case 2:
                console.log("Computer: Scissor");
                return "Scissor";
            
    }
    
}


// loop the play round till 5 and increase the score too based on who wins
   let humanScore  = 0;
let computerScore = 0
    
 function PlayRound(humanChoice, computerChoice) {
  
 
    if (
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissor" && computerChoice === "Paper") ||
        (humanChoice === "Rock" && computerChoice === "Scissor")
    ) {
        console.log("You win!");
       humanScore++;
        console.log("Human score:", humanScore);

    } else if (humanChoice === computerChoice) {
        console.log("It's a Tie");
    
    } else {
        console.log("You lose, Computer wins");
    computerScore++;
        console.log("Computer:", computerScore)
    }
}
    

PlayRound(gethumanchoice(), getcomputerchoice());

// loop PlayRound till 5 times
// and increase score till 5
//increase score whoever wins and till 5 

function PlayGame (){
   
    for (let  round = 0; round < 4; PlayRound(gethumanchoice(), getcomputerchoice()) ){
     round++;
    }
}
PlayGame();
//console.log(humanScore, computerScore);