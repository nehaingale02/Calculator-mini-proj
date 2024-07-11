// calci.js

// Get the display element from the HTML
let display = document.getElementById('display');

// Initialize variables to store the current operation, current value, previous value, and result
let currentOperation = '';
let currentValue = '';
let previousValue = '';
let result = '';

// Function to append a value to the display and update the current value
function appendToDisplay(value) {
    // If there's a result already, clear the display first
    if (result) {
        clearDisplay();
    }
    // Append the value to the display input
    display.value += value;
    // Append the value to the current value string
    currentValue += value;
}

// Function to set the operation to be performed
function operation(op) {
    // If there's no current value and the operation isn't 'square', do nothing
    if (currentValue === '' && op !== 'square') return;
    // If there's already an operation set, calculate the result first
    if (currentOperation) {
        calculate();
    }
    // If the operation is 'square', set it and calculate immediately
    if (op === 'square') {
        previousValue = currentValue;
        currentOperation = 'square';
        calculate();
    } else {
        // Otherwise, set the previous value, current operation, and reset current value
        previousValue = currentValue;
        currentOperation = op;
        currentValue = '';
        // Update the display to show the operation
        display.value += ` ${op} `;
    }
}

// Function to calculate the result of the current operation
function calculate() {
    // If there's no operation set, do nothing
    if (currentOperation === '') return;

    // Parse the previous and current values as floats
    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(currentValue);

    // Perform the operation based on the currentOperation
    switch (currentOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case 'square':
            result = num1 * num1;
            break;
        default:
            return;
    }
    // Update the display with the result
    display.value = result;
    // Set the current value to the result for further calculations
    currentValue = result;
    // Reset the previous value and current operation
    previousValue = '';
    currentOperation = '';
}

// Function to clear the display and reset all variables
function clearDisplay() {
    display.value = '';
    currentValue = '';
    previousValue = '';
    currentOperation = '';
    result = '';
}
