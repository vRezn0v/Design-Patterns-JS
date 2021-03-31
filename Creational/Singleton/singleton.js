var Singleton = (function() {
    var instance, semaphore

    // helper to create the Object which we are gonna refer to
    function createInstance() {
        semaphore = true
        var object = new Object()
        object.randomNum = Math.floor(Math.random() * 5000)
        semaphore = false
        return object
    }

    // return a reference to instance if it already exists
    return {
        getInstance: function() {
            if (!instance && !semaphore) {
                instance = createInstance()
                createInstance = null
            }
            return instance
        }
    }
})()

module.exports = Singleton