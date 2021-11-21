// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    message: "Please provide a Title that you would like for the project?",
    name: "title",
  },
  {
    type: "input",
    name: "name",
    message: "What is the Creators Name?",
  },
  {
    type: "input",
    message:
      "Please write a short Description regarding what the application will do?",
    name: "description",
  },
  {
    type: "input",
    message:
      "Provide description on how the user will utilize this application:",
    name: "Usage",
  },
  {
    type: "list",
    message: "What license will you require?",
    name: "license",
    choices: [
      "MIT",
      "IBM",
      "ISC",
      "Mozilla",
      "Apache 2.0",
      "Boost",
      "BSD",
      "None",
    ],
  },
  {
    type: "input",
    message:
      "Are there any contributors to this project? If so please provide their names?",
    name: "contributor",
  },
  {
    type: "input",
    message: "Please provide your email address ",
    name: "email",
  },
  {
    type: "input",
    message: "Please provide your repository link ",
    name: "repository",
  },
  {
    type: "input",
    message: "If there is a screenshot please provide link to screenshot",
    name: "screenshot",
  },
  {
    type: "input",
    message: "Are there any links to an active URL",
    name:"activeURL"
  },

];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFileSync("./output/README.md", generateMarkdown(data), "utf8");
  console.log("done");
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions) // Write the user response to a file by chaining the below callback method to the prompt above.
    .then(function (data) {
      writeToFile(data);
    });
}

// Function call to initialize app
init();
