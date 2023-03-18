const Manager = require('../lib/Manager');

test('Manager', () => {
    const manager = new Manager('Abenezer Mengesha', 'abenezert.mengesha@gmail.com', '1', 1);

    // if manager has these attrs, it's inheriting from Employee.
    expect(manager.name).toBe('Abenezer Mengesha');
    expect(manager.email).toBe('abenezert.mengesha@gmail.com');
    expect(manager.id).toBe('1');

    // test manager-specific attributes
    expect(manager.office).toBe(1);
})

test('getRole() returns the role', () => {
    const manager = new Manager('Abenezer Mengesha', 'abenezert.mengesha@gmail.com', '1', 1);
    expect(manager.getRole()).toBe('Manager');
})

test('getOffice() returns the office number', () => {
    const manager = new Manager('Abenezer Mengesha', 'abenezert.mengesha@gmail.com', '1', 1);
    expect(manager.getOffice()).toBe(1);
})