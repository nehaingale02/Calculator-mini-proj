 // Function to append numbers and operators to display
 function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to perform operations
function operation(operator) {
    let display = document.getElementById('display');
    switch(operator) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            display.value += operator;
            break;
        case 'square':
            let currentValue = display.value;
            display.value = eval(currentValue + '*' + currentValue);
            break;
    }
}

// Function to calculate the result
function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = 'Error';
    }
}