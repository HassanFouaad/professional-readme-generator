//  *** Incoming templateData sample *** //
/*
{
    projectTitle: 'Test',
    desc: 'Test',
    webAddress: 'Test',
    usageTips: 'Test',
    usageTipsPicture: false,
    featuresGif: 'Test',
    credits: 'Test',
    licenses: [ 'afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0' ],
    commandInstall: 'Test',
    commandTest: 'Test',
    contrDesc: 'Test'
  }

    projects: [
    { addTip: 'test', addPicture: 'test', tipConfirmation: true },
    { addTip: 'test1234', addPicture: '', tipConfirmation: false }
*/
const generateReadMe = templateData => {

    // const {projectTitle, desc, webAddress,
    //     featuresGif, credits, licenses, commandInstall , commandTest, contrDesc, ...tips } = templateData;

    
    const {gitHubUser, emailAddress, projectTitle, desc, webAddress,
        featuresGif, credits, licenses, commandInstall , commandTest, contrDesc, projects } = templateData;

       // console.log(templateData);
        //console.log(tips);

    // *** Licencses Badges *** //

    const licensesBadges = licensesArr => {

        const licensesValues = ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 
        'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 
        'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 
        'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib']
        let outputLicenses = "";

        licensesArr.forEach(licenseInputs => {
            console.log("loop through recieved license array" + licenseInputs);
            switch(licenseInputs) {
                case "afl-3.0":
                    outputLicenses += "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" + "\n";
                    break;
                case "apache-2.0":
                    outputLicenses += "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" + "\n";
                    break;
                case "artistic-2.0":
                    outputLicenses += "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" + "\n";
                    break;
                case "bsl-1.0":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "bsd-2-clause":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "bsd-3-clause":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "bsd-3-clause-clear":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "cc":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "cc0-1.0":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "cc-by-4.0":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "wtfpl":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "ecl-2.0":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "epl-1.0":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "epl-2.0":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "eupl-1.1":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "agpl-3.0":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "gpl":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "gpl-2.0":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "gpl-3.0":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "lgpl":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "lgpl-2.1":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "lgpl-3.0":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "isc":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "lppl-1.3c":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "ms-pl":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "mit":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "mpl-2.0":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "osl-3.0":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "postgresql":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "ofl-1.1":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "ncsa":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "unlicense":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                case "zlib":
                    outputLicenses += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]";
                    break;
                default:
                    // Do nothing - no selected licenses
            }
          });

          //console.log("for each item lopped\n" + outputLicenses)

          return outputLicenses;

        

    };

     const genereateTips = tips => {
        // console.log(tips)

return `
${tips
.filter(({ addTip, addPicture }) => addTip && addPicture)
.map(({ addTip, addPicture }) => {
return `
###${addTip}
![${addPicture}](./assets/images/${addPicture}.JPG?raw=true "${addPicture}")
`;
})
.join('')}

${tips
.filter(({ addTip, addPicture }) => addTip && !addPicture)
.map(({ addTip }) => {
return `
${addTip}
`;
})
.join('')}
${tips
.filter(({ addTip, addPicture }) => !addTip && addPicture)
.map(({ addPicture }) => {
return `
![${addPicture}](./assets/images/${addPicture}.JPG?raw=true "${addPicture}")
`;
})
.join('')}
${tips
.filter(({ addTip, addPicture }) => !addTip && !addPicture)
.map(({ addTip,addPicture }) => {
})
.join('')}
`;
}         
    return `

## ${projectTitle}

1. [ Description. ](#desc)
2. [ Web Address. ](#web-address)
3. [ Usage tips. ](#usage)
4. [ Features. ](#features)
5. [ Credits. ](#credits)
6. [ Licenses. ](#licenses)
7. [ Install Command. ](#commandInstall)
8. [ Test Command. ](#commandTest)
9. [ Contributing. ](#contributing)
9. [ Questions. ](#questions)

${licensesBadges(licenses)}

<a name="desc"></a>
## 1. Description

### Top technology used:  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

${desc}



<a name="web-address"></a>
## 2. How to Get There

### Open your favorite web browser and enter the following web address to access.

${webAddress}

<a name="usage"></a>
## 3. Usage Tips

${genereateTips(projects)}

<a name="features"></a>
## 4. Features
### Make sure your gif is at ./assets/images/

![caption](./assets/images/${featuresGif}.gif)

<a name="credits"></a>
## 5. Credits

${credits}

Credits to licenses badges contribution: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

<a name="licenses"></a>
## 6. Licenses

${licenses.join(', ')}

<a name="commandInstall"></a>
## 7. Install Command

${commandInstall}

<a name="commandTest"></a>
## 8. Test Command

${commandTest}

<a name="contributing"></a>
## 9. Contributing

${contrDesc}

<a name="questions"></a>
## 10. Questions

Here is my profile GitHub Url: https://github.com/${gitHubUser}

Email address: ${emailAddress}

`;
};




module.exports = templateData => {
    //console.log(templateData);
    return generateReadMe(templateData);

    //console.log(github);
    //console.log(contrDesc);
    //const generateReadMe

}