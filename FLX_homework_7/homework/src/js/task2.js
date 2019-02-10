const welcomeMessage = "Do you want to play a game?";
const nonInterestedMessage = "You did not become a millionaire, but can.";
const maxAttempts = 3;
const defaultMinNumber = 0;
const defaultMaxNumber = 5;
const defaultMaxAttemptPrize = 10;

while (confirm(welcomeMessage)) {

    let totalPrize = 0;
    let currentMaxNumber = defaultMaxNumber;
    let secretNumber = Math.floor(Math.random() * (currentMaxNumber - defaultMinNumber + 1)) + defaultMinNumber;
    let attemptsLeft = maxAttempts;
    let currentMaxAttemptPrize = defaultMaxAttemptPrize;
    let currentAttemptPrize = currentMaxAttemptPrize;

    while (attemptsLeft > 0) {

        let gameInfo = "Enter a number from " + defaultMinNumber + " to " + currentMaxNumber + "\r\n";
        gameInfo += "Attempts left: " + attemptsLeft + "\r\n";
        gameInfo += "Total prize: " + totalPrize + "\r\n";
        gameInfo += "Possible prize on current attempt: " + currentAttemptPrize + "\r\n";
        const userNumber = prompt(gameInfo, '');
        if (+userNumber === secretNumber) {
            totalPrize = totalPrize + currentAttemptPrize;
            let congratulationMessage = "Congratulation! Your prize is: " + totalPrize + ". Do you want to continue?";
            if (confirm(congratulationMessage)) {
                currentMaxNumber = currentMaxNumber * 2;
                secretNumber = Math.floor(Math.random() * (currentMaxNumber - defaultMinNumber + 1)) + defaultMinNumber;
                attemptsLeft = maxAttempts;
                currentMaxAttemptPrize = currentMaxAttemptPrize * 3;
                currentAttemptPrize = currentMaxAttemptPrize;
            } else {
                break;
            }
        } else {
            attemptsLeft = attemptsLeft - 1;
            currentAttemptPrize = Math.floor(currentAttemptPrize / 2);
        }
    }
    let gameOverMessage = "Thank you for a game. Your prize is: " + totalPrize;
    alert(gameOverMessage);
}
alert(nonInterestedMessage);