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
        // Allow operator to be added if no input yet
        if (operator !== '-') { // Allow only the negative sign as the first operator
            return; // Prevent other operators at the start
        }
        currentInput += operator; // Start with negative sign if clicked first
    } else {
        // Prevent consecutive operators (e.g., ++ or --)
        const lastChar = currentInput[currentInput.length - 1];
        if (['+', '-', '*', '/'].includes(lastChar)) {
            return; // Do not allow repeated operators
        }
        currentInput += operator;
    }
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

// Append open bracket '(' to the input
const appendOpenBracket = () => {
    currentInput += '(';
    updateDisplay(currentInput);
};

// Append close bracket ')' to the input
const appendCloseBracket = () => {
    // Check if the last character is an operator or an open bracket
    if (currentInput === '' || currentInput === "Error" || currentInput === "Infinity" || currentInput === "NaN") {
        return; // Prevent invalid input
    }
    currentInput += ')';
    updateDisplay(currentInput);
};

// Delete the last character from the input
const deleteLastCharacter = () => {
    if (currentInput !== '') {
        currentInput = currentInput.slice(0, -1); // Remove the last character
    }
    if (currentInput === '') {
        currentInput = '0'; // If empty, set display to 0
    }
    updateDisplay(currentInput);
};

// Calculate the result
const calculate = () => {
    try {
        // Check for edge cases like division by zero or invalid input
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
