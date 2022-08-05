const Manager = require("../lib/Manager");

// Carrying out of all Manager's checks

test ("Check's the Manager's Name", function() {
  const testingObject = new Manager("Zoran")
    expect (testingObject.name).toEqual('Zoran')
})

test ("Check's the Manager's ID", function() {
    const testingObject = new Manager("Zoran", 1)
    expect (testingObject.id).toEqual(1)
})

test ("Check's the Manager's email", function() {
    const testingObject = new Manager("Zoran", 1 ,'zoran@gmail.com')
    expect (testingObject.email).toEqual('zoran@gmail.com')
})

test ("Check's the getName function", function() {
    const testingObject = new Manager("Zoran")
    expect (testingObject.getName()).toEqual("Zoran")
})

test("Check's the getId function", function() {
    const testingObject = new Manager("Zoran", 1)
    expect(testingObject.getId()).toEqual(1)
})

test ("Check's the getId function", function() {
    const testingObject = new Manager("Zoran", 1 ,'zoran@gmail.com')
    expect (testingObject.getEmail()).toEqual('zoran@gmail.com')
})

test ("Check's the getPhone function", function() {
    const testingObject = new Manager("Zoran", 1, "zoran@gmail.com", "1")
    expect (testingObject.getPhone()).toEqual('1')
})

test ("Check's the getRole function", function() {
    const testingObject = new Manager("Zoran", 1, "zoran@gmail.com", "1")
    expect(testingObject.getRole()).toEqual('Manager')
})