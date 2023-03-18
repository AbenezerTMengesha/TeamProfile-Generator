const generateEmployeeCard = employee => {
    // if there was no employee data, return nothing
    if (!employee) {
        return '';
    }

    // if there's employee data, figure out specific info to include based on the employee type
    let inputedInfo = '';
    switch (employee.getRole()) {
        case 'Engineer':
            inputedInfo = `<p class="card-text">GitHub: <a href="https://www.github.com/${employee.getGithub()}" target="_blank" class="card-link">${employee.getGithub()}</a></p>`;
            break;
        case 'Intern':
            inputedInfo = `<p class="card-text">${employee.getSchool()}</p>`
            break;
        case 'Manager':
            inputedInfo = `<p class="card-text">Office: ${employee.getOffice()}</p>`
            break;
        default:
            break;
    }

    // return the HTML for the provided employee's card
    return `
                <div class="col mb-3">
                    <div class="card h-80">
                        <div class="card-header bg-secondary">
                            <h4>${employee.getName()}</h4>
                            <p class="card-text text-white">${employee.getRole()}</p>
                        </div>
                        <div class="card-body font-weight-light">
                            <p><a href="mailto:${employee.getEmail()}" class="card-link">${employee.getEmail()}</a></p>
                            <p class="card-text">Employee ID: ${employee.getId()}</p>
                            ${inputedInfo}
                        </div>
                    </div>
                </div>
            `
}

const generatePageContent = employees => {
    let generateHtmlFile = '';

    // iterate through the employees to generate the employee HTML
    for (let i = 0; i < employees.length; i++) {
        generateHtmlFile += generateEmployeeCard(employees[i])
    }
    return generateHtmlFile
}

// export the page HTML
module.exports = employees => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Portfolio</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>
<body>
    <header class="jumbotron text-center bg-secondary">
        <h1 class="display-3">My Team!</h1>
        <p class="lead text-white">Meet the members of our team.</p>
    </header>
    <main class="mx-auto">
        <div class="container font-weight-light">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                ${generatePageContent(employees)}
            </div>
        </div>
    </main>
</body>
</html>
`
};