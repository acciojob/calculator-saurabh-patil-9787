let currentInput = '';

// Function to update the display
const updateDisplay = (value) => {
    const display = document.getElementById('input');
    display.value = value;
};

// Append numbers to the input
const appendNumber = (number) => {
    if (currentInput === '0' || currentInput === "Error" || currentInput === "Infinity" || currentInput === "NaN") {
        currentInput = ''; // Clear invalid or previous result
    }
    currentInput += number;
    updateDisplay(currentInput);
};

// Append operator to the input
const appendOperator = (operator) => {
    if (currentInput === '' || currentInput === "Error" || currentInput === "Infinity" || currentInput === "NaN") {
        return; // Prevent invalid input
    }
    currentInput += operator;
    updateDisplay(currentInput);
};

// Append decimal to the input
const appendDecimal = () => {
    if (currentInput === '' || currentInput === "Error" || currentInput === "Infinity" || currentInput === "NaN") {
        currentInput = '0.'; // Start with decimal
    } else if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay(currentInput);
};

// Calculate the result
const calculate = () => {
    try {
        let result = eval(currentInput);

        // Handle division by zero and invalid results
        if (result === Infinity || result === -Infinity) {
            result = "Infinity";
        }
        if (isNaN(result)) {
            result = "NaN";
        }

        // Display the result
        currentInput = result.toString();
        updateDisplay(currentInput);
    } catch (error) {
        currentInput = "Error";
        updateDisplay(currentInput);
    }
};

// Clear the display
const clearDisplay = () => {
    currentInput = '';
    updateDisplay('0');
};
