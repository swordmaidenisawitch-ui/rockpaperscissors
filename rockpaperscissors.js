 
 //one input from user, another input from computer(random)
 // get input from computer randomly from rock paper scissor
 //get input from user
// same timing

const PromptSync = require('prompt-sync')();



 
 function gethumanchoice() {
      let promptchoice = PromptSync(' Your Turn : ')
      return promptchoice;
}
console.log(gethumanchoice());

function getcomputerchoice () {
    let generate = Math.floor(Math.random() * 3 )//, function body:return string values likr rock paper  scissor
    switch (generate) {
    case 0:
        return "Rock";
        break;
        case 1:
            return "Paper";
            break;
            case 2:
                return "Scissor";
                break;
     
    }
      
}
console.log(getcomputerchoice());


