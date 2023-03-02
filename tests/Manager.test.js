const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Madison', 4, 'madison@gmail.com', 4);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Madison', 4, 'madison@gmail.com');
    expect(manager.getRole()).toEqual("Manager");
});