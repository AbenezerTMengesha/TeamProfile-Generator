class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;