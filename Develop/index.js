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
    type: 'list',
    message: 'Would you like a table of Contents?', //YES/NO
    choices: ["YES", "NO"],
    name: 'tableOfCon',
    },
    {
    type: 'input',
    message: 'What are the steps required to install this?',
    name: 'installation',
    },    
    {
    type: 'input',
    message: 'Provide instructions and examples for use:',
    name: 'usage',
    },
    {
    type: 'input',
    message: 'What does a user need to know when contributing to this repo?',
    name: 'contributing',
    },
    {
      type: 'input',
      message: 'What is your Github?',
      name: 'github',
      },
    {
    type: 'input',
    message: 'What is this testing?',
    name: 'tests',
    },    
    {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
    },
    {
      type: 'list',
      message: 'What license would you like to use?',
      choices: ["MIT", "Apache 2.0", "Mozilla Public 2.0", "Boost Software 1.0", "GNU AGPLv3"],
      name: 'license',
    }, 
    {
    type: 'list',
    message: 'Please choose the corresponding badge for your license:',
    choices: ['![MIT](https://img.shields.io/badge/MIT-License-brightgreen)', '![Apache 2.0](https://img.shields.io/badge/Apache%202.0-License-red)', '![Mozilla Public 2.0](https://img.shields.io/badge/Mozilla%20Public%202.0-License-blue)', '![Boost Software 1.0](https://img.shields.io/badge/Boost%20Software%201.0-License-yellow)', '![GNU AGPLv3](https://img.shields.io/badge/GNU%20AGPLv3-License-lightgrey)'],
    name: 'badge',
    }, 
  ])

.then((data) => {

  function checktableOfCon () {
if (data.tableOfCon === "YES") {
  return (`## Table of Contents:  \n 
  - [Contributing](#Contributing)\n
  - [Installation](#Installation) \n
  - [Usage](#Usage) \n
  - [License](#License)\n`)
} else {
  return ``
}
}

function licenseDesc () {
  if (data.license === "MIT") {
    return ("The primary terms and conditions of the MIT license are to grant permissions and indemnify developers for future use. Specifically, it grants any person who obtains a copy of the software and associated files the right to use, copy, modify, merge, distribute, publish, sublicense, and sell copies of the software.")
  } else if (data.license === "Apache 2.0") {
    return ("Under this license, users can: Use the code commercially: Companies can include the licensed code in proprietary software that they then sell to customers.You can do what you like with the software, as long as you include the required notices. This permissive license contains a patent license from the contributors of the code.")
  } else if (data.license === "Mozilla Public 2.0") {
    return ("The Mozilla Public License (MPL) is a free and open-source software license developed and maintained by the Mozilla Foundation.[9] It is a weak copyleft license, characterized as a middle ground between permissive software licenses and the GNU General Public License (GPL), that seeks to balance the concerns of proprietary and open-source developers.[10] As such, it allows the integration of MPL-licensed code into proprietary codebases, as long as the MPL-licensed components remain accessible under the terms of the MPL.")
  } else if (data.license === "Boost Software 1.0" ) {
    return ("THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.")
  } else if (data.license === "GNU AGPLv3" ) {
    return ("The AGPL License permits users of the licensed code to: Use the code for commercial purposes: Like both GPL v2 and GPL v3, the AGPL imposes no conditions on using the code in software that's sold commercially.")
  }
}
  const md = `

# Title: ${data.title}

\n ${data.badge}

# Description:  \n ${data.description}

${checktableOfCon()}
  
## Test Instructions: \n ${data.tests}
  
## Questions: \n
Report an issue at my github or email me: \n
[Github](https://github.com/${data.github}) \n
${data.email}

### Contributing: \n ${data.contributing} \n


### Installation: \n ${data.installation}

### Usage: \n ${data.usage}

### License: \n ${data.license} 
\n ${licenseDesc()}
`

console.log('Response:', data);
fs.writeFile("README.md", md, (err) => {
err ? console.error(err) : console.log('Your README has been written!');

})})
