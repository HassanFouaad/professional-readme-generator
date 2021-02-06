const fs = require('fs'); // file system handling
const inquirer = require('inquirer'); // prompt generator
// imported module generateReadMe file to be then written by the utils 
const generateReadMe =  require('./src/readme-template.js'); 
// imported module writeFile to write to dist or distribution folder.
const {writeFile} = require('./utils/generate-readme-md.js');



const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'gitHubUser',
            message: 'Please enter your GitHub username',
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: 'Please enter your email address',
        },
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your project Title?  e.g Professional README.md generator (Required)',
            validate: projectTitleInput => {
              if (projectTitleInput) {
                return true;
              } else {
                console.log('Please enter your Project Title');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'desc',
            message: 'What is your project description (Required)',
            validate: descInput => {
              if (descInput) {
                return true;
              } else {
                console.log('Please enter your Project Description');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'webAddress',
            message: 'Please enter your deployed application URL if available',
          },
          {
            type: 'input',
            name: 'featuresGif',
            message: 'Please include a gif video (use name of gif) showcasing all your features if applicable? e.g new-feature',
          },
          {
            type: 'input',
            name: 'credits',
            message: 'Include credits if applicable'
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
            message: 'What command should be run to run tests (output will be console.log)?'
          },
          {
            type: 'input',
            name: 'contrDesc',
            message: 'What does the user need to know about contributing to the repo?'
          }
    ]);
}

const promptProjectTips = readMeAnswers => {
      // If there's no 'projects' array property, create one
     if (!readMeAnswers.projects) {
        readMeAnswers.projects = [];
     }

    return inquirer.prompt([

        {
            type: 'input',
            name: 'addTip',
            message: 'Provide a description on how to achieve a the step/tip',
          },
        {
            type: 'input',
            name: 'addPicture',
            message: 'Provide a snapshot name of step if applicable?',
        },
          {
            type: 'confirm',
            name: 'tipConfirmation',
            message: 'Would you like to add any other tips to your project?',
            default: false
        },
    ]).then(projectData => {
        readMeAnswers.projects.push(projectData);
        if (projectData.tipConfirmation) {
          return promptProjectTips(readMeAnswers);
        } else {
          return readMeAnswers;
        }
      });
};

// *** Test Data *** //

const testData = 
{
    projectTitle: 'Test Title',
    desc: 'Test Description',
    webAddress: 'https://github.com/esroleo/professional-readme-generator',
    featuresGif: 'new-tab',
    credits: 'Thanks Esteban Romero for working on this project.',
    licenses: [ 'mit' ],
    commandInstall: 'npm i',
    commandTest: 'node app.js test',
    contrDesc: 'email Esteban Romero - esroleo@gmail.com',
    projects: [
      {
        addTip: 'test step 1',
        addPicture: 'test',
        tipConfirmation: true
      },
      {
        addTip: 'test step 2',
        addPicture: 'test',
        tipConfirmation: false
      }
    ]
  };



// *** Check if we are in testing envrioment *** //

const profileDataArgs = process.argv.slice(2);

if (profileDataArgs.length === 0) {

    promptUser()
    .then(promptProjectTips)
    .then(answers => {
        console.log(answers)
        return generateReadMe(answers);
    })
    .then(readmeFile => {
        //console.log(readmeFile);
        return writeFile(readmeFile)
    })
    .catch(err => {
    console.log(err);
    });

} else if ( ( profileDataArgs.length > 0) && (profileDataArgs[0].toLowerCase() === "test") )  {
    //console.log(profileDataArgs);
    console.log(generateReadMe(testData))

};
