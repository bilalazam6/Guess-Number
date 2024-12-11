
// Generate random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random Number (for testing):", randomNumber); // Remove this line in production

// Set up a variable to keep track of the number of guesses
let attempts = 0;

function makeGuess() {
    // Get user's number from input and convert it into an integer
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const message = document.getElementById("message");

    // Check if the input is valid
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    // Increment the number of attempts
    attempts++;

    // Check the guess and provide feedback
    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed it right in ${attempts} attempts.`;
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try a higher number.";
    } else {
        message.textContent = "Too high! Try a lower number.";
    }
}
