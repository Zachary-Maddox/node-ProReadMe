// TODO: Create a function to generate markdown for README
function generateMarkdown(userAnswers) {
    return `# ${userAnswers.title}

  ## Description
  
${userAnswers.description}
  
  ## Table of contents
  
  - [license](#license)
- [installation](#installation)
- [usage](#usage)
- [contributing](#contributing)
- [questions](#questions)

  
  
  ## License
  
  <img src = "https://img.shields.io/badge/license-${userAnswers.license}-blue" />

  ## Installation

  ${userAnswers.installation}

## Usage

${userAnswers.usage}

## Contributing

${userAnswers.contributing}

## Questions

${userAnswers.questions}`;
}

module.exports = generateMarkdown;
