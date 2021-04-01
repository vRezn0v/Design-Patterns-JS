// Taking a simple example of a calculator Object
// it supports 4 operations: add, subtract, multiply and divide
class Calculator {
    constructor() {
        this.value = 0
    }

    add(valueToAdd) {
        this.value = this.value + valueToAdd
    }

    subtract(valueToSubtract) {
        this.value = this.value - valueToSubtract
    }

    multiply(valueToMultiply) {
        this.value = this.value * valueToMultiply
    }

    divide(valueToDivide) {
        this.value = this.value / valueToDivide
    }

    clear() {
        this.value = 0
    }
}

let calc = new Calculator()
calc.add(10)
console.log(calc.value)
calc.subtract(1)
console.log(calc.value)
calc.multiply(7)
console.log(calc.value)
calc.add(6)
console.log(calc.value)
calc.clear()