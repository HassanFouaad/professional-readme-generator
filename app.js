const fs = require('fs'); // file system handling
const inquirer = require('inquirer'); // prompt generator
// generateReadMe file to be then written by the utils
const generateReadMe =  require('./src/readme-template.js'); 



const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (Required)',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is yoru email address (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your email address');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project (Required)',
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('Please enter your email address');
                return false;
              }
            }
          },
          {
            type: 'checkbox',
            name: 'licenses',
            message: 'What kind of license should your project have? (Check all that apply)',
            //choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
            choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib']
          },
          {
            type: 'input',
            name: 'commandInstall',
            message: 'What command should be run to install dependencies?'
          },
          {
            type: 'input',
            name: 'commandTest',
            message: 'What command should be run to run tests?'
          },
          {
            type: 'input',
            name: 'repoDesc',
            message: 'What does the user need to know about using the repo?'
          },
          {
            type: 'input',
            name: 'contrDesc',
            message: 'What does the user need to know about contributing to the repo?'
          }
    ]);
}

promptUser()
    .then(answers => {
        return generateReadMe(answers);
    })
    .then(readmeFile => {
        console.log(readmeFile);
    })
    .catch(err => {
    console.log(err);
    });