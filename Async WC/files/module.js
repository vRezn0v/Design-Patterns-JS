// Generally when we use objects, we use Object Literals

// below is an example of an IIFE
const myModule = (function() {
    // these variables/functions are a part of the private scope
    const privateVariable = "Confidential"
    const protectedText = "Not Accessible Directly From Outside"

    return {
        // exposing certain variables/functions for access from outside the module
        publicText: "Can Be Accessed Publicly",
        getText: function() { return protectedText }
    }
})()


// logging output
console.log(myModule.privateVariable) // Output: undefined
console.log(myModule.protectedText) // Output: undefined
console.log(myModule.publicText) // Output: "Can Be Accessed Publicly"
console.log(myModule.getText()) // Output: "Not Accessible Directly From Outside"