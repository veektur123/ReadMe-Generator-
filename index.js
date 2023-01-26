console.log("hello")

const fs = require('fs');
const inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'name',
        message: 'What is this project called?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Enter project name.');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a quick description of what this project does.',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Describe your project.');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps for instalation?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Provide installation instructions.');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the intended usage of this project?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Provide the intended purpose of this project.');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the guidelines if users want to contribute to this project?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('List contribution guidelines.');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test intructions for this project?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Provide test instructions.');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Provide your Github username.');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Provide your email address.');
                return false; 
            }
        }
    },
    {
        type: 'list',
        list: 'Which license should your project use?',
        name: 'license',
        choices:['N/A','MIT License', 'Mozilla License', 'Apache License','GNU License', 'Creative Commons Zero License'],
        validate: license => {
            if(license) {
            return true
            }else {
            console.log('Choose a license.'); 
            return false}
        }
    },
  ])
  
  .then((response) => {
    // Use user feedback for... whatever!!
  })
