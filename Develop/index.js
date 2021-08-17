// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("../utils/generateMarkdown");

// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    message: "Please provide a Title that you would like for the project?",
    name: "title",
  },
  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
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
      "Does this project require the user to install the application? if so, please provide instructions. If not please state that the application will not require installation.",
    name: "install",
  },
  {
    type: "input",
    message:
      "Provide description on how the user will utilize this application:",
    name: "Usage",
  },
  {
    type: "input", //look what is meant regarding table of content
    message: "Please provide a table of content regarding you project",
    name: "table of content",
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
    name: "contribute",
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions) // Write the user response to a file by chaining the below callback method to the prompt above.
    .then(function (data) {
      console.log(data);

      const woot = generateMarkdown(data);
      console.log(woot);
    });
}

// Function call to initialize app
init();
