// This function for render the license badge.
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  // return badge if user choose the license.
  return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
}

// For render license link
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  // return license link if user choose the license.
  return `https://opensource.org/license/${license}/`;
}

// function for render license section.
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  // return license section if user choose the license
  return `## License
This application is covered under the [${license} license].
`;
}

// This function for generate the readme layout.
function generateMarkdown(data) {
  // declare the variables to execute the function.
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  // return the readme layout.
  return `# ${data.projectName}

## Description 
${data.description}

${licenseBadge}

## Table of Contents
            
If your README is very long, add a table of contents to make it easy for users to find what they need.
            
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Question](#question)
            
## Installation
Run the following commend for installation.

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

// export the generateMarkdown js file.
module.exports = generateMarkdown;
