#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n \t Google Currency Converter \n"));

// Define the list of currencies and thier exchange rates
let exchange_rate: any ={
    "USD": 1, // BASE CURRENCY
    "EUR": 0.9, // EUROPIAN CURRENCY
    "JYP": 113, // JAPENES CURRENCY
    "CAD": 1.3, // CANADIAN DOLLAR
    "AUD": 1.65, // AUSTRAILIAN DOLLAR
    "PKR": 277.70, // PAKISTANI RUPEES
    // Add more currencies  and their exchange rates here
}
// Promt the user to select currencies to convert from and to
let user_Answer = await inquirer.prompt([
    {
        name:"from_currency",
        type:"list",
        message:"Select the currency to convert from",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]

    },
    {
        name:"to_currency",
        type:"list",
        message:"Select the currency to convert into",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"amount",
        type:"number",
        message:"Enter the amount to convert "
    }
]);
//perform currency conversion by using formula
let from_amount = exchange_rate [user_Answer.from_currency];
let to_amount = exchange_rate [user_Answer.to_currency];
let amount = user_Answer.amount;

// Formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display the converted amount 
console.log(`converted Amount= ${chalk.green(converted_amount.toFixed(2))}` );



