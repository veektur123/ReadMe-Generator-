console.log("hello")

const fs = require('fs');
const inquirer = require('inquirer');

  function badgeGenerator (badgeString){
    switch(badgeString) {
        case 'MIT License':
            return "![MIT License Badge](https://img.shields.io/badge/License-MIT-green.svg)"
        case 'Mozilla License':
            return "![Mozilla License Badge]((https://img.shields.io/badge/License-Mozilla-green.svg))"
        case 'Apache License':
            return "![Apache License Badge]((https://img.shields.io/badge/License-Apache-green.svg))"
        default:
            return ""
      }
  }
  function generateMarkdown (data){
    return `# ${data.name} ${badgeGenerator(data.license)}

## Table of Contents
[Description](#description)

[Installation Instructions](#installation-instructions)

[Usage Instructions](#usage-instructions)

[Test Instructions](#test-instructions)

[Contribution Guidelines](#contribution-guidelines)

[Contact Information](#contact-information)




### Description
${data.description}

### Installation Instructions
${data.installation}

### Usage Instructions
${data.usage}

### Contribution Guidelines
${data.contribution}

### Test Instructions
${data.test}

### Contact Information
Github : [${data.github}](https://github.com/${data.github}/)
E-Mail :${data.email}

### License
This project is licensed by: ${data.license}
    `
  }

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
        choices:['MIT License', 'Mozilla License', 'Apache License',],
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
    const generatedMarkdown = generateMarkdown(response)
    fs.writeFileSync("README.md",generatedMarkdown)
  })
