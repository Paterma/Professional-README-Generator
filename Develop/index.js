// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {type: 'input',
    message: 'What is the name of your project?',
    name: 'title',
    },
    {
    type: 'input',
    message: 'What is the description of your project?',
    name: 'description',
    },
    {
    type: 'checkbox',
    message: 'Would you like a table of Contents?', //YES/NO
    // choices: [YES, NO],
    name: 'tableOfCon',
    },
    {
    type: 'input',
    message: 'Please choose from the instalation options:',
  
    name: 'installation',
    },    
    {
    type: 'input',
    message: 'Re-enter password to confirm:',
    name: 'usage',
    },
    {
    type: 'list',
    message: 'What is the description of your project?',
    choices: ['![MIT](https://img.shields.io/badge/MIT-License-brightgreen)', '![Apache 2.0](https://img.shields.io/badge/Apache%202.0-License-red)', '![Mozilla Public 2.0](https://img.shields.io/badge/Mozilla%20Public%202.0-License-blue)', '![Boost Software 1.0](https://img.shields.io/badge/Boost%20Software%201.0-License-yellow)', '![GNU AGPLv3](https://img.shields.io/badge/GNU%20AGPLv3-License-lightgrey)'],
    name: 'license',
    },
    {
    type: 'input',
    message: 'Who is contributing to this?',
    name: 'contributing',
    },
    {
    type: 'input',
    message: 'What is this testing?',
    name: 'tests',
    },    
    {
    type: 'input',
    message: 'Questions?',
    name: 'questions',
    },
  ])

.then((data) => {
  const md = `
# Title:  \n ${data.title}

# Desciption:  \n ${data.description}
  
## Table of Contents:  \n ${data.tableOfCon}
  
## Contributing: \n ${data.contributing}
  
## Test Instructions: \n ${data.tests}
  
## Questions: \n ${data.questions}

### Installation: \n ${data.installation}

### Usage: \n ${data.usage}

### License:  \n ${data.license}
  `

console.log('Response:', data);
fs.writeFile("README.md", md, (err) => {
err ? console.error(err) : console.log('Your README has been written!');

})})
