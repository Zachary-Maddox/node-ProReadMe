// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { stringify } = require("querystring");

// TODO: Create an array of questions for user input

const questions = 

inquirer
.prompt([
  {
  name:"Description",
  type:"input",
  message:"Add a Description"
},
{
name:"Table Of Contents",
type:"input",
message:"Add a table of contents."
},
{
  name:"Installation",
  type:"input",
  message:"Installations NPM"
},
{
  name:"Usage",
  type:"input",
  message:"Run node index answer all prompts?"
},
{
  name:"License",
  type:"list",
  message:" Choose a liscence type",
  choices:["MIT","ISC"]
},
{
name:"Contributing",
type:"input",
message:"Who is Contributing?"
},
{
  name:"tests",
  type:"input",
  message:"IDK"
},
{
  name:"Questions",
  type:"input",
  message:"Contact me with any questions."
},
{
  name:"title",
  type:"input",
  message:"Write title name"
}
])
.then((data) => {
  const filename = `${data.name}.json`;
  fs.writeFile(filename,JSON,stringify(data),(err) => 
  err ? console.log(err) : console.log('Success!')
  );
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('README.md', data, (err) =>
  err ? console.error(err) : console.log(response)
);
generateMarkdown(reponses)
}

// TODO: Create a function to initialize app
function init() {
  
}

// Function call to initialize app
init();
