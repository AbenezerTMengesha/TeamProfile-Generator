const Intern = require('../lib/Intern');

test('Intern', () => {
    const intern = new Intern('Abenezer Mengesha', 'abenezert.mengesha@gmail.com', '3', 'Carlton Univerity');

    // if intern has these attrs, it's inheriting from Employee.
    expect(intern.name).toBe('Abenezer Mengesha');
    expect(intern.email).toBe('abenezert.mengesha@gmail.com');
    expect(intern.id).toBe('3');

    // intern-specific attr
    expect(intern.school).toBe('Carlton Univerity');
})

test('getRole() returns the role', () => {
    const intern = new Intern('Abenezer Mengesha', 'abenezert.mengesha@gmail.com', '3', 'Carlton Univerity');
    expect(intern.getRole()).toBe('Intern');
})

test('getSchool() returns the school', () => {
    const intern = new Intern('Abenezer Mengesha', 'abenezert.mengesha@gmail.com', '3', 'Carlton Univerity');
    expect(intern.getSchool()).toBe('Carlton Univerity');
})