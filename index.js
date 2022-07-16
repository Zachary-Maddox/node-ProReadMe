// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the projects title name?",
},
      {
      name:"description",
      type:"input",
      message:"Add a Description of project."
    },
    {
      name:"installation",
      type:"input",
      message:"What are your Installation requirements?"
    },
    {
      name:"usage",
      type:"input",
      message:"What are the usage intructions?"
    },
    {
      name:"license",
      type:"list",
      message:" Choose a liscence type",
      choices:["MIT","ISC","none"]
    },
    {
    name:"contributing",
    type:"input",
    message:"How can you Contribute to the project?"
    },
    {
      name:"tests",
      type:"input",
      message:"How do you test your project?"
    },
    {
      name:"questions",
      type:"input",
      message:"What is your contact info?"
    },
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        console.log(userAnswers);

        const readmeTemp = generateMarkdown(userAnswers);
        console.log(readmeTemp);
        writeToFile("./dist/README.md", readmeTemp);
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) console.error(err);
    });
}

// Function call to initialize app
init();
