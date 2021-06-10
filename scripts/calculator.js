class Calculator {
    constructor() {
        this.operand1
        this.operand2
        this.operation
    }

    setOperand1(_operand1) { this.operand1 = _operand1 }
    setOperand2(_operand2) { this.operand2 = _operand2 }
    getOperand1() { return this.operand1 }
    getOperand2() { return this.operand2 }
    setOperation(_operation) { this.operation = _operation }

    sum() { return Number(this.operand1) + Number(this.operand2) }
    subtract() { return this.operand1 - this.operand2 }
    multiply() { return this.operand1 * this.operand2 }
    divide() {
        if (this.operand2 == "0") { return "error" }
        else { return this.operand1 / this.operand2 }
    }

    getResult() {
        if (this.operation == "+") { return this.sum() }
        else if (this.operation == "-") { return this.subtract() }
        else if (this.operation == "*") { return this.multiply() }
        else if (this.operation == "/") { return this.divide() }
    }

    getResultPercent() { return this.operand1 * this.operand2 / 100 }

    clearCalculator() {
        this.setOperand1()
        this.setOperand2()
        this.setOperation()
    }
}

const calculator = new Calculator()