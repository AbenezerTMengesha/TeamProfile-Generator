const Employee = require('../lib/Employee');

test('Employee', () => {
    const employee = new Employee('Abenezer Mengesha', 'abenezert.mengesha@gmail.com', '1');

    expect(employee.name).toBe('Abenezer Mengesha');
    expect(employee.email).toBe('abenezert.mengesha@gmail.com');
    expect(employee.id).toBe('1');

})

test('getEmail() returns email', () => {
    const employee = new Employee('Abenezer Mengesha', 'abenezert.mengesha@gmail.com', '1');
    expect(employee.getEmail()).toBe('abenezert.mengesha@gmail.com');
})

test('getName() returns name', () => {
    const employee = new Employee('Abenezer Mengesha', 'vlane0593@gmail.com', '1');
    expect(employee.getName()).toBe('Abenezer Mengesha');
})

test('getRole() returns role', () => {
    const employee = new Employee('Abenezer Mengesha', 'abenezert.mengesha@gmail.com', '1');
    expect(employee.getRole()).toBe('Employee');
})

test('getId() returns ID', () => {
    const employee = new Employee('Abenezer Mengesha', 'abenezert.mengesha@gmail.com', '1');
    expect(employee.getId()).toBe('1');
})