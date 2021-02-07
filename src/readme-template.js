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

        // const licensesValues = ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 
        // 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 
        // 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 
        // 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib']
        let outputLicenses = [];


        for (i = 0; i < licensesArr.length; i++) {
            //console.log(licensesArr[i]);

            switch(licensesArr[i]) {
                case "afl-3.0":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-AFL%203.0-blue.svg)](https://opensource.org/licenses/afl-3.0)");
                    break;
                case "apache-2.0":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");
                    break;
                case "artistic-2.0":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-Artistic%202.0-blue.svg)](https://opensource.org/licenses/artistic-2.0)");
                    break;
                case "bsl-1.0":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-BSL%201.0-blue.svg)](https://opensource.org/licenses/bsl-1.0)");
                    break;
                case "bsd-2-clause":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)](https://opensource.org/licenses/BSD-2-Clause)");
                   break;
                case "bsd-3-clause":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)");
                    break;
                case "bsd-3-clause-clear":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-BSD%203--ClauseClear-blue.svg)](https://opensource.org/licenses/bsd-3-clause-clear)");
                    break;
                case "cc":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-CC%20-blue.svg)](https://opensource.org/licenses/cc)");
                    break;
                case "cc0-1.0":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-CC0%201.0-blue.svg)](http://creativecommons.org/publicdomain/zero/1.0/)");
                    break;
                case "cc-by-4.0":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-CC%20BY%204.0-blue.svg)](https://creativecommons.org/licenses/by/4.0/)");
                    break;
                case "wtfpl":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-WTFPL-blue.svg)](http://www.wtfpl.net/about/)");
                    break;
                case "ecl-2.0":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-ECL%202.0-blue.svg)](https://opensource.org/licenses/ecl-2.0)");
                    break;
                case "epl-1.0":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-ECL%201.0-blue.svg)](https://opensource.org/licenses/epl-1.0)");
                    break;
                case "epl-2.0":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-EPL%202.0-blue.svg)](https://opensource.org/licenses/epl-2.0)");
                    break;
                case "eupl-1.1":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-EUPL%201.1-blue.svg)](https://opensource.org/licenses/eupl-1.1)");
                    break;
                case "agpl-3.0":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-AGPL%203.0-blue.svg)](https://opensource.org/licenses/agpl-3.0)");
                    break;
                case "gpl":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-GPL%20-blue.svg)](https://opensource.org/licenses/gpl)");
                    break;
                case "gpl-2.0":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-GPL%202.0-blue.svg)](https://opensource.org/licenses/gpl-2.0)");
                    break;
                case "gpl-3.0":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://opensource.org/licenses/gpl-3.0)");
                    break;
                case "lgpl":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-LGPL%20-blue.svg)](https://opensource.org/licenses/lgpl)");
                    break;
                case "lgpl-2.1":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-LGPL%202.1-blue.svg)](https://opensource.org/licenses/lgpl-2.1)");
                    break;
                case "lgpl-3.0":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-LGPL%203.0-blue.svg)](https://opensource.org/licenses/lgpl-3.0)");
                    break;
                case "isc":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-ISC%20-blue.svg)](https://opensource.org/licenses/isc)");
                    break;
                case "lppl-1.3c":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-IPPL%201.3c-blue.svg)](https://opensource.org/licenses/lppl-1.3c)");
                    break;
                case "ms-pl":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-MSPL%20-blue.svg)](https://opensource.org/licenses/ms-pl)");
                    break;
                case "mit":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-MIT%20-blue.svg)](https://opensource.org/licenses/mit)");
                    break;
                case "mpl-2.0":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-MPL%202.0-blue.svg)](https://opensource.org/licenses/mpl-2.0)");
                    break;
                case "osl-3.0":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-OSL%203.0-blue.svg)](https://opensource.org/licenses/osl-3.0)");
                    break;
                case "postgresql":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-POSTGRESQL%20-blue.svg)](https://opensource.org/licenses/postgresql)");
                    break;
                case "ofl-1.1":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-OFL%201.1-blue.svg)](https://opensource.org/licenses/ofl-1.1)");
                    break;
                case "ncsa":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-NCSA%20-blue.svg)](https://opensource.org/licenses/ncsa)");
                    break;
                case "unlicense":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-UNLICENSE%20-blue.svg)](https://opensource.org/licenses/unlicense)");
                    break;
                case "zlib":
                    outputLicenses.push("[![License](https://img.shields.io/badge/License-ZLIB%20-blue.svg)](https://opensource.org/licenses/zlib)");
                    break;
                default:
                    // Do nothing - no selected licenses
            };
        };
        //console.log(outputLicenses);
        //console.log(outputLicenses.join('"\n"'));
        //${licenses.join(', ')}
       return outputLicenses.join('\n')
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

### For license description, click on the badge to get more information.
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

![caption](./assets/images/${featuresGif}.gif)

<a name="credits"></a>
## 5. Credits

Licenses information: https://opensource.org/licenses/osl-3.0
Licenses badges contribution: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

${credits}

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

Please reach out to me

GitHub Url: https://github.com/${gitHubUser}

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