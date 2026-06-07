const PromptSync = require('prompt-sync')();

function gethumanchoice() {
    let promptchoice = PromptSync('Your Turn: ');
    return promptchoice;
}

function getcomputerchoice() {
    let generate = Math.floor(Math.random() * 3);

    switch (generate) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissor";
    }
}

let humanScore = 0;
let computerScore = 0;

function PlayRound(humanChoice, computerChoice) {

    if (
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissor" && computerChoice === "Paper") ||
        (humanChoice === "Rock" && computerChoice === "Scissor")
    ) {
        console.log("You win!");
    }

    else if (humanChoice === computerChoice) {
        console.log("It's a Tie");
    }

    else {
        console.log("You lose, Computer wins");

}

PlayRound(gethumanchoice(), getcomputerchoice())};