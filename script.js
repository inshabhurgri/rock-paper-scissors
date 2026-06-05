let userScore = 0;
let computerScore = 0;

function play(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === computerChoice) {
        result = "Draw!";
    } 
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win!";
        userScore++;
    } 
    else {
        result = "You Lose!";
        computerScore++;
    }

    document.getElementById("result").innerText =
        `You chose ${userChoice}, Computer chose ${computerChoice} → ${result}`;

    document.getElementById("score").innerText =
        `You: ${userScore} | Computer: ${computerScore}`;
}
