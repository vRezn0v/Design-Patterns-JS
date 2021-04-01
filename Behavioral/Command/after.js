// INVOKER
class Calculator {
    constructor() {
        this.value = 0
        this.history = []
    }

    executeCommand(command) {
        this.value = command.execute(this.value)
        this.history.push(command)
        console.log("[+] EXEC: " + command.name)
        this.display()
    }

    undo() {
        const command = this.history.pop()
        this.value = command.undo(this.value)
        console.log("[+] UNDO: " + command.name)
        this.display()
    }

    display() {
        console.log(this.value)
    }

    clear() {
        this.value = 0
        this.history = []
    }
}

// COMMANDS
class AddCommand {
    constructor(valueToAdd) {
        this.name = "ADD"
        this.valueToAdd = valueToAdd
    }

    execute(currentValue) {
        return currentValue + this.valueToAdd
    }

    undo(currentValue) {
        return currentValue - this.valueToAdd
    }
}

class SubtractCommand {
    constructor(valueToSubtract) {
        this.name = "SUBTRACT"
        this.valueToSubtract = valueToSubtract
    }

    execute(currentValue) {
        return currentValue - this.valueToSubtract
    }

    undo(currentValue) {
        return currentValue + this.valueToSubtract
    }
}

class MultiplyCommand {
    constructor(valueToMultiply) {
        this.name = "MULTIPLY"
        this.valueToMultiply = valueToMultiply
    }

    execute(currentValue) {
        return currentValue * this.valueToMultiply
    }

    undo(currentValue) {
        return currentValue / this.valueToMultiply
    }
}

class DivideCommand {
    constructor(valueToDivide) {
        this.name = "DIVIDE"
        this.valueToDivide = valueToDivide
    }

    execute(currentValue) {
        return currentValue / this.valueToDivide
    }

    undo(currentValue) {
        return currentValue * this.valueToDivide
    }
}

class AddThenMultiplyCommand {
    constructor(valueToAdd, valueToMultiply) {
        this.addCommand = new AddCommand(valueToAdd)
        this.multiplyCommand = new MultiplyCommand(valueToMultiply)
    }

    execute(currentValue) {
        const newValue = this.addCommand.execute(currentValue)
        return this.multiplyCommand.execute(newValue)
    }

    undo(currentValue) {
        const newValue = this.multiplyCommand.undo(currentValue)
        return this.addCommand.undo(newValue)
    }
}

// INVOKER INSTANCE
var calc = new Calculator()

// CREATORS
calc.executeCommand(new AddCommand(10))
calc.executeCommand(new SubtractCommand(5))
calc.undo()
calc.executeCommand(new MultiplyCommand(10))
calc.executeCommand(new DivideCommand(3))
calc.undo()