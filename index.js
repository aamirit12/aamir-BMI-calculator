#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your Body weight in Kg", type: "number", name: "weightInKg" },
    { message: "Enter your height in meters", type: "number", name: "heightInKg" },
]);
const bmi = answer.weightInKg / (answer.heightInKg * answer.heightInKg);
console.log(`YOUR BMI IS ${bmi}`);
