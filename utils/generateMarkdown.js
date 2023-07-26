// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return `https://opensource.org/license/${license}/`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License
This application is covered under the [${license} license].
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `
# ${data.projectName}

## Description 
${data.description}

${licenseBadge}

## Table of Contents
            
If your README is very long, add a table of contents to make it easy for users to find what they need.
            
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#Contributing)
* [Tests](#tests)
* [Question](#question)
            
## Installation
${data.install}
            
## Usage 
${data.usage}

${licenseSection}

If you want to know more about this license, please click the following link.
[${licenseLink}]
            
## Contributing
${data.contributing}
            
## Tests
To run the test, run the following commend:

${data.test}
            
## Question
If you have any questions about this repo, contact me directly at ${data.email}. You can find more my work at (https://github.com/${data.username})
  `;
}

module.exports = generateMarkdown;
