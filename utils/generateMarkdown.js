// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) 
  {
    case 'MIT':
      license = "(https://opensource.org/licenses/MIT)";
      break;
    case 'APACHE_2.0':
      license = "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case 'GPLv3':
      license = "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case 'BSD_3':
      license = "(https://opensource.org/licenses/BSD-3-Clause)";
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `## License
This project has the following license: [${license}](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
  
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${data.license === "None" ? "" : "- [License](#license)"}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributing
${data.contribute}
## Tests
${data.tests}
## Questions
Questions about this repository? Please feel free to contact me at ${data.email}. You can view more of my projects at https://github.com/${data.username}.
`;
}

module.exports = generateMarkdown;
