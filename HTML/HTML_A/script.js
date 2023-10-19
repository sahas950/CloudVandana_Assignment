let currentDisplay = '';
let currentOperation = null;
let firstOperand = null;

function appendToDisplay(value) {
    if (currentDisplay === '0' || currentDisplay === 'Error') {
        currentDisplay = value;
    } else {
        currentDisplay += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentDisplay = '0';
    currentOperation = null;
    firstOperand = null;
    updateDisplay();
}

function performOperation(operation) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentDisplay);
        currentOperation = operation;
        currentDisplay = '0';
    } else {
        currentOperation = operation;
        firstOperand = parseFloat(currentDisplay);
        currentDisplay = '0';
    }
    updateDisplay();
}

function calculateResult() {
    if (currentOperation !== null) {
        const secondOperand = parseFloat(currentDisplay);
        switch (currentOperation) {
            case '+':
                currentDisplay = (firstOperand + secondOperand).toString();
                break;
            case '-':
                currentDisplay = (firstOperand - secondOperand).toString();
                break;
            case '*':
                currentDisplay = (firstOperand * secondOperand).toString();
                break;
            case '/':
                if (secondOperand === 0) {
                    currentDisplay = 'Error';
                } else {
                    currentDisplay = (firstOperand / secondOperand).toString();
                }
                break;
        }
        firstOperand = null;
        currentOperation = null;
        updateDisplay();
    }
}

function updateDisplay() {
    const displayElement = document.getElementById('display');
    displayElement.textContent = currentDisplay;
}
