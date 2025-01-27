"use strict";

// 1. Set up a gameRunning boolean to control the game loop
let gameRunning = true;

while (gameRunning) {
  // 2. Generate a random number between 0 and 100
  const targetNumber = Math.floor(Math.random() * 101);

  console.log("Target Number (for debugging):", targetNumber); // Optional: Debugging info

  let guessedCorrectly = false;

  // 3. Use a while loop to prompt the user until they guess correctly
  while (!guessedCorrectly) {
    // 4. Ask the user to guess a number
    const userGuess = prompt("Guess a number between 0 and 100:");

    // If the user cancels the prompt (e.g., clicks "Cancel")
    if (userGuess === null) {
      alert("Game exited. Thanks for playing!");
      guessedCorrectly = true;
      gameRunning = false;
      break;
    }

    // Parse the user's guess into a number
    const guess = Number(userGuess);

    // Check if the input is a valid number
    if (isNaN(guess)) {
      console.log("Please enter a valid number.");
      continue;
    }

    // 5. Compare the user's guess with the target number
    if (guess === targetNumber) {
      console.log("Congratulations! You guessed the correct number.");
      alert(`Congratulations! You guessed the correct number: ${targetNumber}`);
      guessedCorrectly = true;
      gameRunning = false; // End the game loop after a correct guess
    } else if (guess < targetNumber) {
      console.log("Too low! Try guessing higher.");
    } else {
      console.log("Too high! Try guessing lower.");
    }
  }
}

