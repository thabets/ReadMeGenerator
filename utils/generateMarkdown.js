// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license == "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  } else if (license == "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  } else if (license == "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license == "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license == "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license == "BSD") {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "None";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license == "IBM") {
    return "(https://opensource.org/licenses/IPL-1.0)";
  } else if (license == "ISC") {
    return "(https://opensource.org/licenses/ISC)";
  } else if (license == "Mozilla") {
    return "(https://opensource.org/licenses/MPL-2.0)";
  } else if (license == "Apache 2.0") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license == "Boost") {
    return "(https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license == "BSD") {
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "None";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license == "None") {
//     return "";
//   } else if (license == "MIT") {
//     return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
//   } else if (license == "IBM") {
//     return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
//   } else if (license == "ISC") {
//     return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
//   } else if (license == "Mozilla") {
//     return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
//   } else if (license == "Apache 2.0") {
//     return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
//   } else if (license == "Boost") {
//     return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
//   } else if (license == "BSD") {
//     return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
//   }
// }
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}

# Table of Content
## [Project Name](#project-name)
## [Project Creator](#project-creator)
## [Description](#description)
## [Prerequisites for Use](#prerequisites)
## [Installation](#installing)
## [Screenshot](#screenshot)
## [Active Url](#active-url)
## [Repository Link](#repository-link)
## [Contributing To](#contributing-to)
## [Contributors](#contributors)
## [Contact](#contact)
## [license](#license)

# Project name
${data.title}
# Project Creator
${data.name}

# Description
Project name is \`${data.title}\` This application allows the user to ${
    data.description
  }.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of Node.js
* You have a Windows/Linux/Mac machine.
* You have read guide/documentation_related_to_project>.

## Installing

To install <${data.title}>, follow these steps:

${data.install}

## Screenshot
![Screenshot](${data.screenshot})

## Active Url

Here is the link to the active site: ${data.activeURL}

## Repository Link

Here is the link to the Github Repository: ${data.repository}

## Contributing to
To contribute to <${data.title}>, follow these steps:

1. Fork this repository.
2. Create a branch: \`git checkout -b <branch_name>\`.
3. Make your changes and commit them: \`git commit -m '<commit_message>'\`
4. Push to the original branch: \`git push origin <project_name>/<location>\`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contributors

Thanks to the following people who have contributed to this project:

<${data.contributor}>

## Contact

If you want to contact me you can reach me at <${data.email}>.

## License

This project uses the following license: [${data.license}]${renderLicenseLink(
    data.license
  )}.
`;
}

module.exports = generateMarkdown;
