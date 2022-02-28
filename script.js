let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Generating a new secret target number
function generateTarget() {
    let targetNumber = Math.floor(Math.random()*10);
    return targetNumber;
};


//Determine which guess is closest to target number
//Smallest value between guess and target is closest

function compareGuesses(userGuess,computerGuess,targetNumber){
    const userValue = getAbsoluteDistance(userGuess,targetNumber)
    const computerValue = getAbsoluteDistance(computerGuess,targetNumber);
    alertMessage(userGuess);

    if (userValue < computerValue) {
        return true;
    } else if (userValue > computerValue) {
        return false;
    } else {
        return true;
    }
}

//Increase the winners score after each round
function updateScore(winner){
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    } else {
        return 'Invalid winner'
    }
};


//Update round number after each game
function advanceRound(){
    currentRoundNumber += 1
};


const getAbsoluteDistance = (a1, a2) => {
    return Math.abs(a1-a2);
}

// Check whether user guess is within range

const alertMessage = (userGuess) => {
    if (userGuess > 9 || userGuess <0) {
        alert('Guess must be between 0 and 9.');
    }
}