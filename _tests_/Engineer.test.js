const Engineer = require('../lib/Engineer');

test('Engineer', () => {
    const engineer = new Engineer('Abenezer Mengesha', 'abenezert.mengesha@gmail.com', '2', 'abenezer');

    // if engineer has these attrs, it's inheriting from Employee.
    expect(engineer.name).toBe('Abenezer Mengesha');
    expect(engineer.email).toBe('abenezert.mengesha@gmail.com');
    expect(engineer.id).toBe('2');

    // engineer-specific attr
    expect(engineer.github).toBe('abenezer');
})

test('getRole() returns the role', () => {
    const engineer = new Engineer('Abenezer Mengesha', 'abenezert.mengesha@gmail.com', '1');
    expect(engineer.getRole()).toBe('Engineer');
})

test('getGithub() returns the github username', () => {
    const engineer = new Engineer('Abenezer Mengesha', 'abenezert.mengesha@gmail.com', '1', 'abenezer');
    expect(engineer.getGithub()).toBe('abenezer');
})