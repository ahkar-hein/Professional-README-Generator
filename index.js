// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'install',
        message: 'What commend should be run to install dependecies?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What commend should be run to run test?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What dose the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does user need to know about the contributing to the repo',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md generated successfully!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const { username, email, projectName, description, license, install, test, usage, contributing } = answers;
            const data = {
                username: username,
                email: email,
                projectName: projectName,
                description: description,
                license: license,
                install: install,
                test: test,
                usage: usage,
                contributing: contributing,
            }
            writeToFile('README1.md', generateMarkdown(data));
    })
    
}

// Function call to initialize app
init();
