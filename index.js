const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateProfile = require('./src/Generate-Profile');
const writeFile = require('./util/File');

let employee = [];

function getEmployee(title) {
    const generalPrompt = [
        {
            type: 'input',
            message: `What is the their name?`,
            name: 'name',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    return 'Please enter a name.';
                }
            }
        },

        {
            type: 'input',
            message: `What is the their employee ID?`,
            name: 'id',
            validate: id => {
                if (id) {
                    return true;
                }
                else {
                    return 'Please enter an ID.';
                }
            }
        },

        {
            type: 'input',
            message: `What is the their email address?`,
            name: 'email',
            validate: email => {
                if (!email) {
                    return 'Please enter an email';
                }
                else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                    return true;
                } else {
                    return 'Please enter a valid email address.';
                }
            }
        },
    ]

    const individualPrompt = {
        'manager': {
            type: 'input',
            message: "What is the Manager's office number?",
            name: 'office',
            validate: office => {
                if (!office) {
                    return 'Please enter an office number.';
                }
                else if (isNaN(office)) {
                    return 'The office number needs to be a number.';
                }
                else {
                    return true;
                }
            }
        },

        'engineer': {
            type: 'input',
            message: "What is the Engineers's GitHub username?",
            name: 'github',
            validate: github => {
                if (github) {
                    return true;
                }
                else {
                    return 'Please enter a github username.';
                }
            }
        },

        'intern': {
            type: 'input',
            message: "What school did the Intern attend?",
            name: 'school',
            validate: school => {
                if (school) {
                    return true;
                }
                else {
                    return 'Please enter a school.';
                }
            }
        },
    }

    const otherPrompt = individualPrompt[title];
    generalPrompt.push(otherPrompt);
    return generalPrompt;
}

function createEmployee(title, discription) {
    const name = discription.name;
    const email = discription.email;
    const id = discription.id;

    switch (title) {
        case 'engineer':
            const github = discription.github;
            const engineer = new Engineer(name, email, id, github);
            employee.push(engineer);
            break;
        case 'manager':
            const office = discription.office;
            const manager = new Manager(name, email, id, office);
            employee.push(manager);
            break;
        case 'intern':
            const school = discription.school;
            const intern = new Intern(name, email, id, school);
            employee.push(intern);
            break;
        default:
            break;
    }
    console.log(`
  The ${title} ${name} was added to the team!
    `)
}

function employeePrompt() {
    return inquirer
        .prompt({
            type: 'list',
            message: 'What action would you like to take next?',
            name: 'next',
            choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
        })

        .then(({ next }) => {
            if (next === 'Finish building my team') {
                return employee;
            } else {
                const title = next.replace('Add an ', '');
                console.log(`
  Got it. Let's add an ${title}.
`)
                return inquirer
                    .prompt(getEmployee(title))
                    .then((answers) => { createEmployee(title, answers) })
                    .then(employeePrompt);
            }
        })
}

function formTeam() {
    console.log(` Let's build a team! Starting with the Manager`);

    return inquirer

        .prompt(getEmployee('manager'))
        .then(answers => { createEmployee('manager', answers) })
        .then(employeePrompt);
}

formTeam()
    .then(employee => generateProfile(employee))
    .then(pageHTML => writeFile(pageHTML))
    .then(writeFileResponse => console.log(writeFileResponse.message));

