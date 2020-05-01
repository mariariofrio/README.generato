function generateMarkdown(data) {
  return `
# ${data["projectTitle"]}
![alt text](${data.image})

## Description
${data.Description}

## Table of Contects
${data.tableofContects}

## Installation
${data.Installation}

## Table of Contects
${data.tableofContects}`

}

module.exports = generateMarkdown;
