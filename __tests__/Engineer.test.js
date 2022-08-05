const Engineer = require("../lib/Engineer");

// Carrying out of all Engineer's checks

test ("Check's the Engineer's Name", function() {
    const testingObject = new Engineer("Archie")
    expect (testingObject.name).toEqual('Archie')
})

test ("Check's the Engineer's ID", function() {
    const testingObject = new Engineer("Archie", 1)
    expect (testingObject.id).toEqual(1)
})

test ("Check's the Engineer's email", function() {
    const testingObject = new Engineer("Archie", 1 ,'Archie@gmail.com')
    expect (testingObject.email).toEqual('Archie@gmail.com')
})

test ("Check's the getName function", function() {
    const testingObject = new Engineer("Archie")
    expect (testingObject.getName()).toEqual("Archie")
})

test ("Check's the getId function", function() {
    const testingObject = new Engineer("Archie", 1)
    expect (testingObject.getId()).toEqual(1)
})

test ("Check's getEmail function", function() {
    const testingObject = new Engineer("Archie", 1 ,'Archie@gmail.com')
    expect (testingObject.getEmail()).toEqual('Archie@gmail.com')
})

test ("Check's the getRole function", function() {
  const testingObject = new Engineer("Archie", 1, "Archie@gmail.com", "Zoki91")
  expect (testingObject.getRole()).toEqual('Engineer')
})

test ("Check's the getGithub function", function() {
    const testingObject = new Engineer("Archie", 1, "Archie@gmail.com", "Zoki91")
    expect (testingObject.getGithub()).toEqual('Zoki91')
})