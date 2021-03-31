// Similar to the module design pattern
// we can just return the references to private methods in the return Object Literal

// Here the Central Principle we're gonna follow is that
// "All the functionality should be hidden unless deliberately exposed"
var demoRMP = (function() {
    var privateVariable = 10;

    var privateMethod = function() {
        console.log('Inside a private method!');
        privateVariable++;
    }

    var methodToExpose = function() {
        console.log('This is a method I want to expose!');
    }

    var otherMethodIWantToExpose = function() {
        privateMethod();
    }

    // create an API to expose the private methods to the public scope
    return {
        first: methodToExpose,
        second: otherMethodIWantToExpose
    };
})();

demoRMP.first(); // Output: This is a method I want to expose!
demoRMP.second(); // Output: Inside a private method!
demoRMP.methodToExpose; // undefined