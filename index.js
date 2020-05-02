const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const api = require('./utils/api.js');
const mdgen = require("./utils/generateMarkdown.js")

const questions = [{
    type: "input",
    name: "username",
    message: "What is your Github username?"
    },
    {
    type: "input",
    name: "Project title",
    message: "What is the name of your project?"
    },
    {
    type: "input",
    name: "Description",
    message: "What is the project about?"
    },
    {
    type: "input",
    name: "Table of Contents",
    message: "Your table contest?"
    },
    {
    type: "input",
    name: "Installation",
    message: "Instal it here"
    },
    {
    type: "input",
    name: "Usage",
    message: "What is the usage?"
    },
    {
    type: "input",
    name: "License",
    message: "What is your license"
    },
    {
    type: "input",
    name: "Contributing",
    message: "Who is contributing?"
    },

    {
    type: "input",
    name: "Tests",
    message: "Any tests?"
    }
];

function writeToFile(fileName, data) {

}

async function init() {
    //ask for github info
    let answers = await inquirer.prompt(questions)
    console.log(answers)
    let githubResponse = await api.getUser(answers.username)
    console.log(githubResponse.data)
    let dataObject={
        image: githubResponse.data.avatar_url,
        username: githubResponse.data.login,
        email: githubResponse.data.email,
        projectTitle: answers['Project title'],
        Description: answers.Description,
        tableofContects: answers['Table of Contents'],
        Installation: answers.Installation,
        Usage: answers.Usage,
        License: answers.License,
        Contributing:answers.Contributing,
        Tests: answers.Tests,
    
    }
    console.log(dataObject)
    const mdString = mdgen(dataObject)
    console.log(mdString)
    fs.writeFile('README.md', mdString, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

init();




