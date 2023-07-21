let colors = require("colors")
const prompt = require("prompt-sync")({ sigint: true });

function rockPaperScissors(){

   
    console.log("Welcome to Rock, Paper, Scissors Game")
    
    // // //  Asking for player's input and declaring function prompt
    let playerChoice = prompt("What is your move? Options: 'rock, paper, scissors' ");
    
    
    // // // Assigning Computer'schoice 
    gameMoves = ['Rock','Paper','Scissors'];
    let computerChoice =gameMoves[Math.floor(Math.random() * gameMoves.length)];
    
    
    // Potential scenarios
    
    // Player / Computer
    // Rock + Paper = Computer wins
    // Rock + Scissors = Player wins
    // Rock + Rock = Tie 
    
    // Paper + rock = Player wins
    // Paper + Scissors = Computer wins
    // Paper + Paper = Tie
    
    
    // Scissors + Rock = Computer wins
    // Scissors + Paper = Player wins
    // Scissors + scissors = Tie
    
    // Assigning result
    
    let result = "";
    
    switch (playerChoice === "Rock") {
         case (computerChoice === "Paper"):
            result = "Computer wins :(".red;
            break;
        case (computerChoice === "Scissors"):
            result = "You win!".green;
            break;
        case (computerChoice === "Rock"):
            result = "It's tie!".yellow;
            break;   
    }
    
    switch (playerChoice === "Paper") {
        case (computerChoice === "Rock"):
           result = "You win!".green;
           break;
       case (computerChoice === "Scissors"):
           result = "Computer wins :(".red;
           break;
       case (computerChoice === "Paper"):
           result = "It's tie!".yellow;
           break;   
    }
    
    switch (playerChoice === "Scissors") {
        case (computerChoice === "Rock"):
           result = "Computer wins :(".red;
           break;
       case (computerChoice === "Scissors"):
           result = "It's a tie".yellow;
           break;
       case (computerChoice === "Paper"):
           result = "You win".green;
           break;   
    }
    
    
    //Displaying results to user
    console.log("Your move is " + playerChoice);
    console.log("Computer's move is " + computerChoice);
    console.log(result)
    
    
    recordsOfResults = prompt('Do you want to see the records of your results so far? y/n ')

    if (recordsOfResults === 'y'){
        let listResult = {wins: 0, loses: 0, ties:0};
        if (result === 'You win'){
            listResult.wins += 1;
        } else if (result === "Computer wins :(") {
            listResult.loses +=1;
        } else if (result === "It's a tie"){
            listResult.ties +=1
        }
        console.log(listResult)
    } 
    

}




do {
    rockPaperScissors();
    anotherGame = prompt("Let's try again? y/n ");
}
while (anotherGame === 'y')
