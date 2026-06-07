 
 

const PromptSync = require('prompt-sync');
const prompt = PromptSync();

 function gethumanchoice() {
     let choice = prompt("Your Turn :")
    return choice ;
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

let humanScore  = 0;
let computerScore = 0;


 
 function PlayRound(humanChoice, computerChoice) {
 
  
    if (
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissor" && computerChoice === "Paper") ||
        (humanChoice === "Rock" && computerChoice === "Scissor")
    ) {
        console.log("You win!");
        humanScore++;

    } else if (humanChoice === computerChoice) {
        console.log("It's a Tie");
    
    } else {
        console.log("You lose, Computer wins");
        computerScore++;
    }
    
    

}
PlayRound(gethumanchoice(), getcomputerchoice());
console.log(humanScore, computerScore);
