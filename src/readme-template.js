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
*/
const generateReadMe = templateData => {

    const {projectTitle, desc, webAddress,
        usageTips, usageTipsPicture, featuresGif, credits, 
        licenses, commandInstall , commandTest, contrDesc } = templateData;

        console.log(templateData);
    
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

### ${desc}


Desktop screen > 1298x:

![Top-Page-Area](./assets/images/Landing-Page-Large-Updated.JPG?raw=true "Landing-Page-Large")

Smaller screen Tablets 768px:

![Top-Page-Area](./assets/images/Landing-Page-Ipad.JPG?raw=true "Landing-Page-Ipad")

![Top-Page-Area](./assets/images/Landing-Page-Ipad-Menu.JPG?raw=true "Landing-Page-Ipad-Menu")


Smaller Screen Smart Phones:

![Top-Page-Area](./assets/images/Landing-Page-Smaller1.JPG?raw=true "landing-page-desktip-smartPhones-1")

![Top-Page-Area](./assets/images/Landing-Page-Smaller-Menu.JPG?raw=true "landing-page-desktip-smartPhones-2")

![Top-Page-Area](./assets/images/Landing-Page-Smaller3.JPG?raw=true "landing-page-desktip-smartPhones-3")

![Top-Page-Area](./assets/images/Landing-Page-Smaller4.JPG?raw=true "landing-page-desktip-smartPhones-4")



<a name="web-address"></a>
## 2. How to Get There

### Open your favorite web browser and enter the following web address to access.

${webAddress}

<a name="usage"></a>
## 3. Usage Tips

### Testing the application

### Please log in using our Login Button
### Once on the log in page, login by using a name and a password.
### At the end of your password, please ensure to add "-" then the value of your age. Example: "password-30" to reflect the age of a thirty year old.

![nav-menu](./assets/images/Login-Page-Button.JPG?raw=true "Login-Page-Button")

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