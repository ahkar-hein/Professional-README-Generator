// Include package need for this application.
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Questions array to ask the user.
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
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What commend should be run to run test?',
        default: 'npm test',
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

// This function for write the readme file.
function writeToFile(fileName, data) {
    // Generate the readme file by using fs package.
    fs.writeFile(fileName, data, (err) => {
        // if condition for err.
        if (err) {
            console.error(err);
        } else {
            console.log('README.md generated successfully!');
        }
    });
}

// This functon for initialize the application.
function init() {
    // prompt the question that is from the question array by using inquirer package.
    inquirer.prompt(questions)
        .then((answers) => {
            // Destructure the 'answers' object to extract individual properties
            const { username, email, projectName, description, license, install, test, usage, contributing } = answers;
            // Create a 'data' object to store the extracted properties
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
            // execute the writeTofile function.
            writeToFile('README.md', generateMarkdown(data));
    })
}

// Function call to initialize app
init();
