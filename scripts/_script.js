let displayValue = document.getElementById('display');
let displayOperation = document.getElementById('operation');
let operationCounter = 0;

const keys = document.querySelectorAll('.keys');

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', enter);
}


function calculator() {
    let operand1;
    let operand2;
    let operation;

    function setOperand1(_operand1) {
        operand1 = _operand1;
    };
    function setOperand2(_operand2) {
        operand2 = _operand2;
    };
    function getOperand1() {
        return operand1;
    };
    function getOperand2() {
        return operand2;
    };
    function setOperation(_operation) {
        operation = _operation;
    };
    function getResult() {
        if (operation == "+") {
            return Number(operand1) + Number(operand2);
        } else if (operation == "-") {
            return operand1 - operand2;
        } else if (operation == "*") {
            return operand1 * operand2;
        } else if (operation == "/") {
            if (operand2 == "0") {
                return "error"
            } else {
                return operand1 / operand2;
            }
        }
    };
    function getResultPercent() {
        return operand1 * operand2 / 100;
    }
    function clearCalculator() {
        setOperand1();
        setOperand2();
    };
    return {
        setOperand1,
        setOperand2,
        getOperand1,
        getOperand2,
        setOperation,
        getResult,
        getResultPercent,
        clearCalculator
    };
};

let classCalculator = new calculator();

function enter(a) {
    if (displayValue.textContent.length == 7 && operationCounter == 1) {
    } else {
        if (operationCounter == 0) {
            displayValue.textContent = a.target.textContent;
            operationCounter = 1;
        } else {
            displayValue.textContent += a.target.textContent;
        }
    }
}

function chooseOperation(operand1, operation) {
    classCalculator.setOperand1(operand1);
    classCalculator.setOperation(operation);
    displayOperation.innerHTML = operation;
    operationCounter = 0;
}

function calculate(operand2) {
    classCalculator.setOperand2(operand2);
    if (classCalculator.getResult() == "error") {
        displayValue.textContent = classCalculator.getResult();
    }
    else if (Number.isInteger(classCalculator.getResult()))
        displayValue.textContent = classCalculator.getResult();
    else {
        displayValue.textContent = classCalculator.getResult().toFixed(2);
    }
    displayOperation.innerHTML = "";
    operationCounter = 0;
    classCalculator.clearCalculator();
}
function calculatePercent(operand2) {
    classCalculator.setOperand2(operand2);
    displayValue.textContent = classCalculator.getResultPercent();
    displayOperation.innerHTML = "";
    operationCounter = 0;
}
function clearCalculator() {
    classCalculator.clearCalculator();
    displayOperation.innerHTML = "";
    displayValue.textContent = 0;
    classCalculator.clearCalculator();
    operationCounter = 0;
}