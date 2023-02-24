// variables getting data from inquirer modules/pakcage
const inquirer = require("inquirer");
const fs = require("fs");

// variable array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your ptoject?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your ptoject?",
  },
  {
    type: "input",
    name: "installationInstructions",
    message: "What are installation instructions?",
  },

  {
    type: "input",
    name: "usageInformation",
    message: "What is usage information?",
  },
  {
    type: "input",
    name: "contributionGuidelines",
    message: "What are contribution guidelines?",
  },
  {
    type: "input",
    name: "gitHubUsername",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "emailAddress",
    message: "What is your email address?",
  },
  {
    type: "list",
    message: "Choose your project license:",
    name: "license",
    choices: [
      "MIT",
      "APACHE2.2",
      "Academic Free License v3.0",
      "GNU General Public License v2.0",
    ],
  },
];

// function to write code to readme file , if successesful prints "'Success!'" otherwise prints error
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    var readmeCallBack = draftOfReadme(data);
    fs.writeFile("sampleOfGeneratedREADME.md", readmeCallBack, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
}

init();

// function that creates readme content and putting data into sections
function draftOfReadme(data) {
  var githubLink = `https://github.com/${data.gitHubUsername}`;
  console.log(githubLink);
  var badgeURL = `https://img.shields.io/badge/license-${data.license}-blue`;

  let toc = ` 
   # Table of contents \n\n
   * [Instructions](#instructions)
   * [Usage](#usage)
   * [Contribution](#contribution)
   * [GitHub](#github)
   * [Email](#email)
   * [License](#license)\n\n`;

  let readme = `
   # Title ![badge](${badgeURL})
   ${data.title}
   
   # Description
   ${data.description}

   ${toc}

   # Instructions 
   ${data.installationInstructions}

   # Usage
   ${data.usageInformation}

   # Contribution
   ${data.contributionGuidelines}

   # Github
   [${data.gitHubUsername}](${githubLink})

   # Email
   ${data.emailAddress}

   # License
   ${data.license}

   `;

  return readme;
}
