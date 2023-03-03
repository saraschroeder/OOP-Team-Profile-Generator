const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const fs = require('fs');
const inquirer = require('inquirer');

const teamArray = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Who is the manager of the team?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter manager's ID.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ("Please enter manager's ID.")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter an email.")
                    return false;
                }
            }
        },
        {
            
        }
    ])
}