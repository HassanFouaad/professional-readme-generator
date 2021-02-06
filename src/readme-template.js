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

    const {projectTitle, desc, webAddress,
        featuresGif, credits, licenses, commandInstall , commandTest, contrDesc, projects } = templateData;

        //console.log(templateData);
        //console.log(tips);

     const genereateTips = tips => {
         console.log(tips)

return `
${tips
.filter(({ addTip, addPicture }) => addTip && addPicture)
.map(({ addTip, addPicture }) => {
return `
###${addTip}
![${addPicture}](./assets/images/${addPicture}.JPG?raw=true "${addPicture}")
`;
})
}
${tips
.filter(({ addTip, addPicture }) => addTip && !addPicture)
.map(({ addTip }) => {
return `
###${addTip}
`;
})
}
${tips
.filter(({ addTip, addPicture }) => !addTip && addPicture)
.map(({ addPicture }) => {
return `
![${addPicture}](./assets/images/${addPicture}.JPG?raw=true "${addPicture}")
`;
})
}
${tips
.filter(({ addTip, addPicture }) => !addTip && !addPicture)
.map(({ addTip,addPicture }) => {
})
}
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

<a name="desc"></a>
## 1. Description

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

`;
};




module.exports = templateData => {
    //console.log(templateData);
    return generateReadMe(templateData);

    //console.log(github);
    //console.log(contrDesc);
    //const generateReadMe

}