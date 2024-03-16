import inquirer from "inquirer";
import chalk from "chalk";

let player1: string = "Scissor"
let player2: string = "Rock"

if(player1 === player2){
    console.log(chalk.yellow("this game is tie"))
} else if ((player1 === "Rock" && player2 === "Scissor") ||
(player1 === "Scissor" && player2 === "Paper")||
(player1 === "Paper" && player2 === "Rock")) {
    console.log(chalk.green("player1 win"))
} else {
    console.log(chalk.red("player2 win"))
}
