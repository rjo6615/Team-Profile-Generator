// Global constants
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require("./lib/generateHTML");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const teamBuild = [];

// Questions array
function addManager(){
 return inquirer.prompt([
    {
        type: "input", 
        name: "name", 
        message: "What is the managers name?"
    },
    {
        type: "input", 
        name: "id", 
        message: "What is the managers ID?"
    },
    {
        type: "input", 
        name: "email", 
        message: "What is the managers email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the managers office number?"
    }
])
.then(managerInfo => {
    const {name, id, email, officeNumber} = managerInfo;
    const manager = new Manager(name, id, email, officeNumber);
    teamBuild.push(manager);
    console.log(manager);
})
};

function addEmployee(){
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Choose employee's role:",
            choices: ["Intern", "Engineer"]
        },
        {
            type: "input", 
            name: "name", 
            message: "What is the employees name?"
        },
        {
            type: "input", 
            name: "id", 
            message: "What is the employees ID?"
        },
        {
            type: "input", 
            name: "email", 
            message: "What is the employees email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the interns school?",
            when: (input) => input.role === "Intern",
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineers github?",
            when: (input) => input.role === "Engineer"
        },
        {
            type: "confirm",
            name: "addEmployeeCheck",
            message: "Would you like to add another employee?",
            default: false
        }
    ])
    .then(employeeInfo => {
        let {name, id, email, role, school, github, addEmployeeCheck} = employeeInfo;
        let employee;

        if (role === "Intern") {
            employee = new Intern(name, id, email, school);
        } else if (role === "Engineer") {
            employee = new Engineer(name, id, email, gitub);
        }
        teamBuild.push(employee);

        if (addEmployeeCheck) {
            return addEmployee(teamBuild);
        } else {
            return teamBuild;
        }
    })
}
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Team profile created successfully!")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamBuild => {
    return generateHTML(teamBuild);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });