import inquirer from "inquirer";
import chalk from "chalk";

const choices = ["Rock", "Paper", "Scissors"];

// Prompt the user to select their choice
inquirer
  .prompt([
    {
      type: "list",
      name: "player1",
      message: "Player 1, choose your move:",
      choices: choices,
    },
    {
      type: "list",
      name: "player2",
      message: "Player 2, choose your move:",
      choices: choices,
    },
  ])
  .then((answers) => {
    // Get player choices from user input
    const player1 = answers.player1;
    const player2 = answers.player2;

    // Determine the winner based on the choices
    if (player1 === player2) {
      console.log(chalk.yellow("This game is a tie"));
    } else if (
      (player1 === "Rock" && player2 === "Scissors") ||
      (player1 === "Scissors" && player2 === "Paper") ||
      (player1 === "Paper" && player2 === "Rock")
    ) {
      console.log(chalk.green("Player 1 wins"));
    } else {
      console.log(chalk.red("Player 2 wins"));
    }
  })
  .catch((error) => {
    console.log("Error occurred:", error);
  });
