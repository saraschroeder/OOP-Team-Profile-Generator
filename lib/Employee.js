class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.is = id;
        this.email = email
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
};

module.exports = Employee;