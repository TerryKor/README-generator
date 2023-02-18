// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
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
    message: "What is your preferred method of communication?",
    name: "license",
    choices: [
      "MIT",
      "APACHE2.2",
      "Academic Free License v3.0",
      "GNU General Public License v2.0",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile((fileName, data, error) => {
    if (error) {
      return console.log(error);
    }
    console.log("Successful");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);

    var readme = draftOfReadme(data);
    writeToFile("fileName.md", readme);
  });
}

// Function call to initialize app
init();

// inquirer
//   .prompt(questions)
//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });

function draftOfReadme(data) {
  var githubLink = `https://github.com/${data.gitHubUsername}`;
  console.log(githubLink);
  let readme = `title: ${data.title}`;

  return readme;
}
