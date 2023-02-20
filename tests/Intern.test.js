const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Sara', 3, 'sara@gmail.com', 'UMD');
    expect(intern.school).toEqual(expect.any(String)); 
});

test('gets employee schools', () => {
    const intern = new Intern('Sara', 3, 'sara@gmail.com', 'UMD');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Sara', 3, 'sara@gmail.com', 'UMD');
    expect(intern.getRole()).toEqual("Intern");
});