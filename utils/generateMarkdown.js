function generateMarkdown(data) {
  return `
  ![Maintenance](https://img.shields.io/static/v1??style=social&logo=appveyor=label=Progress=&color=<blueviolet>)
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

# ${data["projectTitle"]}

## Description
${data.Description}

## Table of Contects
${data.tableofContects}

## Installation
${data.Installation}

## Usage
${data.Usage}

##  License 
${data.License} 

## Contributing
${data.Contributing}

##  Tests
${data.Tests}

![alt text](${data.image})

## Made by 
${data.username}
## Email
${data.email}

`
}

module.exports = generateMarkdown;
