const Employee = require('../lib/Employee');

// Carrying out of all Employee checks

test ("Checks the Employee's Name", function() {
    const testingObject = new Employee("Zoran")
    expect (testingObject.name).toEqual('Zoran')
})

test ("Checks the Employee's ID", function() {
  const testingObject = new Employee("Zoran", 1)
    expect (testingObject.id).toEqual(1)
})

test ("Checks the Employee's email", function() {
  const testingObject = new Employee("Zoran", 1 ,'zoran@gmail.com')
    expect (testingObject.email).toEqual('zoran@gmail.com')
})

test ("Check's the getName function", function() {
    const testingObject = new Employee("Zoran")
    expect (testingObject.getName()).toEqual("Zoran")
})

test ("Check's the getId function", function() {
    const testingObject = new Employee("Zoran", 1 ,'zoran@gmail.com')
    expect (testingObject.getEmail()).toEqual('zoran@gmail.com')
})

test ("Check's the getId function", function() {
    const testingObject = new Employee("Zoran", 1)
    expect (testingObject.getId()).toEqual(1)
})