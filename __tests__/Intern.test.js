const Intern = require("../lib/Intern");

// Carrying out of all Intern's check

test ("Check's the Intern's Name", function() {
   const testingObject = new Intern("Melissa")
    expect (testingObject.name).toEqual('Melissa')
})

test ("Check's the Intern's ID", function(){
   const testingObject = new Intern("Melissa", 3)
    expect (testingObject.id).toEqual(3)
})

test ("Check's the Intern's email", function() {
   const testingObject = new Intern("Melissa", 3 ,'melissa@gmail.com')
    expect (testingObject.email).toEqual('melissa@gmail.com')
})

test ("Check's the getName function", function() {
   const testingObject = new Intern("Melissa")
    expect(testingObject.getName()).toEqual("Melissa")
})

test ("Check's the getId function", function() {
   const testingObject = new Intern("Melissa", 3)
    expect (testingObject.getId()).toEqual(3)
})

test ("Check's the getEmail function", function() {
   const testingObject = new Intern("Melissa", 3 ,'melissa@gmail.com')
    expect (testingObject.getEmail()).toEqual('melissa@gmail.com')
})

test ("Check's the getSchool function", function() {
   const testingObject = new Intern("Melissa", 3, "melissa@gmail.com", "Monash University")
    expect (testingObject.getSchool()).toEqual('Monash University')
})

test ("Check's the getRole function", function() {
   const testingObject = new Intern("Melissa", 3, "melissa@gmail.com", "Monash University")
    expect (testingObject.getRole()).toEqual('Intern')
})