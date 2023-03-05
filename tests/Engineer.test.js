const Engineer = require('../lib/Engineer');

test("Can create github.", () => {
    const testGithub = "Madison1";
    const employeeInstance = new Engineer("Madison", 2, "madison@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "Madison1";
    const employeeInstance = new Engineer("Madison", 2, "madison@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Madison", 2, "madison@gmail.com", "Madison1");
    expect(employeeInstance.getRole()).toBe(returnValue);
});