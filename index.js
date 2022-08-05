// Require Inquierer
const inquirer = require('inquirer');

// Require FS
const fs = require("fs");

// Require Jest
const test = require("jest");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Array of Employees
const arrayOfEmployees = [];
let blankPage = "";

// README APP Questions

const questionsPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your manager's name?",
        name: "ManagersName",
      },
      {
        type: "input",
        message: "What is your manager's ID?",
        name: "ManagersId",
      },
      {
        type: "input",
        message: "What is your manager's email address?",
        name: "ManagersEmail",
      },
      {
        type: "input",
        message: "What is your manager's office number?",
        name: "ManagersNumber",
      },
    ])
    .then((response) => {
      const newManager = new Manager(response.ManagersName, response.ManagersId, response.ManagersEmail, response.ManagersNumber);
      arrayOfEmployees.push(newManager);
      addNewEmployee();
    });
};

const addNewEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add a new member or just quit and create page:",
        name: "choiceOfEmployee",
        choices: ["Engineer", "Intern", "Quit"],
      },
    ])
    .then((response) => {
      switch (response.choiceOfEmployee) {
        case "Engineer":
          newEngineerPrompt();
          break;
        case "Intern":
          newInternPrompt();
          break;
        default:
          generatePage();
      }
    });
};

const newEngineerPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your engineer's name?",
        name: "EngineersName",
      },
      {
        type: "input",
        message: "What is your engineer's ID number?",
        name: "EngineersId",
      },
      {
        type: "input",
        message: "What is the email address of your engineer?",
        name: "EngineersEmail",
      },
      {
        type: "input",
        message: "What is your engineer's GitHub username?",
        name: "EngineersGithub",
      },
    ])
    .then((response) => {
      const newEngineer = new Engineer(response.EngineersName, response.EngineersId, response.EngineersEmail, response.EngineersGithub);
      arrayOfEmployees.push(newEngineer);
      addNewEmployee();
    });
};

const newInternPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your intern's name?",
        name: "InternsName",
      },
      {
        type: "input",
        message: "What is your intern's ID number?",
        name: "InternsId",
      },
      {
        type: "input",
        message: "What is your intern's email address?",
        name: "InternsEmail",
      },
      {
        type: "input",
        message: "What school did your intern graduate from?",
        name: "InternsGithub",
      },
    ])
    .then((response) => {
      const newIntern = new Intern(response.InternsName, response.InternsId, response.InternsEmail, response.InternsGithub);
      arrayOfEmployees.push(newIntern);
      addNewEmployee();
    });
}

// Generating the HTML
function generatePage() {
  console.log(arrayOfEmployees)
  arrayOfEmployees.forEach(role => {
    if (role.getRole() === "Manager") {
      blankPage += `
      <div class="card-group">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">${role.name}<br>MANAGER <i class="bi bi-person-badge-fill"></i></h2>
                    <h6 class="card-title">ID: ${role.id}</h6>
          <h6 class="card-title">Email: <a href="mailto: ${role.email}">${role.email}</a>
                  <h6 class="card-title">Office Number: ${role.phone}</h6>
        </div>
      </div>`

    } else if (role.getRole() === "Intern") {
      blankPage += `   
          <div class="card">
          <div class="card-body">
            <h2 class="card-title">${role.name}<br>INTERN <i class="bi bi-mortarboard-fill"></i></h2>
            <h6 class="card-title">ID: ${role.id}</h6>
            <h6 class="card-title">Email: <a href="mailto: ${role.email}">${role.email}</a>
            <h6 class="card-title">School: ${role.school}</h6>
      </div>
      </div>`

    } else if (role.getRole() === "Engineer") {
      blankPage += `
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">${role.name}<br>ENGINEER <i class="bi bi-wrench-adjustable"></i></h2>
              <h6 class="card-title">ID: ${role.id}
              <h6 class="card-title">Email: <a href="mailto: ${role.email}">${role.email}</a>
              <h6 class="card-title">GitHub: <a href="https://github.com/${role.github}">${role.github}</a>
              </div>
              </div>`
    }
    const htmlStarter =
      ` <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"rel="stylesheet"/>
          <link
            href="https://getbootstrap.com/docs/5.2/assets/css/docs.css"rel="stylesheet"/>
          <title>My Teams Profile</title>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
          <link rel="stylesheet" href="../src/style.css"></link>
        </head>
      <body>
      <br>
          <h1 id="title">My Team</h1>
          <br>
          <br>
          ${blankPage}
          </body>
          </html>`;


    // Writing files and converting to HMTL
    fs.writeFileSync('./dist/index.html', htmlStarter, function (error) {
      if (error) throw error
    });
  })
}

// Initate Function
questionsPrompt();