// Global constants
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require("./lib/generateHTML");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// Questions array
function questions(){
inquirer
.prompt([
    {
        type: "input", 
        name: "name", 
        message: "What is employee's name?"
    },
    {
        type: "input", 
        name: "id", 
        message: "What is employee's ID?"
    },
    {
        type: "input", 
        name: "email", 
        message: "What is employee's email?"
    },
    {
        type: "list",
        name: "role",
        message: "What is employee's role?",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    }
])
.then((answers) => {
const createHTML = generateHTML(answers);
const fileName = "./dist/index.html";
fs.appendFile(fileName, createHTML, (error) => 
error ? console.error(error) : console.log("Saved!"));
})
}

function init() {
    questions();
}

init();