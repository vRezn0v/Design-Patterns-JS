// The three ways to create objects 

// Object Literal
var newObject = {}

// Object.create
var newObject = Object.create(Object.prototype)

// Object Constructor
var newObject = new Object()

// Assigning Keys and Values To an Object

newObject.someKey = "Hello World" // [1]

newObject["someKey"] = "Hello World" // [2]

Object.defineProperty(newObject, "someKey", {
    value: "Hello World"
})

//  The Above three essentially do the same thing



// Defining Objects Using Object Literal Notation
var civic = {
    model: "Civic",
    make: 2003,
    manufacturer: "Honda",
    drive: function() {
        // do something
    }
}

var gt86 = {
    model: "GT86",
    make: 2012,
    manufacturer: "Toyota",
    drive: function() {
        // do something
    }
}

/** 
 * defining Objects the simple way has way too many redundancies so in order to avoid that we can use a constructor method
 * to do all the heavy lifting for us
 * */

const Car = (model, make, manufacturer) => {
    // within the constructor, any of key-value assignment methods can be used but we generally use dot notation
    this.model = model
    this.make = make
    this.manufacturer = manufacturer
        /* functions can be defined within here but it comes with a lot of overhead
         *  this results in instantiation of the function per object which causes complications with memory
         *  so we stick with prototype methods
         */
}

/**
 * But doing this shares a single instance of the drive method between the objects created
 */
Car.prototype.drive = () => {
    // do something
}

var civic = new Car("Civic", 2003, "Honda")
var gt86 = new Car("GT86", 2012, "Toyota")

civic.drive()
gt86.drive()